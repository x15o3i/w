let raceNumber = Math.floor(Math.random() * 1000);
let early = true
let age = 12

if (early && age > 18){
  raceNumber += 1000
} 
if (early && age > 18){
  console.log(`Race is by 9:30, your race number is: ${raceNumber}.`)
} else if(!early && age > 18){
  console.log(`Race is by 11:30, your race number is ${raceNumber}`)
}
else if (age < 18){
  console.log(`Race is by 12:30, your race number is: ${raceNumber}`)
}
else{
  console.log('Go to the registration desk')
}


