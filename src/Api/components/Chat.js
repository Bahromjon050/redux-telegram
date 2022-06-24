import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShowClose } from '../redux/action'


export const Chat = () => {
    const { dispatch, soat, minut, setMinut, setSoat } = useContext(DataContext)
    const path = useNavigate()
    const objOpen = useSelector((state) => state.todoReducers.objShow)
    useEffect(() => {
        setInterval(() => {
            setSoat(new Date().getHours())
            setMinut(new Date().getMinutes())
        }, 10)
        if (objOpen.fname === '') {
            path('/')
        }
    }, [])
    const setUser = () => {
        path('/')
        dispatch(ShowClose())
    }
    const sendMessage = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className='telegram'>
                <div className="telegram_body">
                    <div className="tel_chat">
                        <nav className="tel_nav">
                            <div className="nav_hour">
                                <h5>{soat > 10 ? null : 0}</h5>
                                <h5>{soat}</h5>
                                <h5>:</h5>
                                <h5>{minut > 10 ? null : 0}</h5>
                                <h5>{minut}</h5>
                            </div>
                            <div className="nav_batter">
                                <img src="./img/net.svg" alt="" />
                                <img src="./img/wifi.svg" alt="" />
                                <img src="./img/bat.svg" alt="" />
                            </div>
                        </nav>
                        <div className="online">
                            <div className="on_close">
                                <img src="./img/close.svg" onClick={setUser} alt="" />
                            </div>
                            <div className="on_close">
                                <img src="./img/u1.png" alt="" />
                                <div className="onText">
                                    <h1 className="user_h1">{objOpen.fname}</h1>
                                    <h4 className='all_h4'>online</h4>
                                </div>
                            </div>
                            <div className="on_close">
                                <img src="./img/more.svg" alt="" />
                            </div>
                        </div>
                        <div className="online_chat">

                        </div>
                        <div className="chat_footer">
                            <div className="send_message">
                                <img src="./img/stice.svg" />
                                <form onSubmit={sendMessage} className='chat_form'>
                                    <input type="text" placeholder='Write a message...' />
                                    <button className='message_btn' type='submit'><img src="./img/send.svg" alt="" /></button>
                                </form>
                            </div>
                            <div className="navgate"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
