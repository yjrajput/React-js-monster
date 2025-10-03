import React, { createContext } from 'react'
import ComponentOne from './components/ComponentOne';

export const Data = createContext();
export const Data1 = createContext();
const App = () => {
  const name = 'yuvraj singh rathore'
  const age = 22
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
        <ComponentOne/>
        </Data1.Provider>
      </Data.Provider>
    </div>
  )
}

export default App