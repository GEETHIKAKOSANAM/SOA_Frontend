import logo from "../assets/logo.png";
import "./Splashscreen.css";

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="logo-wrapper">
        <img
          src={logo}
          alt="VoltGrid Logo"
          className="voltgrid-logo"
        />

        <div className="light-sweep"></div>
      </div>
    </div>
  );
}

export default SplashScreen;