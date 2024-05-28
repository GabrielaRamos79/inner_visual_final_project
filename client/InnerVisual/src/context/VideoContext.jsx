import React, { createContext, useState, useContext, useEffect } from 'react';
import { ContentHandler } from "../handler/ContentHandler";
import { UserContext } from './AuthContext.jsx';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [progress, setProgress] = useState({ level1: 0, level2: 0, level3: 0 });

  const fetchData = async () => {
    if (user && user.id) {
      try {
        const contentData = await ContentHandler.getAllContent(user.id);
        setVideos(contentData);
      } catch (error) {
        console.error("Error getting the videos:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const updateProgress = () => {
    const calculateProgress = (level) => {
      const totalVideos = level.length;
      const watchedVideos = level.filter(video => video.status_video === 1).length;

      if (totalVideos === 0) {
        return 0;
      }

      return Math.round((watchedVideos / totalVideos) * 100);
    };

    setProgress({
      level1: calculateProgress(videos.slice(0, 7)),
      level2: calculateProgress(videos.slice(7, 9)),
      level3: calculateProgress(videos.slice(9, 11)),
    });
  };

  useEffect(() => {
    updateProgress();
  }, [videos]);

  const updateVideoNotes = (videoId, newNotes) => {
    setVideos(prevVideos =>
      prevVideos.map(video =>
        video.id_content === videoId ? { ...video, notes: newNotes } : video
      )
    );
  };

  return (
    <VideoContext.Provider value={{ videos, setVideos, selectedVideo, setSelectedVideo, progress, setProgress, updateVideoNotes, fetchData }}>
      {children}
    </VideoContext.Provider>
  );
};
