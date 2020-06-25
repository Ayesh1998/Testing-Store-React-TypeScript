import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./search-bar-styles.css";

export interface SearchBarProps {}

const SearchBar: React.SFC<SearchBarProps> = () => {
  return (
    <div className="searchBarTop" style={{}}>
      <Form>
        <input
          className="searchinput"
          style={{
            borderRadius: "12px",
            fontFamily: "Arial, FontAwesome",
            padding: "10px",

            width: "350px",
          }}
          type="text"
          placeholder="&#xf002; Search"
        />
      </Form>
    </div>
  );
};

export default SearchBar;
