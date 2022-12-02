import React, { useState, Navigate } from 'react'
import {BrowserRouter as Router, Switch, 
    Route, Redirect,useNavigate} from 'react-router-dom'
import Axios from 'axios'

function Login() {


    //obtain data from form
    const url = "http://localhost:8080/login"

    const navigate = useNavigate();

    const [data, setData] = useState({
       userName: "",
       pass: "" 
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            userName:data.userName,
            pass:data.pass
        })
        .then(res=>{
            if(res.data=true){
                navigate('../opportunities')
            }
        })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <label>Username:</label>
                <br></br>
                <input onChange={(e)=>handle(e)}
                id="userName" value={data.userName}
                    type="text"
                />
                <br></br>
                <label>Password:</label>
                <br></br>
                <input onChange={(e)=>handle(e)}
                id="pass" value={data.pass}
                    type="text"
                />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login