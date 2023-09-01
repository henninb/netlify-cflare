import axios from "axios";
//import { Navigate } from "react-router-dom";
//import AuthData from "./AuthWrapper";
//import { useNavigate } from "react-router-dom";

export default function Login() {
    // const [state, setState] = useState({
    // email: "",
    // password: "",
  // });

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setState((previousState) => ({
  //     ...previousState,
  //     [id]: value,
  //   }));
  // };

  const userLogin = async (payload) => {
    let endpoint =  '/api/login';

    const response = await axios.post(endpoint, payload, {
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const expiryDate = new Date(new Date().getTime() + 6 * 60 * 60 * 1000).toUTCString();
    // document.cookie = `access-token=${response.data}; path=/; expires=${expiryDate}; secure; samesite=lax`;
    return response.data;
  };

  const handleClick = async (event) => {
    //const { login } = AuthData();
    //const navigate = useNavigate();
    console.log("login submit was clicked");
    event.preventDefault();

    let email = document.getElementById("email").value;
    console.log(email);
    let password = document.getElementById("password").value;
    console.log(password);
    let data = {
      email: email,
      password: password,
    };
    console.log(data);
    // console.log(state);
    // console.log("send: " + JSON.stringify(data));
    //AuthWrapper.login(email, password);

    try {
      //sessionStorage.removeItem(keyname)

      let response = await userLogin(data);
      console.log("response: " + JSON.stringify(response));
      sessionStorage.setItem("isAuthenticated", true);
      //localStorage.setItem("isAuthenticated", true);
      //await login(email, password);
      //navigate("/landing")
      //window.location.href = '/landing'
      //<Navigate to="/landing" />
    } catch (error) {
      // console.log(error.data);
      //window.location.href = '/login'
      if (error.response && error.response.status === 403) {
        const errorMessage = document.querySelector(".error-message");
        errorMessage.innerText = "Failed login. Please check your credentials.";
      }
      console.log(error.data);
    }
  };

    return (
        <div className="login">
            <div className="form">
                <form name="login-form" className="login-form" action="/api/login" method="POST" data-bitwarden-watching="1">
                    <span className="material-icons">lock</span>
                    <div className="input-group mb-3">
                <div className="input-group-prepend">
                 <span className="input-group-text">
                  <i className="fa fa-user form-icon"></i>
                 </span>
                </div>
                <input type="text" className="form-control" placeholder="Email" id="email" name="email" />
             </div>
             <div className="input-group mb-3">
               <div className="input-group-prepend">
                 <span className="input-group-text">
                   <i className="fa fa-lock form-icon"></i>
                 </span>
               </div>
               <input type="password" className="form-control" placeholder="Password" id="password" name="password" />
               <div className="error-message"></div>
             </div>
      <button type="submit" onClick={handleClick}>
            login
          </button>
                </form>
            </div>
        </div>
    );
};
