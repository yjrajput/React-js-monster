import React, { useContext } from 'react'
import { Data } from '../App'
import { Data1 } from '../App'
const ComponentThree = () => {
    const name = useContext(Data)
    const age = useContext(Data1)
  return (
    <div>
        {/* <Data.Consumer>
            
            {(name) => {
                return(
                <Data1.Consumer>
                    {
                        (age) => {
                            return(
                                <h1>Hello my name is {name} and i'm {age} year old</h1>
                            )
                        }
                    }
                </Data1.Consumer>
                )
            }}
        
            
        </Data.Consumer> */}

        <h1>Hello my name is {name} and i'm {age} year old</h1>
    </div>
  )
}

export default ComponentThree