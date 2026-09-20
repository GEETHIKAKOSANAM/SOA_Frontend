import { useEffect, useState } from "react";

import SplashScreen from "./pages/Splashscreen";
import Login from "./pages/Login";

import AdminDashboard from "./dashboard/AdminDashboard";

function App() {

  const [showSplash, setShowSplash] = useState(true);
  const [userRole, setUserRole] = useState(null);


  useEffect(() => {

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);

  }, []);


  if (showSplash) {
    return <SplashScreen />;
  }


 if (userRole === "ADMIN") {
  return (
    <AdminDashboard
      onLogout={() => setUserRole(null)}
    />
  );
}


  return (
    <Login
      onLogin={(role) => setUserRole(role)}
    />
  );
}


export default App;