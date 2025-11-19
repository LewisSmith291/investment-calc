import React from 'react'
import { useState } from 'react'

export default function UserInput() {
  
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  });
  
  return (
    <div id="input-group">
      <div className="input-section">
        <label>Initial Investment</label>
        <input type="number" required placeholder="0"/>
      </div>
      <div className="input-section">
        <label>Annual Investment</label>
        <input type="number" required placeholder="0"/>
      </div>
      <div className="input-section">
        <label>Expected Return</label>
        <input type="number" required placeholder="0"/>
      </div>
      <div className="input-section">
        <label>Yearly Investment</label>
        <input type="number"  placeholder="0"/>
      </div>
    </div>
  )
}
