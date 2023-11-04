import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Verification from './Verification';
import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/otp" element={<Verification />} />
      <Route path="/restaurants-list" element={<RestaurantList />} />
      <Route path="/restaurant-details/:id" element={<RestaurantDetails />} />
    </Routes>
  );
}

export default AppRoutes