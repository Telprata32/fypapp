var Accounts = artifacts.require("./Accounts.sol");
var StringLib = artifacts.require("./StringLib.sol");

module.exports = function (deployer) {
  StringLib.address = "0x56E57d242077154Baf2cAba09aE50240a52866b5";
  deployer.link(StringLib, Accounts);
  deployer.deploy(Accounts);
};
