export const Abi = [{
    "constant": true,
    "inputs": [{
      "name": "_data",
      "type": "address"
    }],
    "name": "canReverse",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_new",
      "type": "address"
    }],
    "name": "setOwner",
    "outputs": [],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }, {
      "name": "_key",
      "type": "string"
    }, {
      "name": "_value",
      "type": "bytes32"
    }],
    "name": "setData",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "string"
    }],
    "name": "confirmReverse",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }],
    "name": "reserve",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": true,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }],
    "name": "drop",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }, {
      "name": "_key",
      "type": "string"
    }],
    "name": "getAddress",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_amount",
      "type": "uint256"
    }],
    "name": "setFee",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }, {
      "name": "_to",
      "type": "address"
    }],
    "name": "transfer",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }, {
      "name": "_key",
      "type": "string"
    }],
    "name": "getData",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }],
    "name": "reserved",
    "outputs": [{
      "name": "reserved",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "drain",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "string"
    }, {
      "name": "_who",
      "type": "address"
    }],
    "name": "proposeReverse",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }],
    "name": "hasReverse",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }, {
      "name": "_key",
      "type": "string"
    }],
    "name": "getUint",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "fee",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }],
    "name": "getOwner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }],
    "name": "getReverse",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_data",
      "type": "address"
    }],
    "name": "reverse",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }, {
      "name": "_key",
      "type": "string"
    }, {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "setUint",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "string"
    }, {
      "name": "_who",
      "type": "address"
    }],
    "name": "confirmReverseAs",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "removeReverse",
    "outputs": [],
    "payable": false,
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_name",
      "type": "bytes32"
    }, {
      "name": "_key",
      "type": "string"
    }, {
      "name": "_value",
      "type": "address"
    }],
    "name": "setAddress",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "payable": false,
    "type": "function"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }],
    "name": "Drained",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }],
    "name": "FeeChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "name",
      "type": "string"
    }, {
      "indexed": true,
      "name": "reverse",
      "type": "address"
    }],
    "name": "ReverseProposed",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "name",
      "type": "string"
    }, {
      "indexed": true,
      "name": "reverse",
      "type": "address"
    }],
    "name": "ReverseConfirmed",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "name",
      "type": "string"
    }, {
      "indexed": true,
      "name": "reverse",
      "type": "address"
    }],
    "name": "ReverseRemoved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "name",
      "type": "bytes32"
    }, {
      "indexed": true,
      "name": "owner",
      "type": "address"
    }],
    "name": "Reserved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "name",
      "type": "bytes32"
    }, {
      "indexed": true,
      "name": "oldOwner",
      "type": "address"
    }, {
      "indexed": true,
      "name": "newOwner",
      "type": "address"
    }],
    "name": "Transferred",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "name",
      "type": "bytes32"
    }, {
      "indexed": true,
      "name": "owner",
      "type": "address"
    }],
    "name": "Dropped",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "name",
      "type": "bytes32"
    }, {
      "indexed": true,
      "name": "key",
      "type": "string"
    }, {
      "indexed": false,
      "name": "plainKey",
      "type": "string"
    }],
    "name": "DataChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "old",
      "type": "address"
    }, {
      "indexed": true,
      "name": "current",
      "type": "address"
    }],
    "name": "NewOwner",
    "type": "event"
  }];