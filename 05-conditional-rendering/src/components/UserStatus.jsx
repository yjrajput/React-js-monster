import React from 'react'

const UserStatus = ({isAdmin, isLogin}) => {
  return (
    <div>
        {
            isAdmin && isLogin ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>
        }
    </div>
  )
}

export default UserStatus