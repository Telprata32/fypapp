// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./StringLib.sol";

contract Merchant {
    struct store {
        string name;
        string location;
    }

    mapping(string => store) internal Stores;

    uint256 public prodCount = 0;

    struct product {
        string prodName;
        uint256 price;
        uint256 stock;
        string desc;
        string storeName;
    }

    mapping(uint256 => product) public products;

    function setStore(
        string memory email,
        string memory storeName,
        string memory location
    ) public {
        Stores[email].name = storeName;
        Stores[email].location = location;
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
