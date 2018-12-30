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
return names[0]+ ', ' + names[1]+' and '+names.splice(2).length + ' others like this'
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
