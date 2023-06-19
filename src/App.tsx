import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./page/LoginPage";
import VisitorPage from "./page/VisitorPage";
import AdminPage from "./page/AdminPage";
import Test from "./component/Test";
import HomePage from "./page/HomePage";
import NotFound from "./component/NotFound/NotFound";
import AuthRoute from "./component/AuthRoute";

function App() {
  return (
      <div >
          <Routes>
              <Route path="/*" element={<VisitorPage/>}>
                  <Route index element={<HomePage/>} />
              </Route>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/admin/*" element={<AdminPage/>}/>
              <Route path="/test" element={<Test/>}/>
          </Routes>
      </div>
  );
}

export default App;
