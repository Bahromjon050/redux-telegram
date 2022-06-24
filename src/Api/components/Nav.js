import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Profils } from './Profils'
import { User } from './User'
import { Error } from './Error'
import { Chat } from './Chat'

export const Navbar = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<User />} />
                    <Route path='/profil' element={<Profils />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Router>
        </>
    )
}
