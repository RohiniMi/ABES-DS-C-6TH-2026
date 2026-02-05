fetch("https://fakestoreapi.com/products")
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((error)=>console.log("unable to fetch data"))
.finally(()=>console.log("final"))

// const getData = async () => {
//     try {
//         const data = await fetch("https://fakestoreapi.com/produc");
//         console.log(await data.json());
//     } catch (error) {
//      console.log("Unable to get Data...");
     
//     }
// }
// getData();





// const mypromise = new Promise((resolve, reject) => {
//     let age = 18;
//     if (age > 18) {
//         resolve("eligible for vote")
//     } else {
//         reject("Not eligible.")
//     }
// })
// const f1 = async () => {
//     try {
//         const msg = await mypromise;
//         console.log(msg);
//     } catch (error) {
//         console.log("some error occured...");
//     }
// }
// f1();
// mypromise.then((msg) => console.log(msg))
//     .catch((error) => console.log("Error Occured", error));

