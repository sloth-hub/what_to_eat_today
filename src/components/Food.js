import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Food = ({ mood }) => {

    const [taste, setTaste] = useState("");
    const history = useHistory();

    const handleFoodChange = (evt) => {
        setTaste(evt.target.value);
    }
    const handleFoodClick = () => {
        if (taste === "") {
            alert("땡기는 맛을 선택해주세요.");
        } else {
            history.push({
                pathname: "/result",
                state: {
                    mood,
                    taste
                }
            })
        }
    }

    return (
        <div className="ask_container">
            <Fade>
                <div className="food_box">
                    <h1 className="food_ask">지금 어떤 맛이 땡기나요?</h1>
                    <div className="foods">
                        <div className="radiobox">
                            <input type="radio" name="taste" value="spicy" id="spicy" onChange={handleFoodChange} />
                            <label htmlFor="spicy"><span className="text">매운거<span role="img" aria-label="spicy">🌶</span></span></label>
                        </div>
                        <div className="radiobox">
                            <input type="radio" name="taste" value="oily" id="oily" onChange={handleFoodChange} />
                            <label htmlFor="oily"><span className="text">기름진거<span role="img" aria-label="oily">🍗</span></span></label>
                        </div>
                        <div className="radiobox">
                            <input type="radio" name="taste" value="light" id="light" onChange={handleFoodChange} />
                            <label htmlFor="light"><span className="text">담백한거<span role="img" aria-label="light">🥪</span></span></label>
                        </div>
                        <div className="radiobox">
                            <input type="radio" name="taste" value="soup" id="soup" onChange={handleFoodChange} />
                            <label htmlFor="soup"><span className="text">호로록 국물있는거<span role="img" aria-label="soup">🥣</span></span></label>
                        </div>
                    </div>
                    <button className="food_next btn" onClick={handleFoodClick}>NEXT</button>
                </div>
            </Fade>
        </div>
    );
}

export default Food;