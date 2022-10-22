import React, { createContext } from 'react';
import { useState } from 'react';

 export const AutContext = createContext();



const AuthContext = ({children}) => {

 
     const [user,setUser] = useState(null)



    return (
       
         <AutContext.Provider value={{user,setUser}}>
                 {children}
         </AutContext.Provider>
         
    );
};

export default AuthContext;


  

