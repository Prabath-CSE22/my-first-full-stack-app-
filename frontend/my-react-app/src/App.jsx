import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios' 

const App = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [rowData, setRowData] = useState([]);


  const fetchData = async () => {
    const response = await axios.get('http://localhost:8080/givedata');
    setRowData(response.data);
  };

  const register = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/getdata', {name: username, password: password}); 
      console.log(response.data);
    }catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>User data</h1>
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>username</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row) => (
            <tr key={row.PersonID}>
              <td>{row.PersonID}</td>
              <td>{row.username}</td>
              <td>{row.Pword}</td>
            </tr>
          ))}
        </tbody>
      </table><br />
      {/* <button onClick={fetchData}>Click me</button> */}
    </div>
  )
}

export default App
