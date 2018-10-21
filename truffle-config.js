module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      gas: 300000,
      network_id: "*", // Match any network id
      from: "0x7d7D8CF330000853295520621D61d9ce28FA166c"
    }
  }
};
