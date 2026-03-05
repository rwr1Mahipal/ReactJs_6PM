import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name, setName] = useState("NodeJs")
    console.log(name);
    
    // const user = {
    //     name: "Jhon",
    //     age: 20
    // }
  return (
    <div>
        <h1>Name: {name}</h1>
        {/* <h1>Age: {user.age}</h1> */}
        <Child name={name}/>
    </div>
  )
}

export default Parent