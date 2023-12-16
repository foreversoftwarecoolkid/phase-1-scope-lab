// global scope
window.customerName = 'bob';

function upperCaseCustomerName() {
 // modify global customerName
 window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
 // set global bestCustomer
 window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
 window.bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'person I dislike';

function changeLeastFavoriteCustomer(newLeastFavorite) {
 leastFavoriteCustomer = newLeastFavorite;
}