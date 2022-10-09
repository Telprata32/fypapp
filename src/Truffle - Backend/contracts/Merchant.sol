// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Merchant {
    uint256 public storecount = 0;

    struct store {
        string name;
        string location;
        string account;
    }

    mapping(uint256 => store) public Stores;

    uint256 public prodCount = 0;

    struct product {
        string prodName;
        uint256 price;
        uint256 stock;
        string desc;
        string storeName;
    }

    mapping(uint256 => product) public products;

    function createStore(
        string memory email,
        string memory storeName,
        string memory location
    ) public {
        Stores[++storecount] = store(storeName, location, email);
    }

    //  Function to just edit the details of an existing store
    function editStore(
        uint256 id,
        string memory storeName,
        string memory location
    ) public {
        store memory _tempstore = Stores[id];
        Stores[id] = store(storeName, location, _tempstore.account);
    }

    function addProduct(
        string memory storeName,
        string memory name,
        uint256 price,
        uint256 initStock,
        string memory description
    ) public {
        products[++prodCount] = product(
            name,
            price,
            initStock,
            description,
            storeName
        );
    }

    function delProduct(uint256 id) public {
        if (id == prodCount) {
            prodCount--;
        }

        products[id].prodName = "";
        products[id].price = 0;
        products[id].stock = 0;
        products[id].desc = "";
        products[id].storeName = "";
    }
}
