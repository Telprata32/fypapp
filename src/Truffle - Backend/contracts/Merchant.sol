// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./StringLib.sol";

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
        string memory email,
        string memory storeName,
        string memory location
    ) public {
        uint256 tempid = 0;
        for (uint256 i = 1; i <= storecount; i++) {
            if (StringLib.compareTwoStrings(email, Stores[i].account)) {
                tempid = i;
                break;
            }
        }
        store memory _tempstore = Stores[tempid];
        Stores[tempid] = store(storeName, location, _tempstore.account);
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

    function delProduct(string memory prodName) public {
        for (uint256 i = 1; i <= prodCount; i++) {
            if (StringLib.compareTwoStrings(prodName, products[i].prodName)) {
                if (i == prodCount) {
                    prodCount--;
                }

                products[i].prodName = "";
                products[i].price = 0;
                products[i].stock = 0;
                products[i].desc = "";
                products[i].storeName = "";
            }
        }
    }
}
