import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import { getList, getUsers } from './Services/list'

import Header from './Components/header.jsx'
import Main from './Components/main.jsx'

function App() {
  const [users, setUsers] = useState([]);

    useEffect(()=>{
        let mounted = true;
        getUsers()
        .then(items => {
            if(mounted) {
            setUsers(items);
            }
        });
        return () => mounted = false;
    }, []);
  return (
    <React.Fragment>
      <Header/>
      <Main/>
    </React.Fragment>
  );
}

export default App;
