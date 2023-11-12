import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {  
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => {
  console.log('props value: ', handleClick)
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)

  const setValueMe = (newValue) => () => {
    setValue(newValue)
    console.log('value now', newValue)
  }
  

  return (
    <div>
      <Display value={value} />
      <Button handleClick={setValueMe(1000)} text='thousand' />
      <Button handleClick={setValueMe(0)} text='reset' />
      <Button handleClick={setValueMe(value + 1)} text='increment' />
    </div>
  )
}
export default App


