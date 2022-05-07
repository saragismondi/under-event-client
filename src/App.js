import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import history from "./utils/history";
import "bootstrap/dist/css/bootstrap.min.css";

import Loading from "./components/Loading";

import CreateEvent from "./components/CreateEvent";

import UserProfile from "./components/UserProfile";

import Detail from "./components/Detail";

import NavTop from "./components/NavBars/Nav";
import Pay from './components/Payment'
import Carrito from "./components/Carrito";
function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter history={history}>
      {/* <NavTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/createEvent" element={<CreateEvent />} />
        <Route exact path="/:id" element={<Detail/>} />
        <Route exact path="/payment" element={<Pay/>} />
        <Route exact path="/carrito" element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
