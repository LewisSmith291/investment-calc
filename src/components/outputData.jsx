import { useState } from 'react';
import calculateInvestmentResults from '../util/investment.js';

export default function OutputData({inputVal}) {
  const [results, setResults] = useState(inputVal);

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Total Amount Investment</th>
        </tr>
      </thead>
    </table>
  )
}
