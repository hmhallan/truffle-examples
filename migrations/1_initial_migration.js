const TruffleConfig = require('../truffle');

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network, addresses) {

  // const config = TruffleConfig.networks[network];

  // console.log('>> Unlocking account ' + config.from);
  // web3.personal.unlockAccount(config.from, "hmhallan");

  deployer.deploy(Migrations);
};
