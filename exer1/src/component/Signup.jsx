import React,{useState} from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

 const Signup = ({newUser}) => {
     const [showPass, setshowPass] = useState(false);
     const [firstName, setfirstName] = useState("");
     const [lastName, setlastName] = useState("")
     const [email, setEmail] = useState("");
     const [pass, setPass] = useState("");

     co
     
     const togglePass = () =>{
         setshowPass(!showPass);
     }

     const handleSubmit = (e)=>{
         e.preventDefault();
         /**
          * check validation
          */
         newUser({
             firstName,
             lastName,
             email,
             pass,
         });
         setfirstName("");
         setlastName("");
         setEmail("");
         setPass("");
     }
    return (
        <div className="sign-up">
            <div className="name">
                <input type="text" placeholder=" نام خانوادگی" required onChange={(e) => setlastName(e.target.value)}/>
                <input type="text" placeholder="نام" required onChange={(e) => setfirstName(e.target.value)}/>
            </div>
            <input type="email" placeholder="پست اکترونیک" required onChange={(e) => setEmail(e.target.value)} />
            <div className="pass-wrapper">
            <input type={showPass ? "text" : "password"} placeholder="رمز ورود" required onChange={(e) => setPass(e.target.value)}/>
            {showPass===true ? <FaEye className="icon" onClick={()=>togglePass()}/> 
            :
             <FaEyeSlash className="icon" onClick={()=>togglePass()}/> }
            
            </div>
            <div className="footer">
        <button className="submit" onClick={handleSubmit}>
          {"ثبت نام کنید"}
        </button>
        </div>
        </div>
    )
}

export default Signup;