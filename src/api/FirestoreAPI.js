import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../config/firebase";


const emailRef = collection(db,"emails")
export const sendEmail =data=>{
    addDoc(emailRef,data).then(res=>{
        console.log("Data Sent successfully")
    }).catch((err)=>{
        console.log(err)
    })
}

const q = query(emailRef,orderBy("id","desc"))


export const getEmails = (setEmails)=>{
    onSnapshot(q,(resp)=>{
        setEmails(
            resp.docs.map((docs)=>{
                return {...docs.data()}
            })
        )
    })
}