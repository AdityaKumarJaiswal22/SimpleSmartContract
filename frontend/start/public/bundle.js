var contractABI = [];
var contractAddress = '0xcA51cfBbBa744912ba9Ba1be6aDee39B42DcC3a0';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);


