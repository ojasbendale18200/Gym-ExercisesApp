export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "60dc67b27fmshb08dd7a2044af3ap1c8e0ejsnbf765fcff5a0",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const yotubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "60dc67b27fmshb08dd7a2044af3ap1c8e0ejsnbf765fcff5a0",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
