import { useContext } from 'react'
import UserContext from '../context/UserContext';

const Profile = () => {
  const {user} = useContext(UserContext);

  if(!user)
    return <h1>Not logged in</h1>
  return (
    <>
      <h2>Profile</h2>
      <p><strong>Username: </strong>{user.username}</p>
      <p><strong>Password: </strong>{user.password}</p>
    </>
  )
}

export default Profile