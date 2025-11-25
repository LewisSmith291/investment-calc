import { useState } from 'react';

export default function OutputData() {
  return (
    <table id="output-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest(year)</th>
          <th>Total Interest</th>
          <th>Total Amount Investment</th>
        </tr>
      </thead>
      <tbody>
        {/*
          results.map(yearData => {
            return <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{yearData.annInvestment}</td>
            </tr>
          })
          */
        }
      </tbody>
    </table>
  )
}