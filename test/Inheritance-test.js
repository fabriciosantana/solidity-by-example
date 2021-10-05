const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Inheritance test", function () {
  it("Should ", async function () {

    const E = await ethers.getContractFactory("E");
    const e = await E.deploy();
    await e.deployed();

    await e.foo();
    await e.bar();


    const F = await ethers.getContractFactory("F");
    const f = await F.deploy();
    await f.deployed();

    await f.foo();
    await f.bar();

    const G = await ethers.getContractFactory("G");
    const g = await G.deploy();
    await g.deployed();

    await g.foo();
    await g.bar();

    const H = await ethers.getContractFactory("H");
    const h = await H.deploy();
    await h.deployed();

    await h.foo();
    await h.bar();

    
  });
});
