// Declare a variable in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare and set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';  // bestCustomer declared globally (not using var, let, or const)
}

// Function to overwrite the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';  // Overwriting the global bestCustomer
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'john';

// Function to attempt changing the leastFavoriteCustomer constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'sally';
}
