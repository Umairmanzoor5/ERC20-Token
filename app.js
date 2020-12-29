// import Web3 from "web3";
// const Web3 = require('web3');
// var createToken = require("./build/contracts/createToken.json");

// const HDWalletProvider = require('@truffle/hdwallet-provider');




// const init  = async() =>{
//     const mnemonic = "cotton convince adapt lift baby animal pill mouse produce uncle fashion thing";
//     const givenProvider = new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/60dbb150db224b2ab3811ba5fdd5f40d")
//     const networkId = await web3.eth.net.getId();
   
   
//        const Contract = new web3.eth.Contract(
//            MyContract.abi,
//            MyContract.networks[networkId].address
//        ); 

// const web3 = new Web3(Web3.givenProvider);


// const networkID =  web3.eth.net.getId();

// const contractAddress = "0x44BFaac63ac03dc22fb742AAf01D90C992A1c6B8";
// const storageContract = new web3.eth.Contract(createToken, '0x44BFaac63ac03dc22fb742AAf01D90C992A1c6B8');

// var myContract = new web3.eth.Contract(createToken.abi, createToken.networks[networkID].address);
//     console.log( myContract.methods.balanceOf('0x24b561feE7D6Bd29DA02EdF6C60797232561e1d9').call());




  //import Web3 from 'web3'

 // require('dotenv').config();
  const Web3 = require('web3');
  var createToken = require("./build/contracts/createToken.json");
  const HDWalletProvider = require('truffle-hdwallet-provider');
//const web3 = new Web3(Web3.givenProvider);
  
  const init  = async() =>{
        // const web3 = new Web3(Web3.givenProvider);
        const mnemonic = "cotton convince adapt lift baby animal pill mouse produce uncle fashion thing";
        const givenProvider = new HDWalletProvider(mnemonic,`https://rinkeby.infura.io/v3/60dbb150db224b2ab3811ba5fdd5f40d`)
        const web3 = new Web3(givenProvider);
        const networkId = await web3.eth.net.getId();
  
      const Contract = new web3.eth.Contract(
        createToken.abi,
        createToken.networks[networkId].address
      );
      console.log(await Contract.methods.balanceOf('0x24b561feE7D6Bd29DA02EdF6C60797232561e1d9').call());
        
  }
  init();