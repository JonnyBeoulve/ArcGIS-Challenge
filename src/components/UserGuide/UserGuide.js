import React from "react";

import "./UserGuide.css";

/*======================================================================
// The UserGuide component is a full-screen pop-up that instructs the
// user on how the program works. It's available by clicking User Guide
// on the menu.
======================================================================*/
const UserGuide = props => {
  return (
    <div className="user-guide">
      <h2 className="user-guide-close" onClick={props.closeGuide}>
        X
      </h2>
      <div className="user-guide-text">
        <h1 className="user-guide-text-title">User Guide</h1>
        <h2>Step 1. Input an age to filter people by and press enter.</h2>
        <h2>
          Step 2. Click on any red points on the map to display person data in
          the left menu panel.
        </h2>
        <h2>
          Note #1: The number of matched users will be shown once a query is
          complete. In some cases, the filter will match no records.
        </h2>
        <h2>
          Note #2: A small number of records are included in this demo. Try ages
          37 or 81 to guarantee results.
        </h2>
      </div>
    </div>
  );
};

export default UserGuide;
