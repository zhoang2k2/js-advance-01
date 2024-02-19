function renderNums(i) {
    setTimeout(function renderNums() {
        console.log(i);
    }, 1000);
}

for (let i = 1; i <= 6; i++) {
    renderNums(i)
}