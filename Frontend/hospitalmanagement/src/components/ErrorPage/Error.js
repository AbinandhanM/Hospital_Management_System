import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div id="main">
      <div class="fof">
        <h1>Haha!! You Are UnAuthorized</h1>
        <Link className="nav-link" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
export default Error;
