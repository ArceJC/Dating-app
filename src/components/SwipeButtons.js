import React, { useState, useEffect } from 'react'
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const SwipeButtons = () => {
  const [rayos, setRayos] = useState([])
  /*useEffect(() => {
    async function fetchData() {
    const req = await axios.get("/dating/cards")
    setPeople(req.data)
    }
    fetchData()
  },[])*/
  //Aqui va la funcion que manejara el evento de cuando presionamos un IconButton
  const rayoPress = () => {
    console.log("Click")
  };

  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning" onClick={(args) => 
    rayoPress()
  }>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};
export default SwipeButtons;
