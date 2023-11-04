import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { useSelector } from "react-redux";
const Container = styled.div`
  position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
  z-index: 0;
`;
const DetailsContainer = styled.div`
  position: absolute;
  z-index: 1;
  background: white;
  top: 22rem;
  width: 90vw;
  border-radius: 2rem;
  padding: 5vw;
  text-align: left;
`;
const IconContainter = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  font-size: 1.5rem;
  top: 1rem;
  left: 1rem;
`;
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;
const RestaurantDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restoData = useSelector((state) => state.restaurants);
  let data;
  if (restoData.length) {
    data = restoData;
  } else data = JSON.parse(localStorage.getItem("data"));

  console.log(data[id]);

  return (
    <Container>
      <IconContainter onClick={() => navigate("/restaurants-list")}>
        <MdArrowBackIos />
      </IconContainter>
      <ImageContainer>
        <img
          src={data[id].images[0].url}
          style={{ width: "100%", height: "25rem" }}
          alt="fastor"
        />
        <Overlay></Overlay>
      </ImageContainer>
      <DetailsContainer>
        <div style={{ fontSize: "1rem", fontWeight: "700" }}>
          {data[id].restaurant_name}
          <i class="fa fa-star-o" style={{ fontSize: "20px", marginLeft: "55%", color: "black" }}></i>
          <span>{data[id]?.rating?.restaurant_avg_rating}</span>
        </div>

        <div style={{ fontSize: "0.8rem", marginTop: "0.35rem" }}>
          {data[id].address_complete && data[id].address_complete !== "null"
            ? data[id].address_complete
            : data[id].location && data[id].location.location_address_2
            ? data[id].location.location_address_2
            : ""}
        </div>
        <div
          style={{
            gap: "0.15rem",
            marginBlock: "0.5rem",
            fontWeight: "500",
            color: "#D3906F",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BiSolidOffer /> 4 Offers trending
        </div>

        <div style={{ fontSize: "0.75rem", marginTop: "1rem" }}>
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </div>
      </DetailsContainer>
    </Container>
  );
};

export default RestaurantDetails;
