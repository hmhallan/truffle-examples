module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  
  
  networks: {
    
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4712388,   // <--- Twice as much
      gasPrice: 36000000
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
      //gas: 4712388,   // <--- Twice as much
      //gasPrice: 36000000
    }
    
  },



  mocha: {
    useColors: true,
    /*
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 21,
      showTimeSpent: true,
      onlyCalledMethods: true
    }
    */
  },

  //solc: { optimizer: { enabled: true, runs: 200 } }
  
};
