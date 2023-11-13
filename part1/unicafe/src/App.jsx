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

  const average = ((total / count) * 100).toFixed(1) + '%'
  const posPercent = ((positive / count) * 100).toFixed(1) + '%'
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
          <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={totalFeedback} 
            average={average}
            posPercent={posPercent}
          />
        </>
      )}
    </div>
  )

 
}

export default App

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticsLine = ({ text, value }) => <div>{text} {value}</div>

const Statistics = ({ good, neutral, bad, total, average, posPercent }) => {
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr>
            <td><StatisticsLine text='good' value={good} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text='neutral' value={neutral} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text='bad' value={bad} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text='all' value={total} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text='average' value={average} /></td>
          </tr>
          <tr>
            <td><StatisticsLine text='positive' value={posPercent}/></td>
          </tr>
        </tbody>
      </table> 
    </div>
  );
}
