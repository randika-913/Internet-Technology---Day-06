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

// let number = 0;
// function plusHeading() {
//     heading.innerText = "Randika"+ (++number);
//     console.log("Clicked");
    
// }function minusHeading() {
//     heading.innerText = "Randika"+ (--number);
//     console.log("Clicked");

// }


// function add(){
//     let num1 = document.getElementById("inputText01");
//     let num2 = document.getElementById("inputText02");

//     let sum = Number(num1.value) + Number(num2.value);

//     console.log(sum);

//     document.getElementById("heading").innerText = "SUM : " + sum;
// }

// function minus(){
//     let num1 = document.getElementById("inputText01");
//     let num2 = document.getElementById("inputText02");

//     let sum = Number(num1.value) - Number(num2.value);

//     console.log(sum);

//     document.getElementById("heading").innerText = "SUM : " + sum;
// }


let customerList = [];

function btnAddCustomerOnAction(){
    let txtName = document.getElementById("txtName").value
    let txtAddress = document.getElementById("txtAddress").value
    let txtAge = document.getElementById("txtAge").value
    let txtEmail = document.getElementById("txtEmail").value
    let txtSalary = document.getElementById("txtSalary").value

    let customer={
        name:txtName,
        address:txtAddress,
        age:txtAge,
        email:txtEmail,
        salary:txtSalary,
    }

    customerList.push(customer);

    console.log(customerList);
}

function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    tblCustomers.innerHTML+=`<tr>
            <td>Saman</td>
            <td>Walana</td>
            <td>15</td>
            <td>saman@email.com</td>
            <td>750000</td>
        </tr>`

    console.log(tblCustomers);
}