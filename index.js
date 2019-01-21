//find the element which does not fit the pattern(even,odd)
var arr = [1,1,3,5,8,7]
var binarySearch = []

  for(var i = 0; i< arr.length; i++){
    if(arr[i] % 2 == 0){
      binarySearch.push(0)
  } else{
      binarySearch.push(1)
  }
}

var result = ''
 let sortedArr = binarySearch.sort(function(a, b){return a - b})
 if(sortedArr[1] == 0){
    result = "odd"
 } else {
  result = "even"
 }
 for(var i = 0; i< arr.length; i++){
   if(result == "odd" && arr[i] % 2 != 0){
    console.log(arr.indexOf(arr[i]) + 1)
  }
  else if(result == "even" && arr[i] % 2 == 0){
    console.log(arr.indexOf(arr[i]) + 1)
 }
 }
 //-------------------String to camelcase and combined------------------------------------
let str = "The-stealth-warrior" //Output: TheStealthWarrior
let capitalizedArr = []
 function toCamelCase(str){
 if(str.includes('-')==true){
   console.log(str.split('-'))
 let arr = str.split('-')
 capitalizedArr.push(arr[0])
 for(var i=1;i<arr.length;i++){
   capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
 }

 console.log(capitalizedArr.join(''))
} else if(str.includes('_')==true){
let arr = str.split('_')
capitalizedArr.push(arr[0])
for(var i=1;i<arr.length;i++){
  capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}

console.log(capitalizedArr.join(''))
}
}
toCamelCase(str)
//-------------------Equal sum of each side of an index-----------------------------------------------------
let array = [1,2,3,4,3,2,1] //Outcome: 3.index and number is 4.
let result1;
function findEvenIndex(array){
  for(var i=0;i<array.length;i++){
    let leftarray = array.slice(0,i)
    let rigtharray = array.slice(i+1)
    let leftSum= leftarray.reduce((a,b)=> a+b,0)
    let rigthSum= rigtharray.reduce((a,b)=> a+b,0)
    if(leftSum==rigthSum){
       result1 = i
    }
  }
  return result1
}
findEvenIndex(array)
//-----------------------Remove smallest number in an array, get smallest index if there are more than 1---------------------------------------
let arry = [6,2,3,2,4,5]

let min = Math.min(...arry)
let index=[1]

for(var i = 0; i<arry.length;i++){
  if(arry[i]==min && index.length==0){
    index.push(arry.indexOf(arry[i]))
  }
}
let newArry = arry.slice(0,index[0]).concat(arry.slice(index[0]+1))
console.log(newArry)
//-----------------------------Palindrome----------------------------
let string = "emre"
function isPalindrome(string){
let stringarr = string.toLowerCase().split('')
let reversedstringarr = stringarr.reverse()
let reversedstring=reversedstringarr.join('')
if(string == reversedstring){
  return true
} else{
  return false
}
}
console.log(isPalindrome(string))
//--------------------------------FizzBuzz---------------------------
function isFizzBuzz(number){
  if(number % 15 ==0){
    return 'fizzbuzz'
  }else if(number % 5 ==0){
    return 'fizz'
  } else if(number % 3 == 0){
    return 'buzz'
  } else {
    return 'neither'
  }

}
console.log(isFizzBuzz(32))
//-------------------------------------------------------

function orderString(string){
  let orderedarr = []
  let arr = string.split(' ')
  console.log(arr)
  for(var i = 1;i<10;i++){
    arr.forEach(function(each){
        if(each.includes(i)){
           orderedarr.push(each)
        }
    })
  }
  console.log(orderedarr.join(' '))
   return orderedarr.join(' ')
}
orderString("4of Fo1r pe6ople g3ood th5e the2")
//------------------------------------------------
let friends = ["Ryan", ,"Mark","Jimmy", "123", "4", "Cool Man"]
function pickMyFriends(arr){
  let filteredarr= arr.filter((each)=>{
     if(each.length==4 && isNaN(each)==true){
       return each
     }

  })
  console.log(filteredarr)
  return filteredarr
}
pickMyFriends(friends)
//----------------------odd number triangle  / sum of any row -----------------------------
function rowSumOddNumbers(rowNo){

let counter = (rowNo-1)*2
let counter2 = []
for(var i=1;i<rowNo;i++){
counter2.push(counter)
counter = counter -2

console.log(counter2)

}
let firstnoinrow = counter2.reduce((a,b)=>a+b,0)+1
console.log(firstnoinrow)

let arr = []

for(var i=1;i<rowNo+1;i++){

arr.push(firstnoinrow)
firstnoinrow += 2
}
console.log(arr)
console.log(arr.reduce((a,b)=>a+b,0))
return arr.reduce((a,b)=>a+b,0)
}
rowSumOddNumbers(5)
//--------------------------------------------
//likes [] // must be "no one likes this"
//likes ["Peter"] // must be "Peter likes this"
//likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
//likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
//likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
function likes(names) {
 if(names.length == 0){
 return 'no one likes this'} else if(names.length == 1){
 return names[0] + ' likes this'
 } else if(names.length == 2){return names[0] + ' and '+ names[1]+' like this'}
 else if(names.length == 3){
 return names[0] + ', '+ names[1]+' and '+names[2]+ ' like this'
 } else{
return names[0]+ ', ' + names[1]+' and '+names.slice(2).length + ' others like this'
 }
}
//------------------------------------
//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

