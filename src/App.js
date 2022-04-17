import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import TopTop from './containers/TopTop';
import Loader from './loader/Loader';
import Header from './containers/header/Header';
import Follow from './containers/Follow';
import UpdateVideo from './containers/UpdateVideo';
import Body from './containers/components/Body';
import Details from './containers/components/components/Details';
import NumberEmailID from './login/NumberEmailID';
import './App.css';

const Login = React.lazy(() => import("./login/Login"));
const Upload = React.lazy(() => import("./containers/components/Upload"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TopTop />} >
            <Route index element={<Body />} />
            <Route exact path="following/" element={<Follow />} />
          </Route>
          <Route exact path="upload/" element={<UpdateVideo />} >
            <Route index element={  <React.Suspense fallback={<div><Loader/></div>}>
                                      <Upload />
                                    </React.Suspense>} />
          </Route>
          <Route exact path="@top.top/123456789" element={<Details />} />
          <Route exact path="Login" element={ <React.Suspense fallback={<div><Loader/></div>}>
                                                <Login />
                                              </React.Suspense>}/>
          <Route exact path="Login/phone-or-email/" element={<NumberEmailID />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
