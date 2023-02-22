import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Asientos from "../components/flight/Asientos";
import Flight from "../components/flight/Flight";
import PayPal from "../components/flight/PayPal";
import SelectFlight from "../components/flight/SelectFlight";
import MyFlights from "../components/MyFlights";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> </Route>
        <Route path="/selectFlight" element={<SelectFlight />}>
          <Route path="flight" element={ <Flight />} />
          <Route path="asientos" element={<Asientos />} />

        </Route>
        <Route path="paypal" element={<PayPal />}/>
        <Route path="myFlights" element={<MyFlights />}/>


      </Routes>
    </BrowserRouter>
  );
};

export default Router;
