// let a=6;
// let b=7;


// let result = a++ + b++ + ++a - ++b - ++a * a + b + a-- + --b *a;
// //           6+7+7+-8-9*9+9+8-8*8
// //             2-81+18+64
// //                -69+82
// //                   13

//Q2,
let name2 =prompt("Enter your name");
let math= +prompt("enter your number");
let eng= +prompt("enter your number");
let urdu=+prompt("enter your number");
let science=+prompt("enter your number");
let pakstudies= +prompt("enter your number");

let total=math+eng+urdu+science+pakstudies
let percentage=(total/500)*100
console.log(percentage)
 if(percentage>=90 && percentage<=100){
    console.log(name2+" your percentage is "+percentage+"%"+"\n"+"your grade is a1")
 }
else if(percentage >=80 && percentage<=89 ){
    console.log(name2+" your percentage is "+percentage+"%"+"\n"+"your grade is A")
}
else if(percentage >=70 && percentage<=79 ){
    console.log(name2+" your percentage is "+percentage+"%"+"\n"+"your grade is B")
}
else if(percentage>=60 & percentage<=69){
    console.log(name2+" your percentage is "+percentage+"%"+"\n"+"your grade is C")
}
else{
    console.log("hello ")
}