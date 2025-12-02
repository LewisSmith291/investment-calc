import { useState, useEffect } from 'react';

export default function OutputData({currencySymbol, inputVal}) {
  let acronym = "";
  switch(currencySymbol){
    case "£":
    acronym = "GBP"
      break;
    
    case "$":
      acronym = 'USD'
      break;

    case "¥":
      acronym = 'CNY'
      break;

    case "€":
      acronym = 'EUR'
      break;
  }
  const formatter = new Intl.NumberFormat('en-GB', {
    style:'currency',
    currency: acronym,
    minimumFractionDigits:0,
    maximumFractionDigits:0
  })

  function removeCurrency(input){
    const newValue = Number(input.replace(/[¥£$€]/g, ""));
    console.log(newValue);
    return newValue;
  }

  const [results, setResults] = useState(calculateInvestmentResults(inputVal));

  //console.log(inputVal);
  useEffect(() => {
    setResults(calculateInvestmentResults(inputVal, currencySymbol));
    console.log(inputVal);
  }, [inputVal, currencySymbol]);


  return (
    <table id="output-table">
      <thead>
        <tr>
          <th className='year'>Year</th>
          <th>Initial Investment</th>
          <th>Interest per year</th>
          <th>Total Interest</th>
          <th>Total Added Investment</th>
          <th>Total Funds of Investment</th>
        </tr>
      </thead>
      <tbody>
        {
          results.map((result, index) => {
            return <tr key={result.year}>
              <td className='year'>{result.year}</td>
              <td className='investment'>{formatter.format(result.investmentValue)}</td>
              <td className='interest-year'>{formatter.format(result.interest)}</td>
              <td className='interest-total'>{formatter.format(result.totalInterest)}</td>
              <td className='investment-total'>{formatter.format(result.investedCapital)}</td>
              <td className='current-pot'>{formatter.format(result.totalPot)}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  );
}

function calculateInvestmentResults({begInvestment, annInvestment, retInvestment, yearInvestment}, currencySymbol="£"){
  const annualData=[];
  let annualInvestment = Number(annInvestment.slice(1,annInvestment.length)); 
  let initialInvestment = Number(begInvestment.slice(1,begInvestment.length));
  let totalInterest = 0;
  let interestEarnedInYear = 0;
  let investedCap = Number(begInvestment.slice(1,begInvestment.length));

  let pot = investedCap;


  for(let i = 0; i< yearInvestment; i++){
    pot += annualInvestment;
    interestEarnedInYear = pot * (retInvestment / 100);
    pot = pot + interestEarnedInYear;

    investedCap += annualInvestment;

    totalInterest += interestEarnedInYear;

    annualData.push({
      year: i+1,
      investmentValue: initialInvestment,
      interest: annualInvestment,
      totalInterest: totalInterest,
      investedCapital: investedCap,
      totalPot: pot
    });
  }
  
  console.log(annualData);
  return annualData;
}
