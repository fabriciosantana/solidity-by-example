const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hello World", function () {
  it("Should return the new hello world once it's changed", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloworld = await HelloWorld.deploy("Fabricio");
    await helloworld.deployed();

    expect(await helloworld.getGreeting()).to.equal("Hello, Fabricio");

    const setGreetingTx = await helloworld.setGreeting("Hola, Eduardo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await helloworld.getGreeting()).to.equal("Hola, Eduardo!");
  });
});
