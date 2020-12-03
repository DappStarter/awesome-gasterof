require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note outside common inner clog orange snake'; 
let testAccounts = [
"0xf8e2235797cda070ba003c3e70c35330031287f950beac0e71ad51a88c4de732",
"0xd37746aab47b9fa41a18ee5b37d33b7a380343ccb46068fa9012c99d0a2b646e",
"0xfaad3caf77c2d5ea9c39f7b5bfda7dc496d870e2360c60ac56e4393cc6c29dd6",
"0xef6791f0ffdb09fa887381a528e855d97e1ca003deb57e75444984459237f996",
"0x03118280ff40e3595d3af66b451cae55ecaeeadabf5c7cdab1683b3a6144e4ef",
"0xdeda52ba546f63016211232d29e9475fbba21fd66a646b2286d1a331f12fc547",
"0x8c9feed7ecb120264a138104341c7e44513f89c5299e752d10f780344dd788ab",
"0x7aa3263d73ce7485c0d2f3e782ea571d27a8cf2d73222632faa838702abf4ffb",
"0x405449bff1c9b533fea354429a6274bab6088086f0f414d7f288c73f4ea63673",
"0x95a9052870e54d087a13f2e87261f9767d5ec12340efe117873737e5dd778909"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
