import React, { useState, useEffect} from 'react';
import './Emissions.css';
import { calculateAddressEmissions } from "ethereum-emissions-calculator";
import CountUp from 'react-countup';
import ClipLoader from "react-spinners/ClipLoader";
//import firebase from 'firebase/app';
//import functions from "firebase/functions";
import firebase from '../firebase';

function Emissions (props){
    const[totalGas, setTotalGas] = useState(0);
    const[totalKg, setTotalKg] = useState(0);
    const[totalTransactions, setTotalTransactions] = useState(0);
    const[validInput, setValidInput] = useState();
    const[calculating, setCalculating] = useState(false);
    var loading;
    let apiKey;

    useEffect(() => {
        loading = document.querySelector('#loading');
    }, [calculating, validInput]);

    const handleCalculateEmissions = async () => {
        setCalculating(true);
        setTotalGas(undefined);
        setTotalKg(undefined);
        setTotalTransactions(undefined);
        setValidInput(undefined);

        loading.style.display = 'flex';
        var gas = 0;
        var co2 = 0;
        var transactions = 0;
        var typeTransaction = ['eth', 'erc20', 'erc721'];
        var apiKey;

        const address = document.getElementById('input').value;

        const callableReturnMessage = firebase.functions().httpsCallable('test');
    
        await callableReturnMessage().then((result) => {
            apiKey = result.data.etherscanKey;
        }).catch((error) => {
          console.log(`error: ${JSON.stringify(error)}`);
        });

        if((address.length === 42) & (address.slice(0, 2) === '0x')){
            for (var i = 0; i < 3; i++) {
                const emissions = await calculateAddressEmissions({
                    transactionType: typeTransaction[i],
                    address,
                    etherscanAPIKey: apiKey,
                });
                
                gas += emissions['gasUsed'];
                co2 += emissions['kgCO2'];
                transactions += emissions['transactionsCount'];
            }
            
            setTotalGas(gas);
            setTotalKg(co2);
            setTotalTransactions(transactions);
            setValidInput(true);
        } else {
            setValidInput(false);
        }
        loading.style.display = 'none';
        setCalculating(false);
    }

    function printData() {

        if (validInput !== undefined){
            if(validInput){
                return(
                    <div className = 'outputRight'>
                        <div className = 'outputTextRight'> <CountUp end = {totalTransactions} separator ={','}/> </div>
                        <div className = 'outputTextRight'> <CountUp end = {totalGas} separator ={','}/> gas </div>
                        <div className = 'outputTextRight'> <CountUp end = {totalKg} separator ={','}/> kg</div>
                    </div>
                )
            }
        }
    }

    function printSummary() {
        if (validInput !== undefined){
            if(validInput){
                return(
                    <div className = 'summaryContainer'>
                        <div className = 'summary'>
                            It would take an adult tree {Math.round(totalKg/21)} years to absorb your emissions. Offset your carbon footprint with NFTrees.
                        </div>
                        <div className = 'emissionsComingSoon'>
                            coming soon
                        </div>
                    </div>
                )
            }
        }
    }
    
    return(
        <div className = 'emissionsContainer'>
            <div className = 'spacer'/>
            <div className = 'emissionsContent'>
                <input className = 'input' 
                    id = 'input' 
                    style = {validInput === false ? {borderColor : 'rgba(255, 62, 62, 0.63)', transition : '1s'} : {}} 
                    placeholder = 'Ethereum address'
                />
                <button onClick = {handleCalculateEmissions} className = 'calculate'> calculate </button>
                <div className = 'emissionsBottom'>
                    <div className = 'outputContainer'>
                        <div className = 'outputLeft'>
                            <div className = 'outputTextLeft'> Transactions:</div>
                            <div className = 'outputTextLeft'> Gas Spent:</div>
                            <div className = 'outputTextLeft'> CO<sub>2</sub> Produced:</div>
                        </div>
                        <div style = {{height: '100%', width: '50%'}}>
                            <div className = 'loading' id = 'loading' style= {{display: 'none', color: 'blue'}}><ClipLoader className = 'load' color = {'#fff'}/></div>
                            {printData()}
                        </div>
                    </div>
                </div>
                {printSummary()}
            </div>
            <div className = 'site'> calculated with <a href = 'https://carbon.fyi/' target = '_blank' rel = 'noreferrer' style = {{color: '#6e8a67b0', textDecoration: 'none'}}> carbon.fyi </a></div>
        </div>
    );
}

export default Emissions;
