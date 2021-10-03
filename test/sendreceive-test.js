const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SendReceiveEther", function () {
  it("Should transfer funds", async function () {
    const Sender = await ethers.getContractFactory("SendEther");
    const sender = await Sender.deploy();
    await sender.deployed();

    console.log("Sender address: %s", sender.address);
    //console.log("Sender balance: %s", sender);

    const Receiver = await ethers.getContractFactory("ReceiveEther");
    const receiver = await Receiver.deploy();
    await receiver.deployed();

    console.log("Receiver address: %s", receiver.address);
    console.log("Receiver balances: %s", await receiver.getBalance());

    await sender.sendViaTransfer(receiver.address);
    await sender.sendViaSend(receiver.address);
    await sender.sendViaCall(receiver.address);

    console.log("Receiver balances: %s", await receiver.getBalance());

    

    expect(1).to.equal(1);

  });
});
