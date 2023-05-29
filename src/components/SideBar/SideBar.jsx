import { AiOutlineCaretDown } from "react-icons/ai";
import "./sidebar.css";
import { HiPencil } from "react-icons/hi";
import { RiInboxFill } from "react-icons/ri";
import { MdSend } from "react-icons/md";
import { BsStar, BsClock, BsFileEarmark } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {  openSendMessage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";

const SideMenu = ({ icon, menu, number }) => (
  <NavLink
    to={`/${menu.toLowerCase()}`}
    className={({ isActive }) =>
      isActive
        ? `menu_active`
        : "menu_style"
    }
  >
      <div className="menu_menu">
        {icon}
        <p>{menu}</p>
      </div>
      <p>{number}</p>
  </NavLink>
);

const SideBar = () => {
  const dispatch = useDispatch()
  
  return (
    <div className="sidebar">
      <div className="compose" onClick={()=>dispatch(openSendMessage())}>
        <HiPencil size={20} />
        Compose
      </div>
      <div>
        <SideMenu
          default
          icon={<RiInboxFill />}
          menu="Inbox"
          
          number="227"
        />
        <SideMenu icon={<BsStar />} menu="Starred" number="10" />
        <SideMenu icon={<BsClock />} menu="Snoozed" number="2" />
        <SideMenu icon={<MdSend />} menu="Sent" number="" />
        <SideMenu icon={<BsFileEarmark />} menu="Drafts" number="12" />
        <SideMenu icon={<AiOutlineCaretDown />} menu="More" />
      </div>
      <div></div>
    </div>
  );
};

export default SideBar;
