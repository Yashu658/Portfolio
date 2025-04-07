import React, { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";

const Converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const cur_url = "https://api.frankfurter.app/currencies";
      try {
        const response = await fetch(cur_url);
        const data = await response.json();
        setCurrencies(Object.keys(data));
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };
    fetchCurrencies();
  }, []);

  const convertCurrency = async () => {
    if (from === to) {
      setConvertedAmount(amount);
      return;
    }

    try {
      const response = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const data = await response.json();
      setConvertedAmount(data.rates[to]);
    } catch (error) {
      console.error("Error converting currency:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16 bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        Currency Converter
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
          <select
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
          >
            {currencies.map((currency) => (
              <option value={currency} key={currency}>{currency}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
          <select
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-50"
          >
            {currencies.map((currency) => (
              <option value={currency} key={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center my-6">
        <ArrowRightLeft className="text-gray-500" size={32} />
      </div>

      <div className="mb-6">
        <input
          type="number"
          id="amount1"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-4 text-lg border border-gray-300 rounded-md bg-amber-50"
        />
      </div>

      <button
        onClick={convertCurrency}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-200"
      >
        Convert
      </button>

      {convertedAmount !== null && (
        <div className="mt-6 text-center text-2xl text-green-600 font-bold">
          {amount} {from} = {convertedAmount} {to}
        </div>
      )}
    </div>
  );
};

export default Converter;
