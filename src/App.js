import React, { useState } from "react";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import SearchBar from "./components/SearchBar";
import MusicList from "./components/MusicList";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [playedSongs, setPlayedSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [songList, setSongList] = useState([]); // Quản lý danh sách bài hát được chọn từ danh mục

  // Hàm xử lý tìm kiếm
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Hàm xử lý khi chọn bài hát
  const handleSongSelect = (song) => {
    setCurrentSong(song); // Cập nhật bài hát đang phát
    setPlayedSongs((prevSongs) => {
      const isAlreadyPlayed = prevSongs.some(
        (playedSong) => playedSong.title === song.title
      );
      if (!isAlreadyPlayed) {
        return [song, ...prevSongs];
      }
      return prevSongs;
    });
  };

  // Hàm xử lý khi chọn danh mục bài hát
  const handleCategorySelect = (songs) => {
    setSongList(songs); // Cập nhật bài hát từ danh mục được chọn
  };

  return (
    <div className="app">
      <SidebarLeft
        onCategorySelect={handleCategorySelect}
        onSongSelect={handleSongSelect} // Truyền hàm vào để xử lý khi bài hát được chọn
      />
      <div className="main-content">
        <SearchBar onSearchChange={handleSearchChange} />
        <MusicPlayer currentSong={currentSong} />{" "}
        {/* Đưa MusicPlayer lên trên */}
        <MusicList
          searchQuery={searchQuery}
          songs={songList}
          onSongSelect={handleSongSelect}
        />
      </div>
      <SidebarRight
        playedSongs={playedSongs}
        onSongSelect={handleSongSelect} // Truyền hàm vào SidebarRight
      />
    </div>
  );
};

export default App;
