import React, { useState } from 'react';
import './Emissions.css';
import { calculateAddressEmissions } from "ethereum-emissions-calculator";
import CountUp from 'react-countup';
import ClipLoader from "react-spinners/ClipLoader";


function Emissions (props){
    const[totalGas, setTotalGas] = useState(0);
    const[totalKg, setTotalKg] = useState(0);
    const[totalTransactions, setTotalTransactions] = useState(0);
    const[validInput, setValidInput] = useState();
    const[loading, setLoading] = useState(false);


    const handleCalculateEmissions = async () => {
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
    }

    function printData() {
        if(loading){
            <div>hello</div>
        } else {
            if (validInput !== undefined){
                if(validInput){
                    return(
                        <div className = 'outputRight'>
                            <div className = 'outputText'> <CountUp end = {totalGas} separator ={','}/> gas </div>
                            <div className = 'outputText'> <CountUp end = {totalKg/1000} separator ={','} decimals = {2}/> tonne</div>
                            <div className = 'outputText'> <CountUp end = {totalTransactions} separator ={','}/> </div>
                        </div>
                    )
                }
            }
        }
    }
    
    return(
        <div className = 'emissionsContainer'>
            <div className = 'spacer'/>
            <div className = 'emissionsContent'>
                <input className = 'input' 
                    id = 'input' 
                    style = {validInput === false ? {borderColor : 'red', transition : '1s'} : {}} 
                    placeholder = 'Ethereum address'
                />
                <button onClick = {handleCalculateEmissions} className = 'calculate'> calculate emissions</button>
                <div className = 'emissionsBottom'>
                    <div className = 'outputContainer'>
                        <div className = 'outputLeft'>
                            <div className = 'outputText'> Total gas used:</div>
                            <div className = 'outputText'> Total CO2 produced:</div>
                            <div className = 'outputText'> Total transactions:</div>
                        </div>
                        {printData()}
                    </div>
                </div>
            </div>
            <div className = 'site'> calculated with <a href = 'https://carbon.fyi/' target = '_blank' style = {{color: '#6e8a67b0', textDecoration: 'none'}}>carbon.fyi</a> </div>
        </div>
    );
}

export default Emissions;
