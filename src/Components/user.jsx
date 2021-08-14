import React, { useEffect, useState } from 'react';
import { getUsers } from '../Services/list'


const User = () => {
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
        <div style={{display:'inline'}}>
            <span>{users.length}</span>
            <button>Login</button>
        </div>
    )
};

export default User;
