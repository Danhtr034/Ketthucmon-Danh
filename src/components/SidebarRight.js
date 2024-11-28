import React from "react";

const SidebarRight = ({ playedSongs, onSongSelect }) => {
  return (
    <div className="sidebar-right">
      <h2>Bài hát đã phát</h2>
      <ul>
        {playedSongs.map((song, index) => (
          <li
            key={index}
            onClick={() => onSongSelect(song)} // Thêm sự kiện onClick để chọn bài hát
            style={{ cursor: "pointer" }} // Thêm con trỏ chỉ vào tay để hiển thị có thể nhấp
          >
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarRight;
