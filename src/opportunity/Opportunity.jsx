import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, 
    Route, Redirect,useNavigate} from 'react-router-dom'
import {Axios} from 'axios'

function Opportunity() {
  
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/opportunities')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  function consult(e){
    navigate(e);
  }

  function deleteOpportunity(e){
    Axios.put(e);
  }


  return (
    <div>
        <div>
            <h1> Opportunities </h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Client id</th>
                </tr>
                </thead>
                <tbody>
                {data.map(
                    info => 
                    <tr key = {info.id}>
                    <td>{info.name}</td>
                    <td>{info.phone}</td>
                    <td>{info.email}</td>
                    <td>{info.clientId}</td>
                    <td><button onClick={()=>consult(`/opportunities/${info.id}`)}>Consult</button></td>
                    <td><button onClick={()=>deleteOpportunity(`/opportunities/${info.id}`)}>Delete</button></td>
                    </tr>
                )}
            </tbody>
            </table>
        </div>
    </div>
 
  );
}

export default Opportunity