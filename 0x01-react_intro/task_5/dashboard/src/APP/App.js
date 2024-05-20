
import './App.css';
import { getFullYear, getFooterCopy } from '../../../../task_3/dashboard/src/utils';
// import fav_icon from './fav_icon.ico';
import holbert_logo from './holbert_logo.jpg';
import Notification from '../../../../task_3/dashboard/src/Notifications';

function App() {
  return (
    <div className="App">
      <Notification />
      <header className="App-header">
      <img src={holbert_logo} alt="Holberton Logo" />
        <h1> School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
          {/* Email Input */}
          <div>
            <label htmlFor="email">Email: </label>
              <input type="email" id="email" />            
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />
          </div>

          {/* OK Button */}
          <button>OK</button>
      </div>
      <footer className="App-footer">
        {getFooterCopy(true)}
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
