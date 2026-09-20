import "./Login.css";

function Login({ onLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">
          <h1>VoltGrid</h1>
        </div>

        <h2>Welcome Back</h2>

        <p className="login-subtitle">
          Login to your VoltGrid account
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const email = e.target.email.value.trim().toLowerCase();
            const password = e.target.password.value;

            const ADMIN_EMAIL = "admin@gmail.com";
            const ADMIN_PASSWORD = "Admin@123";

            // Admin login
            if (
              email === ADMIN_EMAIL &&
              password === ADMIN_PASSWORD
            ) {
              onLogin("ADMIN");
              return;
            }

            // User login
            if (email !== "" && password !== "") {
              onLogin("USER");
              return;
            }

            // Invalid login
            alert("Please enter your email and password.");
          }}
        >

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="login-options">

            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>

            <a
              href="#"
              className="forgot-password"
              onClick={(e) => e.preventDefault()}
            >
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            {" "}Sign Up
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;