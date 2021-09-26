// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.3 and less than 0.9.0
pragma solidity ^0.8.4;

contract HelloWorld {
    string public greet;

    constructor (string memory name){
        greet = string(abi.encodePacked("Hello, ",  name));
    }

    function getGreet() public view returns (string memory) {
        return greet;
    }

    function setGreeting(string memory _greeting) public {
        //console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greet = _greeting;
    }
}