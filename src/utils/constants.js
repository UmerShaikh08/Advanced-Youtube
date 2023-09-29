export const API_KEY = "AIzaSyDxVXObkzSu9WSwil2XIIqm4hZKvkRNVKU";
export const YOUTUBE_API_URL =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=&regionCode=US&key=` +
  API_KEY;

export const SEARCH_API_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  API_KEY;

export const SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const Live_Msg_Count = 25;
