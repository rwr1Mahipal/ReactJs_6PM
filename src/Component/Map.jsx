import React from "react";

const Map = () => {
  const users = [
    { id: 1, name: "Jhon", age: 20 },
    { id: 2, name: "Alice", age: 22 },
    { id: 3, name: "David", age: 24 },
    { id: 4, name: "Shakti", age: 26 },
  ];

  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Id: {user.id}</h1>
          <h1 className="map-h1">Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
        </div>
      ))}

      {users
        .filter((user) => user.age >= 24)
        .map((filterUser) => (
          <div key={filterUser.id}>
            <h1 className="text-5xl">Name: {filterUser.name}</h1>
          </div>
        ))}
    </div>
  );
};

export default Map;
