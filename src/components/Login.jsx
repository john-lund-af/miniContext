import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {

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