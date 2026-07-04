class Customer{
    name;
    age;
    address;

    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;

    }

}

let Customer1 = new Customer("Sharada",20,"Banglore");
console.log(Customer1);

// =======================================================

let Customer2= {
    name: "John",
    age: 25,
    address: "New York"
};
console.log(Customer2);