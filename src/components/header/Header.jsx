import "./Header.css"
import { GoThreeBars } from 'react-icons/go';
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineQuestionCircle,AiTwotoneSetting } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";


const Header =()=>{
    const user = useSelector(selectUser)
    console.log(user)
    const [input,setInput] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
            navigate("/login")

        })
    }
    
    return <div className="header">
        <div className="header_left">
            <div className="left_menu_container">

            <GoThreeBars size={20} className="left_menu"/>
            </div>
            <div>
                <NavLink to={"/inbox"}>
                    

            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" className="gmail_logo" alt="" />
                </NavLink>
            </div>
            
        </div>
        <div className="header_search">
        <BiSearchAlt2 size={25}/>
        <input type="text" placeholder="Search in mail" value={input} onChange={e=>setInput(e.target.value)} />
        {input && <RxCross2 size={25} onClick={()=>setInput("")}/>}
        </div>
        <div className="header_right">
            <div className="active_status">
                <img src="data:image/jpeg;base64,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" alt="" />
                Active
            </div>
            <AiOutlineQuestionCircle size={25}/>
            <AiTwotoneSetting  size={25}/>
            <CgMenuGridO size={25} />
            <div className="header_profile" onClick={handleLogout}>
                <img src={ user?.photoUrl ||  `https://cdn-icons-png.flaticon.com/128/3177/3177440.png` } alt="" />
            </div>
            
        </div>
    </div>
}

export default Header