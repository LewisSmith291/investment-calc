import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Header(props) {
  const [currency, setCurrency] = useState(props.currency)


  function selectChange(event){
    setCurrency(event.target.value);
    props.currFunc(event.target.value);
  }

  return (
    <header id="header">
      <select id="currency-select" onChange={selectChange} value={currency}>
        <option value="£">🇬🇧 GBP - £</option>
        <option value="$">🇺🇸 USD - $</option>
        <option value="€">🇪🇺 EUR - €</option>
        <option value="¥">🇨🇳 CNY - ¥</option>
      </select>
      <h1>{props.title}</h1>
      <img src={logo} alt="Investment Calculator Logo"/>
    </header>
  )
}