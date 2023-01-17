import { useState } from 'react'

const users =[
    {name: 'Walter White', age: 55 },
    {name: 'Jesse Pinkman', age: 30 },
    {name: 'Tuco Salamanca', age: 45 },
    {name: 'Gus Fring', age: 52 },
    {name: 'Saul Goodman', age: 52 },
    {name: 'Mike Ehrmantraut', age: 52 },
]


const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    const onClick = () => {
      const searchUser = users.find((user) => {

        //search .slice(0, name.length) to see if it matches
        //if it does, return the user
        //toUpperCase() to make it case insensitive
        if (user.name.slice(0, name.length).toLowerCase() === name ) {
          return name;
        } else {
          return undefined;
        }
      });

      setUser(searchUser)
    };

    return (
      <div className="container">
        <h3>USER SEARCH</h3>
        <input
          value={name}
          className="u-full-width"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={onClick} className="u-full-width">
          Search Users
        </button>
        <div className="name">{user && user.name}</div>
        <div className="age">{user && user.age}</div>
      </div>
    );}

export default UserSearch