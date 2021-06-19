let web3;
var accounts;
var balance;
var allowance;
var bridge;

async function enable(){
        return ethereum.enable();
      }

if (typeof window.ethereum !== 'undefined') {
  
  console.log('MetaMask is installed!');
    web3 = new Web3(window.web3.currentProvider);
    enable();
	web3.eth.net.getId().then(console.log);
	getMetMaskAccounts().then(variable => accounts = variable);
}
else{
    alert("Please install Meta Mask to interact with this webpage")
}

ethereum.on('accountsChanged', function getAccounts() {
	getMetMaskAccounts().then(variable => accounts = variable);
  });


  var abi = [{"inputs":[{"internalType":"address","name":"FTcontract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"OrdersCount","outputs":[{"internalType":"uint256","name":"SendOrdersCount","type":"uint256"},{"internalType":"uint256","name":"ReceiveOrdersCount","type":"uint256"},{"internalType":"uint256","name":"RequestTokenOrdersCount","type":"uint256"},{"internalType":"uint256","name":"AddTokenOrdersCount","type":"uint256"},{"internalType":"uint256","name":"ProposalsCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"addToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"},{"internalType":"uint256","name":"ID1","type":"uint256"}],"name":"addTokenAndProposalStats","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"main1","type":"address"},{"internalType":"address","name":"parallel1","type":"address"},{"internalType":"uint256","name":"fee1","type":"uint256"},{"internalType":"bool","name":"signed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"addTokenOrderProgress","outputs":[{"internalType":"bool","name":"signed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"node","type":"address"}],"name":"bridgeAndNodeStats","outputs":[{"internalType":"uint256","name":"nodes","type":"uint256"},{"internalType":"uint256","name":"stakedFT","type":"uint256"},{"internalType":"uint256","name":"staked","type":"uint256"},{"internalType":"uint256","name":"verifiedBlock","type":"uint256"},{"internalType":"uint256","name":"locked","type":"uint256"},{"internalType":"uint256","name":"lockedFT","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"}],"name":"contractsOf","outputs":[{"internalType":"address","name":"parallelContract","type":"address"},{"internalType":"address","name":"mainContract","type":"address"},{"internalType":"address","name":"parallelContractOfThat","type":"address"},{"internalType":"address","name":"mainContractOfThat","type":"address"},{"internalType":"bool","name":"full","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ThisMain","type":"address"},{"internalType":"address","name":"ThatParallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"createProposal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"depositOrderProgress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"},{"internalType":"uint256","name":"ID1","type":"uint256"}],"name":"doubleSendStats","outputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"},{"internalType":"address","name":"sender1","type":"address"},{"internalType":"address","name":"receiver1","type":"address"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"uint256","name":"fee1","type":"uint256"},{"internalType":"uint256","name":"claimingFee1","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom1","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"node","type":"address"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"orderProgress","outputs":[{"internalType":"uint256","name":"votedFT","type":"uint256"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"main","type":"address"},{"internalType":"address","name":"parallel","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"full","type":"bool"}],"name":"requestToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"uint256","name":"claimingFee","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"tokenAddressFrom","type":"address"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unStake","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"verify","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ID","type":"uint256"}],"name":"voteOnProposal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
  ;
  var ERC20abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Stake",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "unstaker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "unstakingamount",
          "type": "uint256"
        }
      ],
      "name": "Unstake",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "allowanceAmount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "stakingAllowence",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "fullAllowence",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burnFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient2",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient3",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient4",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient5",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient6",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient7",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient8",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient9",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient10",
          "type": "address"
        }
      ],
      "name": "decupleTransfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient1",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient2",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount2",
          "type": "uint256"
        }
      ],
      "name": "doubleTransfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "giveFullAllowance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "giveStakingAllowance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient1",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient2",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount2",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient3",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount3",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient4",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount4",
          "type": "uint256"
        }
      ],
      "name": "quadrupleTransfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient1",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient2",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount2",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient3",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount3",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient4",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount4",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient5",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount5",
          "type": "uint256"
        }
      ],
      "name": "quintupleTransfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient1",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient2",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount2",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient3",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount3",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient4",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount4",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient5",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount5",
          "type": "uint256"
        }
      ],
      "name": "quintupleTransferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "refreshStaking",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "refreshStakingFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "removeFullAllowance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "removeStakingAllowance",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stakeFT",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "stakeFTfor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "stakingStats",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "stakingAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "stakingBlock",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rewards",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient1",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount1",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient2",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount2",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient3",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount3",
          "type": "uint256"
        }
      ],
      "name": "tripleTransfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unstakeAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "unstakeAllfor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "unstakeFT",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "unstakeFTfor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  const contract = new web3.eth.Contract(abi,'0x155488a3c962e052c15f9de0f8ee2aae51515747')
  const thisContract = new web3.eth.Contract(ERC20abi,'0xc8aa1adc636d2369f3c9e94fef0705e2b2ba235c');

  getAccounts().then(getAllownce());
  //getAllownce().then(console.log);

  async function getMetMaskAccounts(){
	  return window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  
  async function getAccounts(){
		getMetMaskAccounts().then(variable => accounts = variable);
      return accounts;
    }

  function transfer(){
      var tokenAddressFrom = document.getElementById("tokenAddressFrom").innerHTML.replace(" ", "");
      var to = document.getElementById("to").innerHTML.replace(" ", "");
      var amount = document.getElementById("amount").innerHTML.replace(" ", "");
      var fee = document.getElementById("fee").innerHTML.replace(" ", "");
      var claimingFee = document.getElementById("claimingFee").innerHTML.replace(" ", "");


      try{
          amount - 1;
          fee - 1;
          claimingFee - 1;
      }catch(error){document.getElementById("status").style.color = red; document.getElementById("status").innerHTML = "Invalid input";}

      if(amount <= 0 || fee < 0 || claimingFee < 0 || tokenAddressFrom.length != 42 || to.length != 42){document.getElementById("status").style.color = red; document.getElementById("status").innerHTML = "Invalid input";}

      const contract = new web3.eth.Contract(ERC20abi,tokenAddressFrom);
      getAccounts.then(value => contract.methods.transfer(amount, fee ,claimingFee, to ,tokenAddressFrom).send({from : value[0]}));
  }

  async function getAllownce() {
    thisContract.methods.balanceOf("0x77ebA97AFFdc4f9ba3f25440c25614D4768a548A").call().then(console.log());
  }