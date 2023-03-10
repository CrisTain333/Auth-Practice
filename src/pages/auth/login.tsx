import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    const user = { email, password };

    fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.token);
        localStorage.setItem("practiceToken", data.data.token);
        localStorage.setItem("isLoggedIn", "true");
        alert(data.message);
        navigate(from, { replace: true });
      });
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" /> <br /> <br />
        <input type="password" name="password" placeholder="password" /> <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        new to website ?{" "}
        <Link to="/register">
          <span>Register</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
