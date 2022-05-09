
import './App.scss';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Header from './components/header/header'
import Form from './components/form/form'
import Navbar from './components/NavBar/navbar';
import Results from './components/Results/results';
import Footer from './components/Footer/footer';


function App() {

  const [data, setData] = useState(null);
  const [Request, setRequest] = useState({});
  const [header, setHeader] = useState({});

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
  }


  return (
    <>
      <Header />
      <Navbar />
      <Form handleApi={handleApi} />
      <Results method={Request.method} url={Request.url} data={data} header={header} />
      <Footer />
    </>
  );
}

export default App;
