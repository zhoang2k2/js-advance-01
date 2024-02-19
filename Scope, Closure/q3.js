function getGreeting(firstName, lastName) {
    function greeting() {
        return firstName + lastName
    }
    return greeting()
}

let fullName = getGreeting("Hoang", "Nguyen")
console.log(fullName);