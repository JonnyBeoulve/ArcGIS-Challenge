import React from 'react';

import './UserGuide.css';

/*======================================================================
// The UserGuide component is a full-screen pop-up that instructs the
// user on how the program works. It's available by clicking User Guide
// on the menu.
======================================================================*/
const UserGuide = (props) => {
    return (
        <div className="user-guide">
            <h2 className="user-guide-close" onClick={props.closeGuide}>X</h2>
            <div className="user-guide-text">
                <h1 className="user-guide-text-title">User Guide</h1>
                <h2>Step 1. Input an age to filter people by and press enter.</h2>
                <h2>Step 2. Click on any red map points to display person data on the left.</h2>
                <h2>Note. The number of matched users will be shown once a query is complete. In some cases, the filter will match no records.</h2>
            </div>
        </div>
    )
}

export default UserGuide;