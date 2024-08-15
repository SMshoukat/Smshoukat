// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// it is simple way of if and else 

// let chips = "lays";

// let whatWeGet = chips == "vavy" ? "bingo" : "loser";

// console.log(whatWeGet);

// let num = prompt("enter a number");

// if(num % 5 === 0){
//     console.log(num, "is mul of 5");
// }
// else {
//     console.log(num, "is NOT mul of 5");
// }

// let result = prompt("give your percentage");
// let grade = "A", grade1 = "B" , grade2 = "C" , grade3 = "D" , grade4 = "F"

// if(result >= 90 && result <= 100){
//     console.log(grade);
// }
// else if(result >= 70 && result <= 89){
//     console.log(grade1);

// }
// else if(result >= 60 && result <= 69){
//     console.log(grade2);

// }
// else if(result >= 50 && result <= 59){
//     console.log(grade3);

// }
// else if(result >= 0 && result <= 49){
//     console.log(grade4);
// }
// else {
//     console.log("NOT VALID")
// }
// print 1 to 5
// for(let count = 1; count <= 10; count++){
//     console.log("shahbawa");

// }
// let sum = 0;
// for(let n = 1; n <= 10 ; n++){
//     sum = sum + n;
// }
// console.log(" sum = ", sum);

// var batch = prompt("enter your coarse")
// var age = +prompt("enter your age")
// var city = prompt("enter your city")

// if(age <= 18){
//    console.log("eligible");
//    if(batch == "mobile"){
// console.log("you can apply");
//             if(city == "karachi"){
//                 console.log("you have been selected for tests");
//             }
//             else{
//                 console.log("not avaible for any other city rather than karachi");
//             }
//    }
//    else{
//     console.log("not available");
//    }
// }
// else {
//     console.log("not eligible");
// }

// learn to make array
// var city0 = "karachi";
// var city1 = "lahore";
// var city2 = "multan";
// var city3 = "peshawer";
// var city4 = "hydrabad";

// its array 
// var cities = ["karachi","lahore","multan","peshawer","hydrabad"];
// alert(cities[0]);

// 8 array method

// 1st method of array POP
// var cities = ["karachi","lahore","multan","peshawer","hydrabad"];
// cities.pop();
// alert(cities);

// 2st method of array PUSH
// var cities = ["karachi","lahore","multan","peshawer","hydrabad"];
// cities.push("bhawalpur","kashmir");
// alert(cities);

// 3st method of array SLICE
// var cities = ["karachi","lahore","multan","peshawer","hydrabad"];
// cities.slice(3, 4);
// alert(cities);

// var studentName = prompt("enter your name");
// var eng = +prompt("enter your eng marks");
// var math = +prompt("enter your math marks");
// var urdu = +prompt("enter your urdu marks");
// var cs = +prompt("enter your cs marks");
// var total = eng + math + urdu + cs;
// var per = total / 400 * 100;
// var grade;
// if (per >= 80){
//     grade = "A+"
// }
// else if (per >= 70){
//     grade = "A"
// }
// else if (per >= 60){
//     grade = "B"
// }
// else if (per >= 50){
//     grade = "C"
// }
// else if (per <= 40){
//     grade = "FAIL"
// }
// else {
//     grade = ("chal nikal")
// }

// document.write(`

// <table border="1px"> 
// <tr> 
//  <th>Student Name</th>
//  <th>eng</th>
//  <th>math</th>
//  <th>urdu</th>
//  <th>cs</th>
//  <th>total</th>
//  <th>per</th>
//  <th>grade</th>
// </tr>

// <tr>
// <td>${studentName}</td>
// <td>${eng}</td>
// <td>${math}</td>
// <td>${urdu}</td>
// <td>${cs}</td>
// <td>${total}</td>
// <td>${per}</td>
// <td>${grade}</td>
// </tr>
// </table>


// var cars = ["Mehran" ,"Alto", "Fx", "Audi", "Daala","Civic"];
// var user = prompt("enter any car");
// var fisrtalpha = user.slice(0 ,1).toUpperCase();
// var lowalpha = user.slice(1).toLowerCase();
// var res = fisrtalpha + lowalpha;

// for(var i = 0; i < cars.length; i++){
// if (res == cars[i]){
//     match = true
//     document.write(`${res} found`)
//     break
//     }
// }

// if(!match){
//     document.write(`${res} not found`)
// }


// var myArr = ["foo","bar","baz"]
// myArr.length = 0
// myArr.push("bin")
// console.log(myArr);

// var cars = ["Mehran" ,"Alto", "Fx", "Audi", "Daala","Civic"];
// var prom = prompt("what car you want");
// var fisrtAlpha = prom.slice(0 , 1).toUpperCase()
// var remAlpha = prom.slice(1).toLowerCase()
// var check = fisrtAlpha + remAlpha; 
// var numlist = cars.length;
// var match = false ;
 
