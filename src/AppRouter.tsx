import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import { routes } from './routes';
import { IRoute } from './interfaces/route.interface';

const AppRouter: React.FC<any> = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {
          routes.map((route: IRoute, i: number) => {
            return (
              <Route key={i} path={route.path} element={route.component} />
            );
          })
        }
      </Routes>
    </Router>
  );
};

export default AppRouter;