import React, { useEffect, useState } from 'react';
import { getUsers } from '../Services/list.js'

const Main = () => {
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
      <div className='wrapper'>
        <h1>Users</h1>
        <ul>
          {users.map(item=><li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    )

};

export default Main;