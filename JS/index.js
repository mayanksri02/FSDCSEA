// console.log("hello");
// var a=12;
// console.log("a="+a);
// if (a>10){
//     let a=30
//     console.log("hiii",a);
// }
// console.log("hoiii",a);

// let sim = Symbol("qjiwqjdiow000");
// console.log(typeof sim);
// let today=Date();
// console.log(today);
// console.log(typeof today);

// let a="12"
// let b=12
// if (a==b){
//     console.log("value equal");
// }
// if (a===b){
//     console.log("data type equal");
// }
// else{
//     console.log("not equal");
// }

// function hi(str){
//     console.log("hello "+str);
// }
// hi("jlllllll");
// let d=function hi(str){
//     console.log("hello "+str);
// }
// d();
// function sum(a,b){
//     return a+b;
// }
// let total=sum(24,27);
// console.log(total)


// function selectlang(lang){
//     function ccomp(){
//         return "c compiler selected";
//     }
//     function javacomp(){
//         return "java compiler selected";
//     }
//     if (lang=="C"){
//         return ccomp();
//     }
//     else{
//         return javacomp();
//     }
// }
// console.log(selectlang("java"))

// console.log(selectlang())

// console.log("Hello JS")
// console.dir(document)
let parent=document.getElementsByClassName("parent");
// console.log(parent)
// parent[0].innerText="ABES";
// parent[0].innerHTML="<h2>ABES</h2>";
// const h1=document.createElement("h1")

// h1.innerText="ELEMENT US CREATED BY DOM";
// parent[0].appendChild(h1);
// h1.style.background="yellow";
// h1.style.color="blue";

// const img=document.createElement('img');
// img.src='../cat.jpg'
// img.setAttribute("height","200px")
// console.log(img);
// parent[0].appendChild(img);
// const button=document.getElementById("btn");
// const display=document.getElementById("disp");
// getData=()=> {
//     console.log("calling getdata fn");
//     display.innerHTML="<h3>Welcome to CSE</h3>"
// }


// button.addEventListener("click",() => {
//     getData();
// })

// const promise1=new Promise(
//     (resolve,reject)=> {
//         let a=Math.random()*200;
//         console.log(a);
        
//         if(a>=100 && a<=200){
//             resolve(`number is ${a} value is between 100 and 200`);
//         }else{
//             reject(`number is ${a} value is not between 100 and 200`);
//         }
//     }
// );

// promise1.then((msg)=>{console.log(msg);})
// .catch(error=> {console.log("error")})
// .finally(msg=>{console.log("All resources have been closed");});


// const promise2=new Promise(
//     (resolve,reject)=> {
//         resolve({name:"mayank",branch:"CSE"})
//     }
// );
// promise2.then((data)=>{console.log(data.name)})
// .catch(error=> {console.log(error)})


const response=fetch("https://dummyjson.com/products")
response.then(data=> {
    console.log(data);
    data.json().then(res=>{
        // console.log(res.products[0].title+ "  "+ res.products[0].id)
        // const myData=res.products[0].title+ "  "+ res.products[0].id;
        // console.log(res);
        res.products.map((title)=> (
            console.log(title)
            
            // parent[0].innerHTML=`<h2> ${title} </h2>`

        ))
        
    })

})