//list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

//list([ {name: 'Bart'} ])
// returns 'Bart'

//list([])
// returns ''
function list(names){
    if(names.length==1){return names[0].name} else if(names.length==0){return ''}
   let namesarray = names.slice(0,names.length-1).map((each)=>{return each.name})
  return namesarray.slice(0,names.length-1).join(', ') +' & ' +names[names.length-1].name
}
//-----------------------------------
//Given an array, find the int that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.
function findOdd(A) {
 let arr = []
 for(var j =0;j<A.length;j++){
   arr= []
   arr.push(A[j])
 for(var i=0;i<A.length;i++){
   if(arr.includes(A[i])==true){
   arr.push(A[i])}


 }

 if(arr.length % 2 ==0){
   console.log(A[j])
   return A[j]
 }
}
}
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
//---------------------------------------------------------
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function DNAStrand(dna){
  let corresponding = ""
  for(var i = 0;i<dna.length;i++){
   if(dna[i]=='A'){corresponding+='T'}
   else if(dna[i]=='T'){corresponding+='A'}
   else if(dna[i]=='G'){corresponding+='C'}
   else if(dna[i]=='C'){corresponding+='G'}
  }
  return corresponding
}
//-----------------------------------------------------------
//adding last 3 numbers in sequence given n times and adding them at the end of the array

function tribonacci(signature,n){
 if(n<3){return signature.slice(n-1,n)}
  let count = 0
  for(var j =1;j<n-2;j++){
     count=0
 for(var i=signature.length-1;i>signature.length-4;i--){
    count+=signature[i]
 }
 signature.push(count)
 }
 return signature
}
tribonacci([1,0,0],10)//[1,0,0,1,1,2,4,7,13,24]
//---------------------------------------------------
//Let P be the Principal = 1000.00
//  Let I be the Interest Rate = 0.05
//  Let T be the Tax Rate = 0.18
//  Let D be the Desired Sum = 1100.00


//After 1st Year -->
//  P = 1041.00
//After 2nd Year -->
//  P = 1083.86
//After 3rd Year -->
//  P = 1128.30

let years =0
function calculateYears(principal, interest, tax, desired) {
if(principal==desired){return 0}

   let sum=principal
   let taxamount=sum*interest*tax
   sum=sum+(sum*interest)-taxamount
  years++
   if(sum<desired){return calculateYears(sum,interest,tax,desired)}
   else{ return years}
}
calculateYears(1000,0.01625,0.18,1200)
//-------------------------------------
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
//
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.
var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
function printerError(s) {
    let errorArr= s.match(/[n-z]/g)
    console.log(errorArr)
    return errorArr.length+'/'+s.length
}
printerError(s)
//---------------------------------------------------------------------
// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!
//
// Examples:
//
// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:
function encrypt(text, n) {
  let newString=''
  if(n<=0){return text}

  for(var i=1;i<text.length;i+=2){
    newString +=text[i]
  }
  for(var j=0;j<text.length;j+=2){
    newString +=text[j]
  }
  if(n>0){return encrypt(newString,n-1)}
  return newString
}
//--------------------------check if number is prime-------------------------------------

function isPrime(num) {
  if(num<2){return num + ' is not prime'}
  else if(num==2){return num + ' is prime'}
  for(var i =2;i<num;i++){
   if(num % i==0){return num + ' is not prime'}
   else {return num + ' is prime'}
}
}
console.log(isPrime(-5))
//---------------------------------------------------------
// -----------------  frontTimes  ------------------
// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

// frontTimes("Chocolate", 2) → "ChoCho"
// frontTimes("Chocolate", 3) → "ChoChoCho"
// frontTimes("Abc", 3) → "AbcAbcAbc"

public String frontTimes(String str, int n) {
  int frontLen = 3;
  if (frontLen > str.length()) {
    frontLen = str.length();
  }
  String front = str.substring(0, frontLen);

  String result = "";
  for (int i=0; i<n; i++) {
    result = result + front;
  }
  return result;
}
