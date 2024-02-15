const images = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg"
  ];
  
  const videos = [
    "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.jpg",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  ];
  
  const generateYouTubeData = () => {
    const regularVideos = Array.from({ length: 10 }, (_, index) => ({
      id: `${index + 1}`,
      title: `Regular Video ${index + 1}`,
      thumbnail: images[index % images.length],
      videoUrl: videos[index % videos.length],
      duration: `${Math.floor(Math.random() * 10)}:${Math.floor(Math.random() * 60)}`,
      views: `${Math.floor(Math.random() * 100)}K`,
    }));
  
    const shorts = {
      shortsHeader: 'Trending Shorts',
      shortsList: Array.from({ length: 5 }, (_, index) => ({
        id: `s${index + 1}`,
        title: `Short Video ${index + 1}`,
        thumbnail: images[(index + 5) % images.length],
        videoUrl: videos[(index + 5) % videos.length],
        duration: `${Math.floor(Math.random() * 1)}:${Math.floor(Math.random() * 60)}`,
        views: `${Math.floor(Math.random() * 50)}K`,
      })),
    };
  
    return [...regularVideos, shorts];
  };
  
  export const YoutubeData = generateYouTubeData();
  
  