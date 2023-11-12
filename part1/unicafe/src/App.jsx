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
    //const newGood = good + 1
    setGood(good + 1) 
    console.log('good', good)
    setTotal(total + 1)
    setPositive(positive + 1)
    console.log('total', total)
    setCount(count + 1)
    console.log('count', count)
    
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log('neutral', neutral)
    console.log('total', total)
    setCount(count + 1)
    console.log('count', count)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    console.log('bad', bad)
    setTotal(total - 1)
    console.log('total', total)
    setCount(count + 1)
    console.log('count', count)
  }
  
  const average = total / count
  const posPercent = positive / count

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
      <Display text='all' value={total} />
      <Display text='average' value={average || 0} />
      <Display text='positive' value={posPercent || 0}/>
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