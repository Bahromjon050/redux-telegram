import React, { createContext, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AddUser, Edit } from "./redux/action";


export const DataContext = createContext()

export const ProviderContext = ({ children }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.todoReducers.data)
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
    const [result, setResult] = useState(true);
    const [openM, setOpenM] = useState(false);
    const inputFun = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }
    const upImg = (e) => {
        setUsers({ ...users, img: e.target.files[0] })
        console.log(e.target.files[0]);
    }
    const openModal = () => {
        setOpenM(!openM)
        users({
            id: null,
            img: '',
            fname: '',
            lname: '',
            number: null
        })
    }
    const closeModal = () => {
        setOpenM(false)
        setUsers({
            id: null,
            img: '',
            fname: '',
            lname: '',
            number: null
        })
    }
    const sendFun = (e) => {
        e.preventDefault()
        if (result) {
            if (users.fname && users.lname && users.number !== '') {
                dispatch(AddUser(users))
                setUsers({
                    id: null,
                    img: '',
                    fname: '',
                    lname: '',
                    number: null
                })
                setOpenM(false)
            }
        } else {
            dispatch(Edit(changeIn))
            setUsers({
                id: null,
                img: '',
                fname: '',
                lname: '',
                number: null
            })
            setResult(true)
            setOpenM(false)
        }
    }
    const editFun = (val) => {
        setUsers({
            id: val.id,
            img: val.img,
            fname: val.fname,
            lname: val.lname,
            number: val.number
        })
        setOpenM(true)
        setResult(false)
    }
    return (
        <>
            <DataContext.Provider value={{ upImg, openM, closeModal, data, openModal, editFun, sendFun, inputFun, minut, setMinut, soat, setSoat, changeIn, setChangeIn, users, setUsers }}>
                {children}
            </DataContext.Provider>
        </>
    )
}