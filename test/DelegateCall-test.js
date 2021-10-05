const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Delegate Call", function () {
  it("Should return Delegate Call", async function () {
    const ContractB = await ethers.getContractFactory("B");
    const contractB = await ContractB.deploy();
    await contractB.deployed();

    await contractB.setVars(99);

    expect(await contractB.num()).to.equal(99);
    expect(await contractB.value()).to.equal(0);


    /*const ContractA = await ethers.getContractFactory("A");
    const contractA = await ContractA.deploy();
    await contractA.deployed();

    await contractA.setVars(contractB, 88);

    expect(await contractB.num()).to.equal(88);
    expect(await contractB.value()).to.equal(0);

    expect(await contractA.num()).to.equal(88);
    expect(await contractA.value()).to.equal(0);*/
  });
});
