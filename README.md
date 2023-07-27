# Initial deployment of a simple smartcontract using etherjs

Used solcjs to create abi and bin files
Used Etherjs to be able to connect to ganache local blockchain using RPC URL and private keys
Used fs-extra to read abi and bin files to be used within ContractFactory

## Basic commands

npm install -g yarn //Installs yarn
yarn add ethers@6.2.2 /adds etherjs
yarn add solc@0.8.7-fixed
yarn add fs-extra

## Key changes

No longer use hardcoding into the variables such as RPC URL or private key, store within a .env folder
Added .gitignore to include .env and .encryptedKey.json
Added encryptKey.js script that encrypts the key based off the .env variables
If user wills to remove passwords even in an .env file (in case of physical theft or local access etc) environemnt variables can be set up on the terminal prior to running node. Windows $env:PRIVATE_KEY_PASSWORD="Password"; node deploy.js MacOS/Linux: export PRIVATE_KEY_PASSWORD=Password && node deploy.js
