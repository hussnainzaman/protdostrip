import React, { useState,} from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Questions from './components/Questions'
import Landing from './components/Landing'
import Modal from './components/Modal';
//import { ReactComponent as logo } from './dostrip-logo.svg';


function App() {
 

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path='/main'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path='/form_new'
            element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }
          />
          <Route
            path='/question'
            element={
              <ProtectedRoute>
                <Modal />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
