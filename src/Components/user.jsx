import React, { useEffect, useState } from 'react';
import { getUsers } from '../Services/list'


const User = () => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        let mounted = true;
        getUsers()
        .then(items => {
            if(mounted) {
                setUser(items[0]);
            }
        });
        return () => mounted = false;
    }, []);

    return (
        <div style={{display:'inline'}}>
            <span>User: {user.name}</span>
        </div>
    )
};

export default User;
