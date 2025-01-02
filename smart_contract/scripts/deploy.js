async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
    
  
    const Transaction = await ethers.getContractFactory("Transaction");
    const transaction = await Transaction.deploy();
  
    console.log("Transaction contract deployed to:", transaction.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  