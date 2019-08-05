import React from "react";

import "./Layout.css";

/*======================================================================
// This will serve as a high level layout wrapper for the UI.
======================================================================*/
const Layout = props => <main className="layout">{props.children}</main>;

export default Layout;
