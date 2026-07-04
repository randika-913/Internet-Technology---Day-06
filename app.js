// class Customer{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name = name;
//         this.age = age;
//         this.address = address;

//     }

// }

// let Customer1 = new Customer("Sharada",20,"Banglore");
// console.log(Customer1);

// =======================================================

// let Customer2= {
//     name: "John", 
//     age: 25, 
//     address: "New York",
//     salary: 50000,
//     items: [
//         {
//             id: 1,
//             name: "item1",
//             price: 100,
//             variants: [
//                 {
//                     id: 1,
//                     name: "variant1",
//                     price: 10,
//                 },
//                 {
//                     id: 2,
//                     name: "variant2",
//                     price: 20,
//                 }
//             ]
//         },{
//             id: 2,
//             name: "item2",
//             price: 200,
//         },{
//             id: 3,
//             name: "item3",
//             price: 300,
//         }

//             ],
//     father:{
//         name: "Doe",
//         age: 50,
//         address: "New York"
//     }
// };
// console.log(Customer2.name);
// console.log(Customer2.age);
// console.log(Customer2.address);
// console.log(Customer2.salary);

// console.log(Customer2.items[0]);
// console.log(Customer2.father.name);

// console.log(Customer2.items[0].variants[1]);



// DOM(Document Object Model)----------------------------------------------------------------------------


// document.write("<h2>Hello world 02 </h2>");

// let heading = document.getElementById("heading");
// console.log(heading);

// heading.innerText = "Randika";

let number = 0;
function changeHeading() {
    heading.innerText = "Randika"+number++;
    console.log("Clicked");
    
}

