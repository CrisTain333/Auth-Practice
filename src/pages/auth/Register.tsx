import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { username, email, password };

    fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          alert(data.message);
          navigate("/login");
        }
      });
  };
  return (
    <div>
      <p>Register</p>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="username" /> <br />{" "}
          <br />
          <input type="email" name="email" placeholder="email" /> <br /> <br />
          <input type="password" name="password" placeholder="password" />{" "}
          <br />
          <br />
          <button type="submit">Login</button>
        </form>

        <p>
          all ready have an account{" "}
          <Link to="/login">
            <span>login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
