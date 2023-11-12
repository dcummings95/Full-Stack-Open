import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)



  return (
    <div>
      <h1>give feedback</h1>
      <div> 
        <Button handleClick={() => handleGoodClick()} text='good'/>
        <Button handleClick={() => handleNeutralClick()} text='neutral'/>
        <Button handleClick={() => handleBadClick()} text='bad'/> 
      </div>
      <h2>statistics</h2>
      <Display text='good' value={good} />
       
      <Display text='neutral' value={neutral} />
       
      <Display text='bad' value={bad} />
    </div>
  )
}

export default App

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Display = (props) => <div>{props.text} {props.value}</div>