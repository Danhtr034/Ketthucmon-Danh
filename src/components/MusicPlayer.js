import React from "react";

const MusicPlayer = ({ currentSong }) => {
  return (
    <div className="music-player">
      {currentSong ? (
        <>
          <h2>
            Đang phát: {currentSong.title} - {currentSong.artist}
          </h2>
          <div className="soundcloud-embed">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                currentSong.audioSrc
              )}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
            ></iframe>
          </div>
        </>
      ) : (
        <h2>Chưa có bài hát nào được chọn</h2>
      )}
    </div>
  );
};

export default MusicPlayer;
