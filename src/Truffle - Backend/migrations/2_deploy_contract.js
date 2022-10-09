var Accounts = artifacts.require("./Accounts.sol");
var Merchant = artifacts.require("./Merchant.sol");

module.exports = function (deployer) {
  deployer.deploy(Accounts);
  deployer.deploy(Merchant);
};
