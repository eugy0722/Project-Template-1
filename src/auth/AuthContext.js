import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const AuthContext = createContext(null);

export const SessionAction = () => {
  const [user, setUser] = useState('');
  const [token, setToken] = useState(localStorage.getItem('site') || '');
  const navigate = useNavigate();

  const LogInAction = (data) => {
    try {
      if (data !== null) {
        axios
          .post('http://localhost:8080/login', data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            if (response.data) {
              setUser(response.data.user);
              setToken(response.data.token);
              localStorage.setItem('site', response.token);
              navigate('/');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return {
        user,
        token
      };
    } catch (err) {
      console.log(err);
    }
  };

  const LogOutAction = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('site');
    navigate('/login');
  };

  const RegisterAction = (data) => {
    try {
      if (data !== null) {
        axios
          .post('http://localhost:8080/user/register', data, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            alert(JSON.stringify(response, null, 2));
            if (response.data.username === data.username) {
              navigate('/login');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return { LogInAction, LogOutAction, RegisterAction };
};