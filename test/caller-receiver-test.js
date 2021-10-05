const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Caller and Receiver interaction", function () {
  it("Should ", async function () {

    const Receiver = await ethers.getContractFactory("Receiver");
    const receiver = await Receiver.deploy();
    await receiver.deployed();

    //console.log(await receiver.foo("hello", 10))

    const Caller = await ethers.getContractFactory("Caller3");
    const caller = await Caller.deploy();
    await caller.deployed();

    await caller.testCallFoo(receiver.address)

    await caller.testCallDoesNotExist(receiver.address)

    
    /*const Callee = await ethers.getContractFactory("Callee");
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

    //console.log(callee)

    //await caller.setX(callee, 25);

    //await caller.setXandSendEther(callee, 25);
    */
    
  });
});
