const accountId = 144553
let accountEmail = "sanskar@google.com"
var accountPassword = "12345"
accountCity = "udaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "sans.com"
accountPassword = "212121221211"
accountCity = "kanpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])