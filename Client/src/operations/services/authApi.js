import axios from 'axios';
import { setAuth } from '../../Slices/authSlice';
import { toast } from 'react-hot-toast';

export const signup = (signupData, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('/api/signIn', signupData);
    dispatch(setAuth({ isLoggedIn: true, user: response.data.user }));
    toast.success('Signup successful!');
    navigate('/');
  } catch (error) {
    toast.error('Signup failed. Please try again.');
  }
};

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('/api/logIn', { email, password });
    dispatch(setAuth({ isLoggedIn: true, user: response.data.user }));
    toast.success('Login successful!');
    navigate('/');
  } catch (error) {
    toast.error('Login failed. Please try again.');
  }
};

export const logout = () => (dispatch) => {
  dispatch(setAuth({ isLoggedIn: false, user: null }));
  toast.success('Logged out successfully!');
};
