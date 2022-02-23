// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract Counter {
   uint public count;

    constructor(uint _count){
        count = _count;
    }


     function add() public {
         count++;
     }

}