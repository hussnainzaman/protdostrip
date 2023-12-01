import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Landing from './components/Landing';
import Output from './components/Output';
import Redirect from './components/Redirect';


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
          {/* <Route
            path='/question'
            element={
              <ProtectedRoute>
                <Modal />
              </ProtectedRoute>
            }
          />
          <Route
            path='/form'
            element={
              <ProtectedRoute>
                <Form />
              </ProtectedRoute>
            }
          /> */}
           <Route
            path='/result'
            element={
              <ProtectedRoute>
                <Output />
              </ProtectedRoute>
            }
            
          />
           <Route
            path='/wait'
            element={
              <ProtectedRoute>
                <Redirect />
              </ProtectedRoute>
            }
            
          />
        </Routes>
      </AuthContextProvider>
    
    </div>
  );
}

export default App;
