const hasUrlProtocol = url => {
  if (url.indexOf('http') === -1) {
    return `//${url}`;
  } else {
    return url;
  }
};

export default hasUrlProtocol;
