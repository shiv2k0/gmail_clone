import { BsStar } from "react-icons/bs";
import "./email.css";
import { GrCheckbox } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

const Email = ({ id, title, subject, description, time }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/inbox/mail")
  };
  return (
    <div className="email" onClick={openMail}>
      <div className="email_icons">
        <GrCheckbox />
        <BsStar />
      </div>
      <div className="email_msgs">
        <h3 className="email_title">{title}</h3>
        <div className="email_message">
          <h4>
            {subject} - <span>{description}</span>
          </h4>
        </div>
        <p className="email_time">{time}</p>
      </div>
    </div>
  );
};
export default Email;
