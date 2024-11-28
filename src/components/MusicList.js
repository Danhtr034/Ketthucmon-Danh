import React from "react";

const MusicList = ({ searchQuery, onSongSelect }) => {
  const songs = [
    {
      title: "Đừng Làm Trái Tim Anh Đau Remix",
      artist: "Tiktok",
      audioSrc:
        "https://soundcloud.com/tiendung2811tiktok/ng-l-m-tr-i-tim-anh-au-remix",
    },
    {
      title: "Nơi Này Có Anh",
      artist: "Sơn Tùng",
      audioSrc:
        "https://soundcloud.com/vpoppamtio/noi-nay-co-anh?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Chúng Ta Của Tương Lai",
      artist: "Sơn Tùng",
      audioSrc:
        "https://soundcloud.com/c-anh-nguy-n-856547767/ch-ng-ta-c-a-t-ng-lai-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Chúng Ta Của Hiện Tại",
      artist: "Sơn Tùng",
      audioSrc:
        "https://soundcloud.com/b-h-ng-22387867/chu-ng-ta-cu-a-hie-n-ta-i-s-n?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Chạy Ngay Đi",
      artist: "Sơn Tùng",
      audioSrc:
        "https://soundcloud.com/b-o-long-252428187/sets/s-n-t-ng-mtp?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Như Anh Đã Thấy Em",
      artist: "3107",
      audioSrc:
        "https://soundcloud.com/user-801131155/nh-anh-th-y-em-cttde-2-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Ảo Ảnh",
      artist: "Hứa Linh Tam",
      audioSrc:
        "https://soundcloud.com/nguyengocnhuynhxdd/ao-anh-nhat-khoa-lang-tinh-hua-lam-tam?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Xích Linh",
      artist: "Hita",
      audioSrc:
        "https://soundcloud.com/v-h-i-anh-inh/xich-linh-hita?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    {
      title: "Đúng Lúc Gặp Gỡ Người",
      artist: "Lý Ngọc Dương",
      audioSrc:
        "https://soundcloud.com/angela-nguyen-bui/nhac-hoa-dung-luc-gap-go-nguoi-ly-ngoc-cuong?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
  ];

  // Lọc các bài hát theo tên bài hát hoặc nghệ sĩ
  const filteredSongs = songs.filter(
    (song) =>
      song &&
      song.title &&
      song.artist &&
      (song.title.toLowerCase().includes(searchQuery?.toLowerCase() || "") ||
        song.artist.toLowerCase().includes(searchQuery?.toLowerCase() || ""))
  );

  return (
    <div className="music-list">
      <h2>Danh sách bài hát</h2>
      <ul>
        {filteredSongs.map((song, index) => (
          <li key={index} onClick={() => onSongSelect(song)}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
