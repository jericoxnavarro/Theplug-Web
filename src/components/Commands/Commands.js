import React from "react";
import "../../css/Commands.css";

function Commands() {
  const discordAuth = () => {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=752749601005502515&scope=bot&permissions=453696";
  };
  const discordInvite = () => {
    window.location.href = "https://discord.gg/Q34JB7k";
  };
  return (
    <>
      <div className="main-commands">
        <h1>
          The Plug has every command you need to have a great torrent experience
        </h1>
        <table className="commands-table">
          <tr>
            <th>searchgames</th>
            <td>Search torrent in games category only.</td>
          </tr>
          <tr>
            <th>searchapplications</th>
            <td>Search torrent in applications category only.</td>
          </tr>
          <tr>
            <th>searchmovies</th>
            <td>Search torrent in movies category only.</td>
          </tr>
          <tr>
            <th>searchanime</th>
            <td>Search torrent in anime category only.</td>
          </tr>
          <tr>
            <th>choose</th>
            <td>Prepare a specific torrent you choose.</td>
          </tr>
          <tr>
            <th>changeprefix</th>
            <td>Change the server prefix.</td>
          </tr>
        </table>
        <div className="discord-add">
          <div className="discord-container">
            <div className="discord-bg">
              <div>
                <h2>Add The plug to your server or Join our server!</h2>
                <p>
                  Try our bot! for more info or questions join our official
                  discord server!
                </p>
                <div className="buttons-discord">
                  <button onClick={discordAuth}>
                    <i class="fab fa-discord"></i>add to DISCORD
                  </button>
                  <button onClick={discordInvite}>
                    <i class="fab fa-discord"></i>Join to The plug
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commands;
