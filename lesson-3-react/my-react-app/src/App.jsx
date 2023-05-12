import { useState } from 'react'
import { Input } from './components/Input/Input'
import { Button } from './components/Button/Button'
import { Text } from './components/Text/Text'

import './App.css'

function App() {
  const [firstInput, setFirstInput] = useState('');
  const [secondInput, setSecondInput] = useState('');
  const [searchElem, setSearchElem] = useState('');
  const [elem, setElem] = useState([]);
  const [elementsWithSearch, setElementsWithSearch] = useState([])

  const handleResetInputs = () => {
    setElem(prevState => ([{
      task: firstInput,
      details: secondInput,
    }, ...prevState]))

    setFirstInput('');
    setSecondInput('')
  }

  const sortElements = (event) => {
    setSearchElem(event.target.value)

    if (elem.length) {
      setElementsWithSearch(elem.filter(el => {
        return el.task.includes(event.target.value) || el.details.includes(event.target.value)
      }
      ))

    }
  }

  return (
    <>
      <div>
        <Input
          value={firstInput}
          onChange={(event) => setFirstInput(event.target.value)}
        />
        <Input
          value={secondInput}
          onChange={event => setSecondInput(event.target.value)}
        />
        <Button
          onClick={handleResetInputs}
        />
        <Input
          value={searchElem}
          onChange={sortElements}
          placeholder='Search'
        />
      </div>
      <div className='container'>

        {searchElem ? elementsWithSearch.map((element) =>
          <Text key={element.task}>
            {element.task}
            :
            {element.details}
          </Text>
        ) : elem.map((element) =>
          <Text key={element.task}>
            {element.task}
            :
            {element.details}
          </Text>
        )}
      </div>
    </>
  )
}

export default App