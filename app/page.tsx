import Image from "next/image";
import '../styles/globals.css';



export default function Home() {
  return (
   
    <div className="login-container">
      <div className="login-box">
        <h1 className="logo">Instagram</h1>
        <form className="login-form">
          <input
            type="text"
            placeholder="Phone number, username or email address"
            required
          />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">
            Log in
          </button>
          <div className="divider">
            <div className="line"></div>
               <span>OR</span>
             <div className="line"></div>
          </div>

          <button type="button" className="facebook-login-btn">
            <i className="facebook-icon"></i>
            Log in with Facebook
          </button>
          <a href="#" className="forgot-password">
            Forgotten your password?
          </a>
        </form>
      </div>
      <div className="signup-box">
        <p>
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <div className="app-download">
        <p>Get the app.</p>
        <div className="app-buttons">
          <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="App Store" />
          <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Google Play" />
        </div>
      </div>
      <footer>
        <ul>
            <li><a href="#">Meta</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
        </ul>
        <p>English (UK) © 2024 Instagram from Meta</p>
    </footer>
    </div>
    
   
  );
}