// for(var i = 0; i < numlist; i++){
//     if(check == cars[i]){
//         match = true;
//      alert(`${cars[i]} found`)
//         break
        
//     }
// }
// if(!match){
//     alert(`${check} not found`)
// }

// var arr1 = ["usmna" , "amjad" , "rayan" , "shayan" , "aman" ,"noman"]
// var arr2 = ["khatri" , "chaudry" , "afghan"];


// for(var i = 0; i < arr1.length; i++){
//     for(var j = 0; j < arr2.length; j++){
//      document.write(arr1[i] + " " +arr2[j] +"<br>");
//     }
// }


// for(var i = 1; i <= 100; i = i + 10){
//  for(j = i; j < i + 18; j++){
//     document.write(j + " ")

//  }
//  document.write("<br>") 
// }
// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 3; j++){
//         document.write(j )
//     }
// }

// for(let i = 0; i < 5; i++){
//     for(let j = 0; j < 3; j++){
//         document.write(j )
//     }
// }

// for(var i = 1; i <= 5; i++ ){
//     for(var j = 1; j < i + 1 ; j++){
//       document.write(j + " ")
//     }
//    document.write("<br>")
// }   

// for(var i = 5; i >= 1; i--){
//     for(var j = 5; j >= i; j--){
//    document.write(j)

//     }
//    document.write("<br>")

// }
 

// for(var i = 1;i <= 5;i++){
//     for(var j = 5; j >= i; j--){
//    document.write(j)
//  }
//    document.write("<br>")
    
// }


// for(var i = 5; i >= 1;i--){
//     for(var j = 1; j <= i; j++){
//    document.write(j)

//     }
//    document.write("<br>")

// }

// var cars = ["Mehran" ,"Alto", "Fx", "Audi", "Daala","Civic"];
// var prom = prompt("what car you want");
// var fisrtAlpha = prom.slice(0 , 1).toUpperCase();
// var lastAlpha = prom.slice(1).toLowerCase();
// var final = fisrtAlpha + lastAlpha;
// var flag = false;

// for(var i = 0; i < cars.length;i++){
//     if(final == cars[i]){
//         flag = true
//         alert(`${cars[i]} Founded`)
//         break
//     }
// }
// if(!flag){
//     alert( `${final} NOT Founded`)
// }

// for(var i = 1; i < 6;i++ ){
//     for(var j = 1;j <= i; j++){
//    document.write(j)
        
//     }
//    document.write("<br>")

// }

// for(var i = 5; i >= 1;i-- ){
//     for(var j = 5;j >= i; j--){
//    document.write(j)
        
//     }
//    document.write("<br>")

// }

// for(var i = 1; i <= 5;i++ ){
//     for(var j = 5;j >= i; j--){
//    document.write(j)
        
//     }
//    document.write("<br>")

// }   


// do values aik hi jagah pr gayab ho to 
// array ke andr index  plus ya minus hota he or array ka bahr value plus minus hoti he   
// i me index vaklue store hoti hai
                                            //  i = 1 (index value)
// var arr = [51,52,55,60];
// for (var i = 0; i < arr.length;i++){
//     var diff = arr[i + 1] - arr[i];
//     if(diff > 1){
//         for(var j = 1;j < diff;j++){
//             console.log(arr[i] + j )
//         }
//     }
// }
    
// array k under index valu e di jaati hai .
// do values alg alg jagah pr gayab ho to 
// var arr = [50,51,52,53,55];
// for (var i = 0; i < arr.length; i++){
//     if(arr[i + 1] - arr [i] === 2){
//             console.log(arr[i] + 1)
//     }
// }


// var arr = [11,13,14,15,20]
// for(var i = 0; i < arr.length;i++){
//     if(arr[i + 1] - arr[i] > 1){
//         var diff = arr[i + 1] - arr[i];
//         for(var j = 1; j < diff;j++){
//         arr.splice(i + j,0,arr[i] + j)
        
      
//        }
//     }
// }
// console.log(arr)

// var str = "anwer ali shah"
// var result = ''
// var capital = true

// for(var i = 0;i < str.length;i++){
//     var char = str[i]
//     if(capital){
//         char = char.toUpperCase();
//         capital = false
//     }
//     if(char === ' '){
//         capital = true
//     }
//     result += char;
// }
// console.log(result);

// var text = "adnan is very good boy noman noman noman yes noman brother noman noman";
// var Word = "noman"
// var rep = "shoukat";
// var count = 0
// for(var i = 0;i < text.length;i++){ 
// if(text.slice(i,i + 5) == Word){
//     count++
//     if(count === 3 ){
//         text = text.slice(0 , i) + rep + text.slice(i + 5)
//     }
//   }
// }
// console.log(text)


// var arr = [11,12,15,17,20];
// var final = [];
// for(var i = 0; i < arr.length;i++){
//     if(arr[i + 1] - arr[i] > 1){
//         for(var j = 1;j < arr[i + 1] - arr[i];j++){
//         console.log(arr[i] + j)

//         }
//     }
// }