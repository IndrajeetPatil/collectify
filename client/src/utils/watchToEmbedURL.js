const watchToEmbedURL = (url) => {
  const watchURL = new URL(url);
  const watchID = watchURL.searchParams.get("v");
  return `https://www.youtube.com/embed/${watchID}`;
};

export default watchToEmbedURL;
