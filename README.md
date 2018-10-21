[Devpost Submission](https://devpost.com/software/dvote)

# dVote
Decentralized voting application using Ethereum. Also allows you to donate Ether to candidates and view their total funds.

## Dependencies
Install these prerequisites to follow along with the tutorial. See free video tutorial or a full explanation of each prerequisite.
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/


## Step 1. Clone the project
`git clone https://github.com/kev5/dVote.git`

## Step 2. Install dependencies
```
$ cd dVote
$ npm install
```

## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance.

## Step 4. Compile & Deploy the Application

For macOS-  
`$ truffle migrate --reset`

For Windows-  
`$ truffle develop`  

You must migrate the smart contract each time you restart ganache.

## Step 5. Configure Metamask

- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import any one of the 10 accounts provided by Ganache.

## Step 6. Run the Front End Application

Open a new shell and run the following command-  
`$ npm run dev`  

Visit this URL in your browser: http://localhost:3000
