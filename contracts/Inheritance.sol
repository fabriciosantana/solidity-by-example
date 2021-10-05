// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

/* Inheritance tree
   A
 /  \
B   C
 \ /
  D
*/

contract E {
    // This is called an event. You can emit events from your function
    // and they are logged into the transaction log.
    // In our case, this will be useful for tracing function calls.
    event Log(string message);

    function foo() public virtual {
        emit Log("E.foo called");
    }

    function bar() public virtual {
        emit Log("E.bar called");
    }
}

contract F is E {
    function foo() public virtual override {
        emit Log("F.foo called");
        E.foo();
    }

    function bar() public virtual override {
        emit Log("F.bar called");
        super.bar();
    }
}

contract G is E {
    function foo() public virtual override {
        emit Log("G.foo called");
        E.foo();
    }

    function bar() public virtual override {
        emit Log("G.bar called");
        super.bar();
    }
}

contract H is F, G {
    // Try:
    // - Call H.foo and check the transaction logs.
    //   Although G inherits E, F and G, it only called G and then E.
    // - Call H.bar and check the transaction logs
    //   H called G, then F, and finally E.
    //   Although super was called twice (by F and G) it only called E once.

    function foo() public override(F, G) {
        super.foo();
    }

    function bar() public override(F, G) {
        super.bar();
    }
}