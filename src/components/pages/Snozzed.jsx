import { AiOutlineCaretDown } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight, FaKeyboard } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { RiCheckboxBlankLine } from "react-icons/ri";

const Snozzed = () => {
  return (
    <div className="mailbox">
      <div className="mailbox_header">
        <div className="m_header-left">
          <div className="m_checkbox">
            <RiCheckboxBlankLine size={18} />
            <AiOutlineCaretDown />
          </div>
          <GrRefresh />
          <BsThreeDotsVertical />
        </div>
        <div className="m_header-right">
          <FaChevronLeft />
          <FaChevronRight />
          <div className="m_checkbox">
            <FaKeyboard />
            <AiOutlineCaretDown />
          </div>
        </div>
      </div>
      <div className="mailbox__body">
        This is &nbsp; <span>Snoozed </span> &nbsp; Component.
      </div>
    </div>
  );
};
export default Snozzed;
