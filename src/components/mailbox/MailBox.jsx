
import EmailList from "./EmailList";
import { Route, Routes } from 'react-router-dom';
import Mail from "./Mail";
import { Drafts, Sent, Snozzed, Starred } from "../pages";

const MailBox = () => {
  return (<>
  {/* <SideBar/> */}
    <Routes>
      <Route path="/" element={<EmailList/>} />
      <Route path="/inbox" element={<EmailList/>} />
      <Route path="/starred" element={<Starred/>} />
      <Route path="/snoozed" element={<Snozzed/>} />
      <Route path="/sent" element={<Sent/>} />
      <Route path="/drafts" element={<Drafts/>} />
      <Route path="/inbox/mail" element={<Mail/>} />
    </Routes>

    </>
  );
};

export default MailBox;
