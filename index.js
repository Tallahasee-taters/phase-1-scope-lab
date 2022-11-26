var customerName = 'bob'
function upperCaseCustomerName(){
    window.customerName = 'BOB'
}
function setBestCustomer(){
    window.bestCustomer = 'not bob' 
}
function overwriteBestCustomer(){
    window.bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer(){
    throw ('Assignment to constant variable.')
}