const watchToEmbedURL = (url) => {
  const watchURL = new URL(url);

  if (watchURL.toString().includes("embed")) {
    return url;
  }

  const watchID = watchURL.searchParams.get("v");
  return `https://www.youtube.com/embed/${watchID}`;
};

export default watchToEmbedURL;
