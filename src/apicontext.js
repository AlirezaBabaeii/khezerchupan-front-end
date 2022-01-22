import react, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";

const contextapi = createContext()

const ApiApp = ({ chidern }) => {
    const [user, setuser] = useState()

    useEffect(() => {


        async function Fetchapi() {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                console.log(res);
                setuser(res)
            })
        }
        return Fetchapi()
    }, []);


    return (
        <>
            <contextapi.Provider
                value={user}>

            </contextapi.Provider>
        </>
    )
}


export default ApiApp

export function useAPI() {
    const context = useContext(contextapi);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}