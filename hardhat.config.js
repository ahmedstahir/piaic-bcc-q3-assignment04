require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const PRIVATE_KEY = process.env["TEST_PRIVATE_KEY"];

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.0",
    networks: {
        ropsten: {
            url: "https://ropsten.infura.io/v3/f80667e01cde4a468cb3a495a88f6801",
            accounts: [`0x${PRIVATE_KEY}`]
        }
    }
};
