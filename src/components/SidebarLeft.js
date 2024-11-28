import React, { useState } from "react";

const categories = [
  {
    name: "Pop",
    songs: [
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
    ],
  },
  {
    name: "Rock",
    songs: [
      {
        title: "Chúng Ta Của Tương Lai",
        artist: "Sơn Tùng",
        audioSrc:
          "https://soundcloud.com/c-anh-nguy-n-856547767/ch-ng-ta-c-a-t-ng-lai-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
      {
        title: "Chúng Ta Của Quá Khứ",
        artist: "Sơn Tùng",
        audioSrc:
          "https://soundcloud.com/khoapac8386/rec-2024-08-17?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
      },
    ],
  },
  {
    name: "Jazz",
    songs: [
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
    ],
  },
];

const SidebarLeft = ({ onCategorySelect, onSongSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Hàm để hiển thị các bài hát khi chọn danh mục
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category.songs); // Truyền bài hát từ danh mục sang phần music list
  };

  const handleSongSelect = (song) => {
    onSongSelect(song); // Gọi hàm onSongSelect từ props để phát bài hát
  };

  return (
    <div className="sidebar-left">
      <h2>Danh mục</h2>
      <ul className="category-list">
        {Array.isArray(categories) && categories.length > 0 ? (
          categories.map((category, index) => (
            <li
              key={index}
              className="category-item"
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
              {selectedCategory === category && (
                <ul className="song-list">
                  {category.songs.map((song, subIndex) => (
                    <li
                      key={subIndex}
                      className="song-item"
                      onClick={() => handleSongSelect(song)} // Bấm vào bài hát để phát
                    >
                      {song.title} - {song.artist}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))
        ) : (
          <li>Không có danh mục nào</li>
        )}
      </ul>
    </div>
  );
};

export default SidebarLeft;
