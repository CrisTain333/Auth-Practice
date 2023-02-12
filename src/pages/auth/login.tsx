import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
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
