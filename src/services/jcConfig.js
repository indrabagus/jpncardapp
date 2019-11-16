// Constant for production / development process

const production = {
  url:{
    APIBASE_URL : 'https://qambing.com/rest-api/v0.1',
    BASENAME : '/jpncardapp'
  }
};

const development = {
  url:{
    APIBASE_URL : 'http://192.168.0.40/rest-api/v0.1',
    BASENAME : '/devbase'
  }
};

export const Config = process.env.NODE_ENV === 'development'? 
                      development : production