import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './UserList.css' 


const UserList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    
      axios.get ('https://jsonplaceholder.typicode.com/users')
      .then (res => {
        
        setUsers (res.data)
      })

    .catch (error => {
        console.log(error)
    })
    
  })
  return (
    <div>
    {users.map((user,i)=>(
        <div key={i} className="user">
            <div className="user-id">id :{user.id} </div> 
            <div className="user-name">Name :{user.name} </div> 
            <div className="user-username">UserName :{user.username} </div>
            <div className="user-email">E-mail :{user.email} </div>
            <div className="user-address"> 
                <p className="title">Address:</p>
                <span>street:{user.address.street}</span> <br></br>
                <span>suite:{user.address.suite}</span><br></br>
                <span>city:{user.address.city}</span><br></br>
                <span>zipcode:{user.address.zipcode}</span>
            </div>
        </div>
        ))}
    
</div>
  )
}

export default UserList