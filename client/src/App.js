import { useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {loginUser, removeToken, verifyUser} from './services/auth'

import './App.css';
import Layout from './shared/Layout';
import MainContainer from './containers/MainContainer';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if(!userData) {
        history.push('/')
      }
    }
    handleVerify();
  }, [])

  async function handleLogin(loginData) {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/')
  }

  function handleLogout() {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push('/');
  }

  return (
    <div className="App-layout">
      <Layout 
        currentUser={currentUser}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      >
        <MainContainer currentUser={currentUser}/>
      </Layout>
    </div>
  );
}

export default App;
