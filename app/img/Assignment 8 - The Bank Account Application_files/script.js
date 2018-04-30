/*eslint-env browser*/


var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
}
var userDiv = $("interface");
var h1 = window.document.createElement("h1");
var h2 = window.document.createElement("h2");
var namePrompt = "";
var depositPrompt = 0;
var withdrawalPrompt = 0;


function thisPrompt() {
    "use strict";

    if (this.id === "name") {
        namePrompt = window.prompt('Please enter your name');
        bankAccount(namePrompt).getOwnerName();
        //        bankAccount(namePrompt);
        //        return namePrompt;
    } else if (this.id === "deposit") {
        window.console.log(this.id);
        depositPrompt = parseFloat(window.prompt("How much would you like to deposit?"));
        bankAccount().deposit(depositPrompt);
//        bankAccount().getBalance();
        return depositPrompt;
    } else if (this.id === "withdrawal") {
        window.console.log(this.id);
        withdrawalPrompt = Number(window.prompt("How much would like to withdrawal?"));
        bankAccount().withdrawl(withdrawalPrompt);
        bankAccount().getBalance();
    }
}

function bankAccount(ownerName) {
    "use strict";
    var owner, balance,
        bankMethods;
    owner = ownerName;
    balance = 0;
    bankMethods = {
            deposit: function (depositAmount) {
                window.console.log(typeof(balance));
                if (balance === 0) {
                balance += depositAmount;
                window.console.log(balance);
              bankMethods.getBalance();
            
            } else {
                window.console.log("worked");
                balance += depositAmount;
                window.console.log(balance);
                bankMethods.getBalance();
            }
            //            this.x;
            //            window.console.log(this.x);
            //            if (isNaN(this.x)) {
            //                this.x = depositAmount;
            //                balance = this.x;
            //                window.console.log(balance);
            //                bankMethods.getBalance();
            //                window.console.log(this.x);
            //            } else {
            //                this.x += depositAmount;
            //                balance = this.x;
            //                window.console.log(balance);
            //                bankMethods.getBalance();
            //                window.console.log(this.x);
            //            }

            //            balance = x;
            //            window.console.log(balance);
            //            bankMethods.getBalance();
            //                return balance;
            return balance;
        },
        withdrawal: function (withdrawalAmount) {
            balance = balance - withdrawalAmount;
        },
        getBalance: function () {
            userDiv.appendChild(h2).innerHTML = balance.toString();
            return balance;
        },
        getOwnerName: function () {
            window.console.log(owner);
            userDiv.appendChild(h1).innerHTML = "Name: " + owner;
            return owner;
        }
}
return bankMethods;
}




$("name").addEventListener("click", thisPrompt);
$("deposit").addEventListener("click", thisPrompt);
$("withdrawal").addEventListener("click", thisPrompt);
