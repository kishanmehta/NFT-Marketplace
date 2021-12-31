require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "43b02d2f28f0403ba33de92c9b769b2c"

module.exports = {
  defaultNetwork: "hardhat",
  networks : {
    hardhat : {
      chainId : 1337
    },
    mumbai : {
      url : 'https://polygon-mumbai.infura.io/v3/43b02d2f28f0403ba33de92c9b769b2c',
      accounts : [privateKey]
    },
    mainnet : {
      url : 'https://polygon-mumbai.infura.io/v3/43b02d2f28f0403ba33de92c9b769b2c',
      accounts : [privateKey]
    }
  },
  solidity: "0.8.4",
}; 