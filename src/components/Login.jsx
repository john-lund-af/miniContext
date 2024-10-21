import { useState, useContext } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    if(!username || !password)
      return;

    setUser({username, password});
  }

  return (
    <div>
      <h2>Login</h2>
      <input type="text" name="username" id="username" value={username} onChange={handleUsername} />
      <input type="password" name="password" id="password" value={password} onChange={handlePassword} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login