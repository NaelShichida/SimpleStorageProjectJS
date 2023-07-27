const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8");

  // let wallet = new ethers.Wallet.fromEncryptedJsonSync(
  //   encryptedJson,
  //   process.env.PRIVATE_KEY_PASSWORD
  // ); //this is no longer viable This is because fromEncryptedJsonSync is not a constructor function, but rather a static method on the Wallet class that is used to create a wallet instance from an encrypted JSON keystore.

  const wallet = await ethers.Wallet.fromEncryptedJsonSync(
    encryptedJson,
    process.env.PRIVATE_KEY_PASSWORD
  );

  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait....");

  const contract = await contractFactory.deploy();
  console.log(contract);

  await contract.deploymentTransaction.wait(1);

  const currentFavouriteNumber = await contract.retrieve();
  console.log(currentFavouriteNumber);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
