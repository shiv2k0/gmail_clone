import "./emailList.css";
import { FaChevronLeft, FaChevronRight, FaKeyboard } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { RiCheckboxBlankLine, RiInboxFill } from "react-icons/ri";
import { GrRefresh } from "react-icons/gr";
import { BsTagFill, BsThreeDotsVertical } from "react-icons/bs";
import Section from "./Section";
import { MdPeopleAlt } from "react-icons/md";
import Email from "./Email";
import { useEffect, useState } from "react";
import { getEmails } from "../../api/FirestoreAPI";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    getEmails(setEmails);
  }, []);
  return (
    <div className="mailbox">
      <div className="mailbox_header">
        <div className="m_header-left">
          <div className="m_checkbox">
            <RiCheckboxBlankLine size={18} className="icon" />
            <AiOutlineCaretDown className="icon" />
          </div>
          <GrRefresh
            onClick={() => window.location.reload(false)}
            className="refresh"
          />
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
      <div className="mailbox_section">
        <Section Icon={<RiInboxFill />} title={"Primary"} selected />
        <Section Icon={<MdPeopleAlt />} title={"Social"} />
        <Section Icon={<BsTagFill />} title={"Promotions"} />
      </div>
      <div className="mailbox_body">
        {/* <Email /> */}
        {emails
          ? emails.map((email) => (
              <Email
                key={email.id} 
                title={email.to}
                subject={email.subject}
                description={email.message}
                time={email.timestamp}
              />
            ))
          : "No email"}

        
        
      </div>
    </div>
  );
};

export default EmailList;
