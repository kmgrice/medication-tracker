import React from 'react';

const User = () => {
    const [user, setUser] = React.useState({"id": 1, "name": "Kevin"});

    return (
        <span>{user.name}</span>

    )
};

export default User;
