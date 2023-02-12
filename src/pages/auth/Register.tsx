const Register = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { username, email, password };

    fetch();
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
      </div>
    </div>
  );
};

export default Register;
