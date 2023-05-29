import { useDispatch } from "react-redux";
import { auth } from "../../config/firebase";
import "./Login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleSignIn = () => {
    try {
      signInWithPopup(auth, provider).then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;

        dispatch(
          login({
            email: user.email,
            photoUrl: user.photoURL,
            displayName: user.displayName,
            uid: user.uid,
          })
        );
        navigate("/inbox");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login__page">
      <img
        src="https://img.icons8.com/?size=512&id=P7UIlhbpWzZm&format=png"
        className="login__logo"
        alt=""
      />

      <button className="login__button" onClick={handleSignIn}>
        Login
      </button>
    </div>
  );
};

export default Login;
