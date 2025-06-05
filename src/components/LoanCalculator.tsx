import React, { useState, useEffect } from 'react';
import { calculateLoan, formatCurrency, storeInUrl, getFromUrl } from '../utils/helpers';

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(50000);
  const [duration, setDuration] = useState(3);
  const [calculation, setCalculation] = useState({
    amount: 50000,
    duration: 3,
    interestRate: 10,
    totalPayable: 65000,
    monthlyPayment: 21667
  });

  // Load values from URL on initial render
  useEffect(() => {
    const urlAmount = getFromUrl('amount');
    const urlDuration = getFromUrl('duration');
    
    if (urlAmount) {
      setAmount(Number(urlAmount));
    }
    
    if (urlDuration) {
      setDuration(Number(urlDuration));
    }
  }, []);

  // Calculate loan and store in URL when values change
  useEffect(() => {
    const interestRate = 10; // 10% monthly interest
    const result = calculateLoan(amount, interestRate, duration);
    setCalculation(result);
    
    storeInUrl('amount', amount.toString());
    storeInUrl('duration', duration.toString());
  }, [amount, duration]);

  return (
    <div className="card p-6 w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold text-center mb-6">Loan Calculator</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Loan Amount ({formatCurrency(amount)})
        </label>
        <input 
          type="range" 
          min="5000" 
          max="500000" 
          step="5000" 
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₦5,000</span>
          <span>₦500,000</span>
        </div>
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Loan Duration ({duration} month{duration !== 1 ? 's' : ''})
        </label>
        <input 
          type="range" 
          min="1" 
          max="12" 
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1 month</span>
          <span>12 months</span>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Monthly Interest Rate</p>
            <p className="text-lg font-semibold">{calculation.interestRate}%</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Monthly Payment</p>
            <p className="text-lg font-semibold">{formatCurrency(calculation.monthlyPayment)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="text-lg font-semibold">{calculation.duration} month{calculation.duration !== 1 ? 's' : ''}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Repayment</p>
            <p className="text-lg font-semibold">{formatCurrency(calculation.totalPayable)}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6">
        <a 
          href="https://play.google.com/store/apps/details?id=com.constantcash.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary w-full text-center"
        >
          Apply for a Loan Now
        </a>
      </div>
    </div>
  );
};

export default LoanCalculator;