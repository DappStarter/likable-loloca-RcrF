require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note random unique hunt brand equal gift'; 
let testAccounts = [
"0x03915d61f83d9fd380c88aee4c8715ccf999a0abae133536c0175ba172e5a712",
"0xc0d03aa8d719642ec1a3c4ff15dc0a8c86223a45a1fde37394b64af370bd0dc8",
"0xacbcd4e9f039368810b2ca59b0dc2c507c554bef58641286b14d6bc10c243f4c",
"0x8b616148948be22acd3c4c4ff7dd2f286e07de77dd72ac0f9245033474062ee3",
"0xf6522a2e2f26b43e89ca66a73c38ac24ace62dd83e99befa148667b1ac2b8c24",
"0x34864dcd79bd0a6480f3a516ca2f1f9ad38cee97107544bfedf264e5c0a7b0b7",
"0xff8a5369387ef4ac1acf763d56fa5b148ae0cc86edc4611f750eee8faae45612",
"0x6adf8b0170eb538569cf222de5d17f4d77b35b18f095236cc9a2fdd1e258f630",
"0x381f1b87e13f1b51d7d8a258a6146f3406e6cf7e399046dc92c79d633cbef880",
"0x5dada8eeb2e6c4d20bfca929c02b075b93ac965686609bcd882494dce4115d45"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

