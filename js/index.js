// create the input box

const createBox = document.getElementById('create-monster')


const form = document.createElement('form')


createBox.appendChild(form)
console.log(form)

const nameInput = document.createElement('input')
nameInput.setAttribute('id', 'name')
nameInput.setAttribute('placeholder', "name...")

const ageInput = document.createElement('input')
ageInput.setAttribute('id', 'age')
ageInput.setAttribute('placeholder', "age...")

const descripInput = document.createElement('input')
descripInput.setAttribute('id', 'description')
descripInput.setAttribute('placeholder', "description...")

const createButton = document.createElement('button')
createButton.textContent = "Create"

form.appendChild(nameInput)
form.appendChild(ageInput)
form.appendChild(descripInput)
form.appendChild(createButton)

const name = document.getElementById('name')
const age = document.getElementById('age')
const description = document.getElementById('description')


let monsterList;
const monsterContainer = document.getElementById('monster-container')

// create the function to add the object to the json

form.addEventListener("submit", (event) => {
    event.preventDefault()

fetch('http://localhost:3000/monsters')
.then(res => res.json())
.then(data => {
    console.log(data)

    monsterList = data

    let newMonsterObj = {

        "name": event.target.name.value,
        "age": event.target.age.value,
        "description": event.target.description.value
      
       
    }
    const addObject = () => {
          fetch("http://localhost:3000/monsters", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body:JSON.stringify(newMonsterObj),
        });
      };
    

addObject()

}) })

// create a fetch request to the monsters json


document.addEventListener("DOMContentLoaded", (e) => {
    console.log("The DOM content has been loaded!")
    fetch('http://localhost:3000/monsters/')
.then(res => res.json())
.then(data => {
    
    
   let monsterList = data
   

   const firstMonsters = monsterList.filter(firstFifty)
   console.log(firstMonsters)

   function firstFifty(monsters){
    if (monsters.id <= 50){
        return monsters
    }
   }




   function mkMonsterCard(results){

    

    const nameTag = document.createElement('h2')
    nameTag.textContent= results.name
    const ageTag = document.createElement('h4')
    ageTag.textContent= `Age: ${results.age}`
    const descTag = document.createElement('p')
    descTag.textContent= `Bio: ${results.description}`

    monsterContainer.appendChild(nameTag)
    monsterContainer.appendChild(ageTag)
    monsterContainer.appendChild(descTag)
    

   }

   
   firstMonsters.forEach((monster) => {


    mkMonsterCard(monster)
   })

   const fwdButton = document.getElementById('forward')
   const backButton = document.getElementById('back')
   
   fwdButton.addEventListener("click", (event) => {
   
    console.log("monsterContainer", monsterContainer)

    console.log('MC children', monsterContainer.childNodes)

    let children = monsterContainer.childNodes

    for( let i =0; i<= children.length; i++){
        children[i].remove()
    }

    // HAVING A LITTLE TROUBLE FIGURING OUT HOW TO REMOVE STARTING
    // MONSTER LIST

       function fwdChecker(monster){
           if ( 51 < monster.id < 100){
               return monster
           }
       }

      const nextMonsters = monsterList.filter(fwdChecker)

      nextMonsters.forEach((monster) => {

        mkMonsterCard(monster)
      })

   
   })
   // make an even listener for them
   
   fwdButton.addEventListener("click", (event) => {
   
   })



})})
// create a function to make the monster objects on the dom
// put a foreach function in the fetch request

// grab the front and back buttons


// create the fetch function and load the different data for them