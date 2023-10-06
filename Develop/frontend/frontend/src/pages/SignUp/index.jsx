import axios from "axios";
import { useEffect, useState } from "react";
import { signUp } from "./api";

function SignUp() {
  // Eskiden functional Component ile Class component arasında işlevsel farklar vardı fakat artık bu kalktı
  //Fonksiyonel Componentler daha fazla kullanılmaya başlandı

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault(); // event bize form'dan geldi ve browser'in form ile ilgili işlem yapıp kendini sıfırlamasını engelledik
    //bundan sonra browser form'u dönüştürmeye uğraşmayacak ve sayfa yenilenmeyecek
    setApiProgress(true);
    const user = {
      username,
      email,
      password,
    };
    try { //refactor (1)
      await signUp(user);
      setSuccessMessage(response.data.message);
    } catch(error) {
      console.log(error);
    } 
    finally {
      setApiProgress(false);
      setTimeout(() => {
        setSuccessMessage();
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card " onSubmit={onSubmit}>
          {" "}
          {/* Form'u enter ile yollamak için onSubmit kullanabilirsin*/}
          {/* Sadece bir tane parent dönebiliriz ondan dolayı bunu fragment içine aldık*/}
          <div className="text-center card-header">
            <h1>Sign Up Now!</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                className="form-control"
                id="username"
                type="text"
                onChange={(event) => setUsername(event.target.value)}
              />
              {/* input'lar event'i otomatik olarak verir bunu istersek yukarıdaki gibi kullanabiliriz */}
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                id="email"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="passwordRepeat">
                Password Repeat
              </label>
              <input
                className="form-control"
                id="passwordRepeat"
                type="password"
                onChange={(event) => setPasswordRepeat(event.target.value)}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary "
                disabled={
                  !password || password !== passwordRepeat || apiProgress
                }
              >
                {apiProgress && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                Sign Up !
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
