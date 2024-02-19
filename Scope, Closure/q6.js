let idIncrease = 0;

let person = {
    id: ++idIncrease,
    name: 'origin name',

    getId: function () {
        return this.id
    },
    setId: function (newId) {
        if (typeof newId === 'number') {
            this.id = newId
        } else {
            throw new Error('the id must be a number');
        }
    },

    getName: function () {
        return this.name
    },
    setName: function (newName) {
        this.name = newName
    }
}

person.setName('hoang')
console.log(person.id, person.name);

person.setId(2)
console.log(person.id, person.name);