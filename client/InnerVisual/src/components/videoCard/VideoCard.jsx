import React, { useEffect, useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ match }) => {
  const [video, setVideo] = useState({});

  useEffect(() => {
    const fetchVideoById = async () => {
      try {
        const response = await fetch(`http://localhost:5000/videos/${match.params.id}`);
        const data = await response.json();
        setVideo(data);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideoById();
  }, [match]);

  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      {/* Тут можна додати елементи для відтворення відео */}
    </div>
  );
};

export default VideoCard;