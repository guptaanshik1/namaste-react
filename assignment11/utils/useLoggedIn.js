import React, { useEffect, useState } from "react";

export default useLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleLoggedIn = () => {
      setIsLoggedIn(true);
    };
    const handleLoggedOut = () => {
      setIsLoggedIn(false);
    };

    window.addEventListener("online", handleLoggedIn);
    window.addEventListener("offline", handleLoggedOut);

    return () => {
      window.removeEventListener("online", handleLoggedIn);
      window.removeEventListener("offline", handleLoggedOut);
    };
  }, []);

  return isLoggedIn;
};
