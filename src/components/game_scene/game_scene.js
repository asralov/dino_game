import React from "react";
import './game_scene.css'
import Score from "../score/score";
import Start from "../start/start";
import Ground from "../ground/ground";
import Dino from "../dino/dino";

const Game = () => {
    return(
        <div id="world">
            <Score />
            <Start />
            <Ground />
            <Ground />
            <Dino />
        </div>
    )
}

export default Game;