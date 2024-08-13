import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// let ShowUser = () => {
//   fetch("http://localhost:8080/api/account/list", {
//     method: "GET",
//     headers: {
//       "Content-Type":  "application/json",
//       "X-token-account-key" : "123456789"
//     }
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error: " + error))

//   return(
    
//     <div className="container">
//       <header>
//         <h1 className="text-center mt-4">Role Management</h1>
//       </header>
//       <main>
//         <table className="table table-striped table-bordered border-dark mt-4" id='tableUser'>
//           <thead className="table-dark">
//             <tr>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Role</th>
//               <th className="text-center">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>User1</td>
//               <td>Employee</td>
//               <td className="text-center">
//                 <a
                  
//                   className="text-decoration-none rounded text-light bg-primary px-4 py-1"
//                 >
//                   Edit
//                 </a>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </main>
//     </div>

//   )
// }

const ShowUser = () => {
  const [dataUsers, setdataUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/account/list", {
      method: "GET",
      headers: {
        "Content-Type":  "application/json",
        "X-token-account-key": "123456789"
      }
    })
    .then((response) => response.json())
    .then((dataSrc) => setdataUsers(dataSrc.data))
    .catch((error) => console.log(error));
  }, []); // mencegah infinite looping di console, run sekali kalo array kosong

  return(    
    <div className="container">
      <header>
        <h1 className="text-center mt-4">Role Management</h1>
      </header>
      <main>
        <table className="table table-striped table-bordered border-dark mt-4" id='tableUser'>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.role.name}</td>
                <td className="text-center">
                  <a
                    className="text-decoration-none rounded text-light bg-primary px-4 py-1"
                    href={`http://localhost:8080/account/${user.id}/role`} 
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>

  )
}

export default ShowUser;