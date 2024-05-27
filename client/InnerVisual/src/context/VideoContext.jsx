
import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [progress, setProgress] = useState({ level1: 0, level2: 0, level3: 0 });

  const updateVideoNotes = (videoId, newNotes) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id_content === videoId ? { ...video, notes: newNotes } : video
      )
    );
  };

  return (
    <VideoContext.Provider value={{ videos, setVideos, selectedVideo, setSelectedVideo, progress, setProgress, updateVideoNotes }}>
      {children}
    </VideoContext.Provider>
  );
};

