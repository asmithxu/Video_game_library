// import React, { useState} from 'react';
// import './LoginBox.css';

// function LoginBox(props) {
//   let[newUser, setNewUser] = useState('');
//   let [passwordNew, setPasswordNew] = useState('');
//   const[userData, setUserData] = useState([])

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//      let user = newUser
//     let url = 'https://video-game-libraryapi.onrender.com/userdata/'
//     let userURL = url + user
//     const response = await fetch(userURL)
//     let userInfo = await response.json()
//     console.log("Submitted: ", userInfo)
//     if(newUser===userInfo[0].username && passwordNew===userInfo[0].password){
//       alert("Login Successful")
//     }
//     else{
//       alert("Try again")
//     }
//   };


//   return (
//     <div className="login-box">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={newUser}
//           onChange={e => setNewUser(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={passwordNew}
//           onChange={e => setPasswordNew(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default LoginBox;