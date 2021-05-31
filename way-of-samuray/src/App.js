import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
        />
        <Route path="/dialogs" render={() => <Dialogs  store={props.store} />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
