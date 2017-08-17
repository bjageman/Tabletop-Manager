var ENVIRONMENT="demo"

function getConfig() {
  switch (ENVIRONMENT) {
  case "debug-native":
    return {
      API_URL: 'http://10.0.2.2:5000',
      API_VERSION: 1,
      VERSION: 'debug',
      DEBUG: true,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  case "debug-web":
    return {
      API_URL: 'http://localhost:5000',
      API_VERSION: 1,
      VERSION: 'debug',
      DEBUG: true,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  case "demo":
    return {
      API_URL: 'http://192.168.1.39:5000',
      API_VERSION: 1,
      VERSION: 'demo',
      DEBUG: false,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  case "production":
    return {
      API_URL: 'http://neuro.ddnsking.com:5000',
      API_VERSION: 1,
      VERSION: 'production',
      DEBUG: false,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  case "production-debug":
    return {
      API_URL: 'http://neuro.ddnsking.com:5000',
      API_VERSION: 1,
      VERSION: 'production-debug',
      DEBUG: true,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  default:
    return {
      API_URL: 'http://10.0.2.2:5000',
      API_VERSION: 1,
      VERSION: 'debug',
      DEBUG: true,
      DATETIMEFORMAT: "MM/DD/YYYY hh:mm A",
    };
  }
}

const myConfig = getConfig();
export default myConfig
