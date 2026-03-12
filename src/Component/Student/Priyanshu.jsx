import React from 'react'

const Priyanshu = () => {
    const users = [
    { id: 1, name: "Jhon", age: 20 },
    { id: 2, name: "Alice", age: 22 },
    { id: 3, name: "David", age: 24 },
    { id: 4, name: "Shakti", age: 26 },
  ];
  const filterUser= users.filter((user) => user.age>22)

  return (
    <div>
        {filterUser.map((user)=>(
            <div key={user.id}>
                <h1>NAME: {user.name}</h1>
            </div>
        ))}
    </div>
  )
}

export default Priyanshu