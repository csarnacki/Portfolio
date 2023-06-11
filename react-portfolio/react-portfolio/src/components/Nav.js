import React from "react";

function Navigation(props) {
  const tabs = ["About", "Projects", "Contact"];
  return (
    <div className="tabs is-centered">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li
            className={
                //Ternary operator used to determine what the current page is
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={() => props.handlePageChange(tab)}
              className={
                //Ternary operator used to determine what the current page is
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;