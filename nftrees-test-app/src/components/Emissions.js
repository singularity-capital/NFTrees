import React, { useState, useEffect} from 'react';
import './Emissions.css';
import { calculateAddressEmissions } from "ethereum-emissions-calculator";
import CountUp from 'react-countup';
import ClipLoader from "react-spinners/ClipLoader";



function Emissions (props){
    const[totalGas, setTotalGas] = useState(0);
    const[totalKg, setTotalKg] = useState(0);
    const[totalTransactions, setTotalTransactions] = useState(0);
    const[validInput, setValidInput] = useState();
    const[calculating, setCalculating] = useState(false);
    var loading;

    useEffect(() => {
        loading = document.querySelector('#loading');
      },[calculating, validInput]);

    const handleCalculateEmissions = async () => {
        setCalculating(true);
        setTotalGas(undefined);
        setTotalKg(undefined);
        setTotalTransactions(undefined);
        setValidInput(undefined);

        loading.style.display = 'block';
        var gas = 0;
        var co2 = 0;
        var transactions = 0;
        var typeTransaction = ['eth', 'erc20', 'erc721'];

        const address = document.getElementById('input').value;
        var apiKey = '4QBBENHPDFF6FAQGF8E71NFE9RNZH1MCPW';
        console.log(address);
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
                    <div style= {{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
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
                    <div>
                        <div className = 'summary'>
                            It would take an adult tree {Math.round(totalKg/21)} years to to absorb your emissions. Go carbon negative and reduce your carbon footprint with NFTrees.
                        </div>
                        <div style = {{color: '#fff', paddingTop: '10px'}}>
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
                        <div className = 'outputRight'>
                            <div className = 'loading' id = 'loading' style= {{display: 'none', color: 'blue'}}><ClipLoader className = 'load' color = {'#fff'}/></div>
                            {printData()}
                        </div>
                    </div>
                </div>
                {printSummary()}
            </div>
            <div className = 'site'> calculated with <a href = 'https://carbon.fyi/' target = '_blank' style = {{color: '#6e8a67b0', textDecoration: 'none'}}>carbon.fyi</a> </div>
        </div>
    );
}

export default Emissions;
