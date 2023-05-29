import { useForm } from "react-hook-form";
import "./compose.css";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { sendEmail } from "../../api/FirestoreAPI";


const Compose = () => {
  const dispatch = useDispatch()
  const form = useForm();
  const { register,handleSubmit } = form;
  function padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }
  const currentDate = new Date()
  const hr = currentDate.getHours()
  const ampm =()=>{
    if(hr>12){
      return "pm"
    }else{
      return "am"
    }
  }
  const min = currentDate.getMinutes()
  const time = padTo2Digits(hr)+":"+padTo2Digits(min)+ " "+ampm()

  const onSubmit =async (formData) => {
    console.log(formData)
    try {
      sendEmail({
        id: new Date().getTime().toString(),
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: time
        
      })
      dispatch(closeSendMessage())
    } catch (error) {
      console.log(error)
      
    }
    
    
  };
  return (
    <div className="mail_compose">
      <div className="compose_header">
        <h3>New Message</h3>
        <IoMdClose className="compose_close" onClick={()=>dispatch(closeSendMessage())} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" id="to" required placeholder="To" {...register("to")} />
        <input
          id="subject"
          type="text"
          placeholder="Subject"
          required
          {...register("subject")}
        />
        <input
          id="message"
          type="text"
          required
          placeholder="Message..."
          className="compose_message"
          {...register("message")}
        />
        <div className="compose_options">
          <button className="compose_send" type="submit" onClick={onSubmit}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compose;
