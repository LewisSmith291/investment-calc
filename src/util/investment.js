export function calculateInvestmentResults({begInvestment, annInvestment, retInvestment, yearInvestment}, currencySymbol="£"){
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
  
  return annualData;
}