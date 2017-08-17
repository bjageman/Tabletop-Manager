var ENVIRONMENT="local"

function getConfig() {
  switch (ENVIRONMENT) {
  case "native":
    return {
      API_URL: 'http://10.0.2.2:5000',
      API_VERSION: 1,
      VERSION: 'debug',
      DEBUG: true,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  case "local":
    return {
      API_URL: 'http://localhost:5000',
      API_VERSION: 1,
      VERSION: 'debug',
      DEBUG: true,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  case "staging":
    return {
      API_URL: 'http://192.168.1.10:5000',
      API_VERSION: 1,
      VERSION: 'demo',
      DEBUG: false,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  case "production":
    return {
      API_URL: 'http://www.example.com:5000',
      API_VERSION: 1,
      VERSION: 'production',
      DEBUG: false,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  default:
    return {
      API_URL: 'http://localhost:5000',
      API_VERSION: 1,
      VERSION: 'debug',
      DEBUG: true,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  }
}

const myConfig = getConfig();
export default myConfig
