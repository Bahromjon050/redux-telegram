import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'
import { useNavigate } from "react-router-dom";
import { Show } from '../redux/action';


export const User = () => {
  const { dispatch, users, openM, closeModal, data, openModal, sendFun, inputFun, minut, setMinut, soat, setSoat, changeIn, setChangeIn } = useContext(DataContext)
  const [fmassiv, setFmassiv] = useState([
    {
      id: 0,
      img: './img/chat.svg',
      text: 'Chats'
    },
    {
      id: 1,
      img: './img/cals.svg',
      text: 'Calls'
    },
    {
      id: 2,
      img: './img/save.svg',
      text: 'Saved'
    },
    {
      id: 3,
      img: './img/cont.svg',
      text: 'Contacts'
    },
    {
      id: 4,
      img: './img/set.svg',
      text: 'Settings'
    },
  ])
  const path = useNavigate()
  const setChat = () => {
    path('/chat')
  }
  useEffect(() => {
    setInterval(() => {
      setSoat(new Date().getHours())
      setMinut(new Date().getMinutes())
    }, 10)
    // window.addEventListener('click', (e) => {
    //   console.log(e.target);
    // })
  }, [])
  const ShowImport = (val) => {
    dispatch(Show(val))
    setChat()
  }
  const userRes = () => {
    setChangeIn('')
  }
  return (
    <div className='telegram'>
      <div className="telegram_body">
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
        <div className="tel_header_btn">
          <button className='hed_btn_edit'>Edit</button>
          <button className='hed_btn_new' onClick={openModal}>
            <span><img src="./img/plus.svg" alt="" /></span>
            New
          </button>
        </div>
        <div className="user_search">
          <img src="./img/lupa.svg" alt="" />
          <input type="text" value={changeIn} onChange={(event) => setChangeIn(event.target.value)} placeholder='search' />
          <img src="./img/mik.svg" alt="" />
        </div>
        <div className="cards">
          {
            data.length < 0 ? <h1>Ma'lumot yo'q</h1>
              : changeIn === '' ?
                data.map((val) => (
                  <div className="card" key={val.id} onClick={() => ShowImport(val)}>
                    <div className="cardImg">
                      <img src='./img/u1.png' alt="" />
                      <div className="card_body">
                        <h3 className='user_h1'>{val.fname}</h3>
                        <h5 className='user_p'>I don't know what you're ...</h5>
                      </div>
                    </div>
                    <div className="card_footer">
                      <div className="foot_count">3</div>
                      <div className='foo_hour nav_hour'>
                        <h6>1</h6>
                        <h6>9</h6>
                        <h6>:</h6>
                        <h6>2</h6>
                        <h6>7</h6>
                      </div>
                    </div>
                  </div>
                ))
                : data.filter((val) => {
                  return val.fname.toLowerCase().indexOf(changeIn.toLowerCase().trim()) !== -1
                }).length > 0 ? data.filter((val) => {
                  return val.fname.toLowerCase().indexOf(changeIn.toLowerCase().trim()) !== -1
                }).map((val) => (
                  <div className="card" key={val.id} onClick={() => ShowImport(val)}>
                    <div className="cardImg">
                      <img src='./img/u1.png' alt="" />
                      <div className="card_body">
                        <h3 className='user_h1'>{val.fname}</h3>
                        <h5 className='user_p'>I don't know what you're ...</h5>
                      </div>
                    </div>
                    <div className="card_footer">
                      <div className="foot_count">3</div>
                      <div className='foo_hour nav_hour'>
                        <h6>1</h6>
                        <h6>9</h6>
                        <h6>:</h6>
                        <h6>2</h6>
                        <h6>7</h6>
                      </div>
                    </div>
                  </div>
                )) : <h1 className='user_h1 cards_h1'>Profil topilmadi <img src="./img/x.svg" onClick={userRes} /></h1>
          }
        </div>
        <div className="footer">
          <div className="tel_footer_cads">
            {
              fmassiv.map((val) => (
                <div className="footer_card" key={val.id}>
                  <img src={val.img} alt="" />
                  <h5>{val.text}</h5>
                </div>
              ))
            }
          </div>
          <div className="navgate"></div>
        </div>
        <div className={openM ? "modalAdd activ" : "modalAdd"}>
          <div className={openM ? "modalBody activ" : "modalBody"}>
            <form method="post" className="form" onSubmit={sendFun}>
              <label className="all_h3" htmlFor="fname">First name :</label>
              <input type="text" onChange={inputFun} value={users.fname} placeholder="First name" name="fname" className="inputs" />
              <label className="all_h3" htmlFor="lname">First name :</label>
              <input type="text" onChange={inputFun} value={users.lname} placeholder="Last name" name="lname" className="inputs" />
              <label className="all_h3" htmlFor="number">Phone :</label>
              <input type="number" onChange={inputFun} value={users.number} placeholder="+998-- --- -- --" name="number" className="inputs" />
              <div className="person1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>
              <div className="person2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </div>
              <button className="modal_close" onClick={closeModal}>Cancel</button>
              <button type='submit' className="modal_submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}
