// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

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

    function delAccount(uint256 id) public {
        if (id == acCount) {
            acCount--;
        }

        accounts[id].email = "";
        accounts[id].psWord = "";
    }

    function setMerchant(uint256 id) public {
        Account memory tempAccount = accounts[id];
        tempAccount.isMerchant = true;
        accounts[id] = tempAccount;
    }
}
