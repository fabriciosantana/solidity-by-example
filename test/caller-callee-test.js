const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Caller and Callee interaction", function () {
  it("Should return updated value setted by Caller", async function () {

    const Caller = await ethers.getContractFactory("Caller2");
    const caller = await Caller.deploy();
    await caller.deployed();

    const Callee = await ethers.getContractFactory("Callee");
    const callee = await Callee.deploy();
    await callee.deployed();
    
    expect(await callee.x()).to.equal(0);
    expect(await callee.value()).to.equal(0);

    await callee.setX(10)

    //console.log(await callee.setX(10));

    expect(await callee.x()).to.equal(10);
    expect(await callee.value()).to.equal(0);

    await callee.setXandSendEther(15);

    expect(await callee.x()).to.equal(15);
    expect(await callee.value()).to.equal(0);

    await caller.setXFromAddress(callee.address, 20);

    expect(await callee.x()).to.equal(20);


    console.log(callee)

    //await caller.setX(callee, 25);
    
  });
});
