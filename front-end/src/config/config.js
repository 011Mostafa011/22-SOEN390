const isLocal = window.location.hostname.includes("localhost");

const config = {
  // we will setup the heroku url here once it has been set up.
  baseUrlApi: "http://localhost:1337/api",
  baseUrl: "http://localhost:1337",
};

export default config;
