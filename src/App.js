
import './App.scss';
import React from 'react';
import { useState, useReducer } from "react";
import axios from 'axios';

import Header from './components/header/header'
import History from './components/History/history'

import Form from './components/form/form'
import Navbar from './components/NavBar/navbar';
import Results from './components/Results/results';
import Footer from './components/Footer/footer';

import {historyReducer,addAction,removeAction} from './reducer';
const initialState = {
  history: []
}
function App() {

  const [data, setData] = useState(null);
  const [Request, setRequest] = useState({});
  const [header, setHeader] = useState({});
  const [history , setHistory] = useState([]);
  const [state, dispatch] = useReducer(historyReducer, initialState);

  const handleApi = async (Request) => {
    setRequest(Request);

    const response = await axios(Request.url, (Request.body) ? (Request.body) : null);

    const headers = {

      headers: response.headers
    };


    const result = {
      results: response.data
    };

    setData(result);
    setHeader(headers);
    setHistory([...history,Request])
    dispatch(addAction(Request))
  }

  return (
    <>
      <Header />
      <Navbar />
      <Form handleApi={handleApi} />
      <Results method={Request.method} url={Request.url} data={data} header={header} />
      <History history = {history}/>

      <Footer />
    </>
  );
}

export default App;
