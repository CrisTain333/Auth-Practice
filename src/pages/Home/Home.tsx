import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState<any>([]);
  const token = localStorage.getItem("practiceToken") || null;

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/auth/user?token=${token}`
      );
      const data = await res.json();
      setUser(data?.data?.user);
    };
    console.log(user);

    getUser();
  }, []);

  return (
    <div>
      <p>hello {user?.name} !!!!</p>

      <p>Your Email ---- ({user?.email})</p>
      <p>
        Your Password {user?.hashedPassword} <br />
        <span style={{ color: "red" }}>(bcrypt Version)</span>
      </p>
    </div>
  );
};

export default Home;
