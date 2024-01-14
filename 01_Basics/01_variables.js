const accountId = 14453

let accountEmail = "kcshenoy2000@gmail.com"

var accountPassword = "12345"

accountCity = "Jaipur" 

let accountState //JS stores an unassigned variable as undefined type

// accountId = 5 // causes error as a const type cannot be changed

accountEmail = "kcshe@gmail.com"

accountPassword = "14563"

accountCity = "Bengaluru"

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    Prefer not to use var to declare variables in JS
    As it causes issues in the block and functional scope
*/