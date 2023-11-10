import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 2),
    1000
  )
  console.log('rendering...', counter)
  return (
    <div>{counter}</div>
  )
}

export default App