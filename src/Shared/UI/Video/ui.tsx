import React from "react";
import './style.scss';
// import YouTube from "react-youtube";

interface Props {
  LinkVideo: string;
}

function MyVideo(props: Props) {
  const { LinkVideo } = props;
  // const opts = useMemo(() => ({
  //   height: '100%',
  //   width: '100%',
  //   playerVars: {
  //     start: 388,
  //   },
  // }), []);

  return (
    <div className="our-video">
      <h1>Video</h1>
      <div className="bs-video">
        {/* YouTube Embed */}
        {LinkVideo.includes("youtube.com") && (
          // <YouTube className="video-player" videoId="_JhxPSde-Cc" opts={opts} />
          <iframe
          title="video"
          className="video-player"
          src={LinkVideo.replace("watch?v=", "embed/")}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          />
        )}
        {/* Rutube Embed */}
        {LinkVideo.includes("rutube.ru") && (
          <iframe
            title="video"
            className="video-player"
            src={LinkVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {/* VK Embed */}
        {LinkVideo.includes("vk.com") && (
          <iframe
            title="video"
            className="video-player"
            src={LinkVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export default MyVideo;
