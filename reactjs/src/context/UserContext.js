import React, { useState} from 'react';

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({username:'',token:''});


    return (
        <UserContext.Provider value={[user, setUser]}>{children}</UserContext.Provider>
    );
};

export { UserProvider, UserContext };
