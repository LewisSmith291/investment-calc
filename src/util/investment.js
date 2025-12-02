export default function calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration}){
  const annualData=[];
  let investmentValue=initialInvestment;
  let totalInterest = 0;
  let investedCap = initialInvestment;

  for(let i = 0; i< duration; i++){
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investedCap += annualInvestment;
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInterest += interestEarnedInYear;
    console.log("Post- in year: "+interestEarnedInYear+" investValue:"+investmentValue + "Total: "+totalInterest);
    annualData.push({
      year: i+1,
      interest: interestEarnedInYear,
      investmentValue: investmentValue,
      totalInterest: totalInterest,
      investedCapital: investedCap,
    });
  }
  return annualData;
}
