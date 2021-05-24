import React from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dialogs" component={Dialogs} />
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
