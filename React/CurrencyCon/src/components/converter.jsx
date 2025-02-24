import React, { useState } from 'react'
import { useEffect } from 'react';

const Converter = () => {

const [currency,setCurrency]=useState([]);
const [amount,setAmount]=useState(1);
const [from, setFrom] = useState("USD");
const [to, setTo] = useState("INR");
const [convertedAmount, setConvertedAmount] = useState(null);

const currencies= async () => {
     const cur_url = `https://api.frankfurter.dev/v1/currencies`;

    try {
      const responce = await fetch(cur_url);
      const data = await responce.json();
     
      setCurrency(object.keys(data))
      }catch (error) {
        console.log("Error finding currency " + error);
      }
    }
    

    useEffect(()=>{
        currencies();
    },[]);

console.log(currency);


const convertCurrency = async () => {
    if (from === to) {
      setConvertedAmount(amount);
      return;
    }

    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await response.json();
      setConvertedAmount(data.rates[to]);
    } catch (error) {
      console.error("Error converting currency:", error);
    }

  return (
    <div className='w-auto h-15 '>
        <div className='grid'>
            <label htmlFor="frome">Frome</label>
            <select name="from" id="from" value={frome}
          onChange={(e) => setFrome(e.target.value)}>
                {currency.map((currenies)=>{
                    <option value={currencies} key={currencies}>{currencies}</option>
                })}
            </select>
            <label htmlFor="to">To</label>
            <select 
            name="to"
             id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}>
                {currency.map((currenies)=>{
                    <option value={currencies} key={currencies}>{currencies}</option>
                })}
            </select>
        </div>
        <div className=''>
           
        <input
          type="number"
          name="amount"
          id="amount1"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 rounded border-2  bg-amber-50 text-3xl mt-50 "
        />
        
        </div>
        <div className='flex '>
            <button onClick={convertCurrency} className='bg-blue-500 P-5 text-white rounded text-2xl justify-center shadow-amber-200 mx-60 py-3 px-5 mt-10 hover:bg-blue-800 '>Convert</button>
             </div>
             {convertedAmount !== null && (
        <div className="mt-4 text-2xl text-green-600">
          Converted Amount: {convertedAmount} {to}
        </div>
      )}
    </div>
  )
} 
}

export default Converter;