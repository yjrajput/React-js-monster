import React from 'react'

const UserList = ({users}) => {
  return (
    <div>
        {
            users.map(({id, name, age}) =>(
                <li key={id}>
                    <h1>Name: {name}</h1>
                    <p>Age: {age}</p>
                </li>
            ))
        }
    </div>
  )
}

export default UserList