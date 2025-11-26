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

  const [results, setResults] = useState(calculateInvestmentResults(inputVal));

  useEffect(() => {
    setResults(calculateInvestmentResults(inputVal, currencySymbol));
  }, [inputVal, currencySymbol]);

  return (
    <table id="output-table">
      <thead>
        <tr>
          <th className='year'>Year</th>
          <th>Initial Investment</th>
          <th>Interest per year</th>
          <th>Total Interest</th>
          <th>Total Amount Investment</th>
        </tr>
      </thead>
      <tbody>
        {
          results.map(results  => {
            const totalInterest = null;
            return <tr key={results.year}>
              <td className='year'>{results.year}</td>
              <td className='investment'>{formatter.format(results.investmentValue)}</td>
              <td className='interest-year'>{formatter.format(results.interest)}</td>
              <td className='interest-total'>{formatter.format(totalInterest)}</td>
              <td className='investment-total'>{formatter.format(results.investedCapital)}</td>
            </tr>
          })
        }
      </tbody>
    </table>
  );

}

function calculateInvestmentResults({begInvestment, annInvestment, retInvestment, yearInvestment}, currencySymbol="£"){
  const annualData=[];
  let investmentValue = begInvestment;
  let totalInterest = 0;
  let investedCap = Number(begInvestment.slice(1,begInvestment.length));

  console.log(investedCap);
  investmentValue = Number(investmentValue.slice(1,investmentValue.length));
  annInvestment = Number(annInvestment.slice(1,annInvestment.length)); 


  for(let i = 0; i< yearInvestment; i++){
    const interestEarnedInYear = investmentValue * (retInvestment / 100);
    totalInterest += interestEarnedInYear;
    investedCap += annInvestment;
    investmentValue += interestEarnedInYear + annInvestment;
    annualData.push({
      year: i+1,
      investmentValue: investmentValue,
      interest: interestEarnedInYear,
      totalInterest: totalInterest,
      investedCapital: investedCap,
    });
  }
  return annualData;
}
