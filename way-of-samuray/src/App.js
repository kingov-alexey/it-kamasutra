import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="http://www.vkrg.kz/images/picture-136.png" />
      </header>
      <nav className="nav">
        <div>
          <a href="#Profile">Profile</a>
        </div>
        <div>
          <a href="#Messages">Messages</a>
        </div>
        <div>
          <a href="#News">News</a>
        </div>
        <div>
          <a href="#Music">Music</a>
        </div>
        <div>
          <a href="#Settings">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="http://www.vkrg.kz/images/img1.jpg" />
        </div>
        <div>ava + description</div>
        <div>
          my posts
          <div>New post</div>
          <div>post 1</div>
          <div>post 2</div>
          <div>post 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
