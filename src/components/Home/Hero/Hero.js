import React from "react";
import "../../../css/Hero.css";

function Hero() {
  const discordAuth = () => {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=752749601005502515&scope=bot&permissions=453696";
  };
  return (
    <>
      <div className="main-hero">
        <div className="hero-container">
          <h1>This is THE PLUG.</h1>
          <p>A feature-rich, easy to use DISCORD TORRENT BOT!</p>

          <button onClick={discordAuth}>
            <i class="fab fa-discord"></i>add to DISCORD
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
