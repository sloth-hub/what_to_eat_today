import React from "react";
import Mood from "../components/Mood";
import Footer from "../components/Footer";

const Ask = (props) => {

    if (props.location.state === undefined) {
        window.location.replace("https://sloth-hub.github.io/whattoeattoday/"); // state가 존재하지 않으면
    }
    return (
        <div className="container">
            <Mood 
            state={props.location.state}
            />
            <Footer />
        </div>
    );
}

export default Ask;