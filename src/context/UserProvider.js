import { useState } from "react";
import { useHistory } from "react-router-dom";
import UsersContext from "./UsersContext";

function UsersProvider ({children}) {
    // we can use useHistory() in this Provider because in index.js <UserProvider> is a child of <Router>
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    // we can define functions in here to make them reusable across our components
    const login = (username) => {
        setUsername(username);
        setLoggedIn(true);
        history.push("/products");
    };

    const logout = () => {
        setLoggedIn(false);
        setUsername("");
        history.push("/");
    };

    // we do not need to expose "setLoggedIn" or "setUsername",
    // instead we share login() and logout() in the Context and keep the logic inside this Provider
    return (
        <UsersContext.Provider value={{
            loggedIn,
            setLoggedIn,
            username,
            setUsername,
            login,
            logout,
        }}>
            {children}
        </UsersContext.Provider>
    );
}

export default UsersProvider;
