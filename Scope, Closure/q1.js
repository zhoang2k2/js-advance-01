var fullName = "hoang in global scope";
console.log(fullName);

function hello() {
    var fullName = "hoang in function scope";
    console.log(fullName);

    function flexicalScope() {
        console.log(fullName, 'becomes flexical scope');
    }
    flexicalScope()
}

hello();