import React from "react";
import "../../../css/HeroFeatures.css";

function HeroFeatures() {
  const discordAuth = () => {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=752749601005502515&scope=bot&permissions=453696";
  };
  const discordInvite = () => {
    window.location.href = "https://discord.gg/Q34JB7k";
  };

  https: return (
    <>
      <div className="main-herofeatures">
        <h1 className="features-title">
          Experience the most feature rich Torrent Bot
        </h1>
        <p className="features-dec">
          The Plug is a discrod bot that will gather torrents for you.
        </p>
        <div className="container-features">
          <div className="features-1">
            <img src="./svg/Asset 20.svg" />
            <h2>Top 10 Torrent Websites</h2>
            <p>
              The plug will gather torrents on these websites. These 10 websites
              are the top torrenting websites.
            </p>
          </div>
          <div className="features-2">
            <img src="./svg/Asset 19.svg" />
            <h2>Top Torrent Results Only</h2>
            <p>
              The plug will gather top torrents results. These torrents are the
              most visited or downloaded torrents on the torrents websites.
            </p>
          </div>
          <div className="features-3">
            <img src="./svg/Asset 18.svg" />
            <h2>Virus free torrents</h2>
            <p>Fast Download, Virus-free torrents, and no ads!</p>
          </div>
          <div className="features-4">
            <img src="./svg/Asset 22.svg" />
            <h2>Information Secure!</h2>
            <p>
              The bot will not gather any information on you. The bot will only
              gather torrents for you!
            </p>
          </div>
        </div>
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

export default HeroFeatures;
