const ERC20 = artifacts.require("createToken");

module.exports = function (deployer) {
  deployer.deploy(ERC20);
};
