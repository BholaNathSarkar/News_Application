import React from "react";

import Weather from "./component/Weather/Weather.js";
import Slider from "./component/slider/Slider.js";
import ChatBox from "./component/ChatBox/ChatBox.js";
import News from "./component/News/News.js";
import Wrapper from "./component/wrapper/Wrapper.js";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Weather />
        <Slider />
        <ChatBox />
        <News />
      </Wrapper>
    </>
  );
};

export default Home;
