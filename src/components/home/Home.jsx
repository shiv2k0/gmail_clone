import { useDispatch, useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";
import Compose from "../compose/Compose";
import Header from "../header/Header";
import MailBox from "../mailbox/MailBox";
import "./Home.css";
import { selectSendMessageIsOpen } from "../../features/mailSlice";
import { login, selectUser } from "../../features/userSlice";
import { useEffect } from "react";
import { auth } from "../../config/firebase";
import Login from "../login/Login";

const Home = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  console.log(user)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
          uid: user.uid
        }))
      }
    })
  },[])
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  
  return (
    <div className="app">
      {
        !user ? 
        <Login/>
        :
        <>
        <Header />
      <div className="main_body">
        <SideBar />
        <MailBox />
      </div>

      { sendMessageIsOpen && <Compose />}
        </>
      }
      
    </div>
  );
};

export default Home;
