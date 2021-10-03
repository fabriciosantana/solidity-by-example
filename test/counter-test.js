const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return Counter", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    expect(await counter.get()).to.equal(0);

    await counter.inc();
    await counter.inc();
    await counter.inc();

    expect(await counter.get()).to.equal(3);

    await counter.dec();

    expect(await counter.get()).to.equal(2);

    await counter.dec();

    expect(await counter.get()).to.equal(1);

  });
});
