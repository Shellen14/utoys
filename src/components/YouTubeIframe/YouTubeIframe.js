import React, { useEffect, useRef } from "react";

const YouTubeIframe = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Dynamically load the YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize the YouTube player after API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: videoId, // The video ID to play
        playerVars: {
          autoplay: 1, // Auto-play video on load
          controls: 1, // Show controls
        },
        events: {
          onReady: onPlayerReady,
          onError: onPlayerError,
        },
      });
    };

    return () => {
      // Clean up on component unmount
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const onPlayerReady = (event) => {
    console.log("Player is ready");
    event.target.playVideo(); // Auto-play when ready
  };

  const onPlayerError = (event) => {
    console.error("Error occurred:", event.data);
  };

  return (
    <div>
      {/* The div where the YouTube player will be mounted */}
      <div id="youtube-player" style={{ width: "720px", height: "430px", margin : "0 0 0 350px", display: "flex", justifyContent: "center" }}></div>
    </div>
  );
};

export default YouTubeIframe;
