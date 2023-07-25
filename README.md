# Initial deployment of a simple smartcontract using etherjs

Used solcjs to create abi and bin files
Used Etherjs to be able to connect to ganache local blockchain using RPC URL and private keys
Used fs-extra to read abi and bin files to be used within ContractFactory

## Basic commands

npm install -g yarn //Installs yarn
yarn add ethers@6.2.2 /adds etherjs
yarn add solc@0.8.7-fixed
yarn add fs-extra

## Ensure private keys are not hardcoded such as in this example, these are values taken from local ganache
