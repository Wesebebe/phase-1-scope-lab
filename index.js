var customerName = 'bob'
const leastFavoriteCustomer = "paul"
var bestCustomer;

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer ="oto";
    return leastFavoriteCustomer;
}