module.exports = {
    // ...other Jest configuration options...
  
    moduleNameMapper: {
      '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jest-environment-jsdom',
  };