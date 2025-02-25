import React, { useState, useEffect } from "react";

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
    <div className="w-auto h-auto p-5">
      <div className="grid gap-3">
        <label htmlFor="from">From</label>
        <select
          name="from"
          id="from"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-2 border rounded"
        >
          {currencies.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>

        <label htmlFor="to">To</label>
        <select
          name="to"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-2 border rounded"
        >
          {currencies.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <input
          type="number"
          name="amount"
          id="amount1"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-3 rounded border-2 bg-amber-50 text-xl w-full"
        />
      </div>

      <div className="flex mt-4 justify-center">
        <button
          onClick={convertCurrency}
          className="bg-blue-500 p-3 text-white rounded text-xl shadow-md hover:bg-blue-800"
        >
          Convert
        </button>
      </div>

      {convertedAmount !== null && (
        <div className="mt-4 text-2xl text-green-600">
          Converted Amount: {convertedAmount} {to}
        </div>
      )}
    </div>
  );
};

export default Converter;
