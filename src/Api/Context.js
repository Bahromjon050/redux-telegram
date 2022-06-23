import React, { createContext, useState } from "react"



export const DataContext = createContext()

export const ProviderContext = ({ children }) => {
    const [users, setUsers] = useState({
        id: null,
        img: '',
        fname: '',
        lname: '',
        number: null
    });
    const [changeIn, setChangeIn] = useState('');
    const [soat, setSoat] = useState(null);
    const [minut, setMinut] = useState(null);
    return (
        <>
            <DataContext.Provider value={{ minut, setMinut, soat, setSoat, changeIn, setChangeIn, users, setUsers }}>
                {children}
            </DataContext.Provider>
        </>
    )
}