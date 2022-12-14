import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './app/features/dashboard/Dashboard';
import PrivateRoute from './app/features/routes/PrivateRoute';
import PublicOnlyRoute from './app/features/routes/PublicRoute';
import Login from './app/features/sessions/Login';
import Logout from './app/features/sessions/Logout';
import PersistLogin from './app/features/sessions/PersistLogin';
import SignUp from './app/features/sessions/SignUp';
import DataProvider from './app/DataProvider';

function App() {
  return (
    <DataProvider>
      <Router>
        {/* <main className="grid md:grid-cols-desktop font-quicksand"> */}
        <main>
          <Routes>
            <Route element={<PersistLogin />}>
              <Route
                path="/"
                element={(
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
              )}
              />
              <Route
                path="/logout"
                element={(
                  <PrivateRoute>
                    <Logout />
                  </PrivateRoute>
                )}
              />
              <Route
                path="/login"
                element={(
                  <PublicOnlyRoute>
                    <Login />
                  </PublicOnlyRoute>
                )}
              />
              <Route
                path="/signup"
                element={(
                  <PublicOnlyRoute>
                    <SignUp />
                  </PublicOnlyRoute>
                )}
              />
            </Route>
          </Routes>
        </main>
        {/* </main> */}
      </Router>
    </DataProvider>
  );
}

export default App;
