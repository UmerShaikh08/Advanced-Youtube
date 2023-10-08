export const liveContentData = async (videoId) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=${videoId}&key=${process.env.REACT_APP_KEY}`
    );
    const json = await response?.json();

    if (json?.error) {
      throw new Error("failed to get live content data");
    }

    return json;
  } catch (error) {
    console.log(error);
  }
};

export const LiveChat = async (chatId) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${chatId}&part=snippet,authorDetails&maxResults=2000&key=${process.env.REACT_APP_KEY}`
    );

    const json = await response?.json();
    console.log(json);
    if (json?.error) {
      throw new Error("Failed to fetch live comment");
    }
    return json;
  } catch (error) {
    console.log(error);
  }
};
