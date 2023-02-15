import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("practiceToken") || null;

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`http://`);
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
