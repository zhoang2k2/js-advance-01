function factory(a) {
    function square() {
        let result = a * a
        console.log(result);

        function squareRoot() {
            console.log(result / 2);
        }
        squareRoot()
    }
    square()
}

factory(4)