import React, { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";
import { useNavigate } from "react-router-dom";
import { cardService } from "../services/CardService";
import { authService } from "../services/AuthService";

export const Home = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);

  const sliderSettings = {
    autoplaySpeed: 5000,
    className: "slider-container",
    duration: 20,
    dots: true,
    arrows: true,
  };

  const initialize = async () => {
    setCards(await cardService.getCards());
  };

  useEffect(() => {
    initialize();
  }, []);

  const onLogout = () => {
    authService.logout();
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h2>Home</h2>
      {cards?.length > 0 ? (
        <Slider {...sliderSettings}>
          {cards.map((item) => (
            <div key={item.id} className="slider-content">
              <div className="bold">{item.title}</div>
              <div>{item.body}</div>
            </div>
          ))}
        </Slider>
      ) : (
        "Loading..."
      )}
      <button className="btn btn-primary mt-5" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
