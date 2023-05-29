import { AiOutlineCaretDown } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight, FaKeyboard } from "react-icons/fa";
import "./mailbox.css";
import { BiArchiveIn, BiArrowBack, BiTimeFive } from "react-icons/bi";
import {
  MdLabelOutline,
  MdOutlineAddTask,
  MdOutlineDelete,
  MdOutlineForwardToInbox,
  MdReportGmailerrorred,
} from "react-icons/md";
import { HiOutlineMail, HiOutlineReply } from "react-icons/hi";
import { BsStar, BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Mail = () => {
  const navigate = useNavigate();
  const selectedMail = useSelector(state=>state.mail.selectedMail)
  console.log(selectedMail)
  
  return (
    <div className="mailbox">
      <div className="mailbox_header">
        <div className="mail_header-left">
          <BiArrowBack
            className="icon"
            onClick={() => {
              navigate("/inbox");
            }}
          />
          <div />
          <BiArchiveIn className="icon" />
          <MdReportGmailerrorred className="icon" />
          <MdOutlineDelete className="icon" />
          <div className="v_line" />
          <HiOutlineMail className="icon" />
          <BiTimeFive className="icon" />
          <MdOutlineAddTask className="icon" />
          <div className="v_line" />
          <MdOutlineForwardToInbox className="icon" />
          <MdLabelOutline className="icon" />
          <BsThreeDotsVertical className="icon" />
        </div>
        <div className="m_header-right">
          <FaChevronLeft className="icon" />
          <FaChevronRight className="icon" />
          <div className="m_checkbox">
            <FaKeyboard className="icon" />
            <AiOutlineCaretDown className="icon" />
          </div>
        </div>
      </div>
      <div className="mail">
        <h2>{selectedMail?.subject}</h2>
        <div className="mail_info">
          <div className="mail_info-left">
            <img
              src="https://lh3.googleusercontent.com/a/default-user=s40-p"
              alt=""
            />
            <div>
              <p>{selectedMail?.title}</p>
              <p>to me </p>
            </div>
          </div>
          <div className="mail_info-right">
            <p>

            {selectedMail?.time}
            </p>
            <BsStar className="icon"/>
            <HiOutlineReply className="icon"/>
            <BsThreeDotsVertical className="icon"/>
            
          </div>
        </div>
        <div className="mail_message">
            {selectedMail?.description}
          </div>
      </div>
    </div>
  );
};
export default Mail;
