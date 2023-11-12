import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1) 
    setTotal(total + 1)
    setPositive(positive + 1)
    setCount(count + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setCount(count + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setTotal(total - 1)
    setCount(count + 1)
  }
  
  const average = total / count
  const posPercent = positive / count
  const totalFeedback = good + neutral + bad; 

  return (
    <div>
      <h1>give feedback</h1>
      <div> 
        <Button handleClick={() => handleGoodClick()} text='good'/>
        <Button handleClick={() => handleNeutralClick()} text='neutral'/>
        <Button handleClick={() => handleBadClick()} text='bad'/> 
      </div>
      {totalFeedback === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <h2>statistics</h2>
          <Statistics text='good' value={good} />
          <Statistics text='neutral' value={neutral} />
          <Statistics text='bad' value={bad} />
          <Statistics text='all' value={total} />
          <Statistics text='average' value={average || 0} />
          <Statistics text='positive' value={posPercent || 0}/>
        </>
      )}
    </div>
  )

 
}

export default App

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => <div>{props.text} {props.value}</div>