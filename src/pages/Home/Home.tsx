import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("practiceToken") || null;

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/auth/user?token=${token}`
      );
      const data = res.json();
      setUser(data?.user);
    };

    getUser();
  }, []);

  return (
    <div>
      <p>home page</p>
    </div>
  );
};

export default Home;
