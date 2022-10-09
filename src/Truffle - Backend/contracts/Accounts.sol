// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./StringLib.sol";

contract Accounts {
    uint256 public acCount = 0;

    struct Account {
        string email;
        string psWord;
        bool isMerchant;
    }

    mapping(uint256 => Account) public accounts;

    function createAccount(string memory email, string memory psWord) public {
        accounts[++acCount] = Account(email, psWord, false);
    }

    function delAccount(string memory email) public {
        for (uint256 i = 1; i <= acCount; i++) {
            if (StringLib.compareTwoStrings(email, accounts[i].email)) {
                if (i == acCount) {
                    acCount--;
                }

                accounts[i].email = "";
                accounts[i].psWord = "";
            }
        }
    }

    function setMerchant(string memory email) public {
        uint256 tempid = 0;
        for (uint256 i = 1; i <= acCount; i++) {
            if (StringLib.compareTwoStrings(email, accounts[i].email)) {
                tempid = i;
                break;
            }
        }
        Account memory tempAccount = accounts[tempid];
        tempAccount.isMerchant = true;
        accounts[tempid] = tempAccount;
    }
}
