const object1 = {
    name: 'Boris',
    weight: 15
};

const object2 = {
    name: 'Boris',
    weight: 15
};

const object3 = {
    name: 'Rex',
    weight: 20,
};

// Реализуйте функцию isEquivalent
function isEquivalent(object1, object2) {
    let first_array = [];
    let second_array = [];

    for (let i in object1) {
        first_array.push(object1[i]);
    }

    for (let i in object2) {
        second_array.push(object2[i]);
    }

    if (first_array.length !== second_array.length) return false;

    for (let i in first_array) {
        if(first_array[i] !== second_array[i]) return false
    }

    return true
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false