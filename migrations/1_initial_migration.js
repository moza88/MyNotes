const Migrations = artifacts.require("Migrations");
const NoteERC721 = artifacts.require("NoteBase");

module.exports = function(deployer) {
  deployer.deploy(Migrations);

  deployer.deploy(NoteERC721);
};
