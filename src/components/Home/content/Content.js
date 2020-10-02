import React from "react";
import "../../../css/Content.css";

function Content() {
  return (
    <>
      <div className="main-content">
        <h1>THE PLUG WAS CRAFTED TO BE FEATURE-FULL AND EASY TO USE</h1>
        <div className="content">
          <div className="content-1">
            <h1>Search</h1>
            <p>
              The search feature is one of the best functions of the bot. It
              will gather top match torrents for the query given in the search
              commands.
            </p>
          </div>
          <div className="content-2">
            <i class="fas fa-search"></i>
          </div>
          <div className="content-3">
            <i class="fas fa-code"></i>
          </div>
          <div className="content-4">
            <h1>SERVER PREFIX</h1>
            <p>
              This feature allows you to change the prefix of The Plug from '!'
              to any character (or characters) you like.
            </p>
          </div>
          <div className="content-5">
            <h1>Fast Download</h1>
            <p>
              Top search torrents mean more seeds and peers. Fast Download Speed
              without Ads!
            </p>
          </div>
          <div className="content-6">
            <i class="fas fa-download"></i>
          </div>
        </div>
        <button>
          FIND OUT MORE<i class="fas fa-chevron-circle-right"></i>
        </button>
      </div>
    </>
  );
}

export default Content;
