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

    // purchases will hold things that are either in the cart or in the purchase history
    uint256 public purchCount = 0;

    struct Purchase {
        uint256 prodId;
        string prodName;
        uint256 price;
        uint256 prFloat;
        uint256 quantity;
        uint256 total;
        uint256 totFloat;
        string email;
        bool isPaid; // If true this product will be displayed in the purchase history, if not it will be in the cart
    }

    mapping(uint256 => Purchase) public purchases;

    function buyProduct(
        uint256 id,
        string memory name,
        uint256 price,
        uint256 prFloat,
        uint256 total,
        uint256 totFloat,
        uint256 quantity,
        string memory email
    ) public {
        purchases[++purchCount] = Purchase(
            id,
            name,
            price,
            prFloat,
            quantity,
            total,
            totFloat,
            email,
            false
        );
    }

    function finalisePurchases(uint256[] memory id) public {
        uint256 count = id.length;
        for (uint256 i = 0; i < count; i++) {
            uint256 index = id[i];
            Purchase memory _temp = purchases[index];
            _temp.isPaid = true;
            purchases[index] = _temp;
        }
    }

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
