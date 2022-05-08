import './form.css'
import {useState} from 'react';
import React from "react";

function Form(props) {

    const [method , setMethod] = useState('GET');
    const [url , setUrl] = useState('');
    const [body, setBody] = useState();


    const updateURL = (e) => {
        e.preventDefault();
        setUrl(e.target.value);
    }
    const updateMethod = (e) => {
        e.preventDefault();
        setMethod(e.target.value);
    }
    
    const updateBody = (e) => {
        e.preventDefault();
        setBody(e.target.value);
    }
    const updateSubmit = (e) => {
        e.preventDefault();
        const data = {
            method: method,
            url: url,
            body: null
    }
    if (body) {
        data.body = body;
    }
   
        props.handleApi(data);
    
}
    return (
        <>
        <form className="form" onSubmit={updateSubmit}>

            <input type="text" id="link" name="link" placeholder="http://api.url.here" onChange={updateURL} ></input>
            <input type="submit" value="GO!" onSubmit={updateSubmit} />

            <br></br>

            <div id='methods'>
                <input type="radio" id="GET" name="METHODS" value="GET" onChange={updateMethod}  />
                 <label for="GET">GET</label>
                <input type="radio" id="POST" name="METHODS" value="POST" onChange={updateMethod} />
                <label for="POST">POST</label>
                <input type="radio" id="PUT" name="METHODS" value="PUT" onChange={updateMethod} />
                <label for="PUT">PUT</label>
                <input type="radio" id="DELETE" name="METHODS" value="DELETE" onChange={updateMethod}/> 
                <label for="DELETE">DELETE</label>
            </div>

                <textarea></textarea>
        </form>


        </>
    )
}


export default Form;