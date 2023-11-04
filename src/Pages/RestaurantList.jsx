import React from "react";
import RestaurantHeader from "../components/RestaurantList/RestaurantHeader";
import CarousalComponent from "../components/RestaurantList/CarousalComponent";
import List from "../components/RestaurantList/ListComponent";

const RestaurantList = () => {
  return (
    <>
      <RestaurantHeader />
      <CarousalComponent />
      <List />
    </>
  );
};

export default RestaurantList;
