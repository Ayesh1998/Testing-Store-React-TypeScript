import React from "react";

import VideoBox from "../../components/videobox/videobox-component";
import SearchBar from "../../components/search-bar/search-bar-component";
import HomepageBottomCategoriesAll from "../../components/homepage-bottom-categories-part/homepage-bottom-categories-part-components";

import { useSelector } from "react-redux";
import { StoreStates } from "../../types";

export interface HomepageProps {}

const Homepage: React.SFC<HomepageProps> = (props) => {
  const stateRedux = useSelector((state: StoreStates) => state);
  return (
    <div>
      <VideoBox />
      <SearchBar />
      <HomepageBottomCategoriesAll />
    </div>
  );
};

export default Homepage;
