// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
	uint256 public count;

	constructor(uint256 _count) {
		count = _count;
	}

	function add() public {
		count++;
	}
}
