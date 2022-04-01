import React from "react";

const Header = ({ searchKeywords, deleteKeyword, clearAll }) => {
  return (
    <div className="header">
      <ul>
        {searchKeywords.map((item, index) => (
          <li key={index}>
            {item}
            <button
              className="button"
              onClick={() => deleteKeyword(item)}
            ></button>
          </li>
        ))}
        {/* eslint-disable-next-line */}
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;
