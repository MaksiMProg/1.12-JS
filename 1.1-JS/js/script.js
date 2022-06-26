//1)Создать функцию-конструктор Person, которая будет содержать в себе имя, id, возраст, а также создать прототип для этой функции-конструктора - метод, который будет выводить в консоль сообщение Hello from prototype

function Person(name, id, age) {

}
Person.prototype.helloWorld = function() {
    alert('Hello from prototype');
}


//2)Создать 3 объекта самостоятельно. Сделать цепочку прототипов (объект должен наследоваться от предыдущего)

let programmer = {
    highskill: true,

    isReal() {
        console.log("Real");
    }
};

let dancer = {
    highskill: false,
    isReal() {
        console.log("no!");
    },
    __proto__: programmer,
};

let singer = {
    __proto__: dancer,
};

console.log(singer.isReal());
console.log(dancer.isReal());
console.log(programmer.isReal());

//3)Создать объект с помощью Object.create, а также задать для этого объекта прототип и после чего вывести его в консоль (используя специальный метод)

let obj = Object.create(Animal.prototype);