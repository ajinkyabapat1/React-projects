import React, { useState } from 'react';
import UserConext
 from './UserContext';
const UserContextProvider=({childern}) =>{
    const [user,setUser]=useState(null)
    return (
        <UserConext.Provider value={{user,setUser}}>
            {childern}
        </UserConext.Provider>
    );
}

export default UserContextProvider;