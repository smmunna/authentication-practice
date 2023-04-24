import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const User = () => {
    const{user,loading}=useContext(AuthContext)
    if(loading){
        return <h5>Loading......</h5>
    }
    else{
        return (
            <div>
                <h3>Hello, I am {user.displayName}</h3>
            </div>
        );
    }
}

export default User;
