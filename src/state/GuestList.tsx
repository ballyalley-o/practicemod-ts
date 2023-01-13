import { useState } from 'react'

const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const onClick =() => {
    if (name !== '') {
      setName("");
      setGuests([...guests, name]);
    } else if (name === '') {
      alert("Please enter a name");
    }
    }


  return (
    <div className="container">
      <h3>GUEST LIST</h3>
      <ul>
        {guests.map((guest) => (
          <li
            key={guest}>
              {guest}
          </li>
        ))}
      </ul>
      {/* logic here */}
      <input
        type="text"
        value={name}
        onChange={
          (e) => {
          setName(e.target.value)
      }}/>
      <button
         type="submit"
         onClick={onClick}>Add Guest</button>
    </div>
  )
}


export default GuestList