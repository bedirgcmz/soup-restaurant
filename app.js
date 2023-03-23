 /*       
        Program Akis Adimlari
1-Degiskenlerin tanimlanmasi
2-Guncel diziyi sayfaya ve consola aktaran fonksiyonun yazilmasi
3-Dizideki hayvan sayisini hesaplayn fonksiyonun yazilmasi
4-Hesaplanmis hayvan sayisinin ekrana yazdiracak fonksiyonun yazilmasi
5-Click islemlerinin yapilmasi
6-Fonksiyonlarin cagrilmasi
*/
/**
 * Variables
 */
const paragraph = document.getElementById("paraf");
const sheep = document.getElementById("sheep-number");
const cow = document.getElementById("cow-number");
const pig = document.getElementById("pig-number");
const chicken = document.getElementById("chicken-number");
const chickenUp = document.getElementById("chicken-up");
const sheepUp = document.getElementById("sheep-up");
const cowUp = document.getElementById("cow-up");
const pigUp = document.getElementById("pig-up");
const chickenDown = document.getElementById("chicken-down");
const sheepDown = document.getElementById("sheep-down");
const cowDown = document.getElementById("cow-down");
const pigDown = document.getElementById("pig-down");
let chickenUpdate = 0; 
let sheepUpdate = 0;
let cowUpdate = 0;
let pigUpdate = 0;
let UpperCase;
/**
 * Animals list
 */
let animalList =  ["aaa", "cow", "cow", "sheep", "chicken", "pig", "cow", "chicken", "pig", "sheep", "chicken", "cow"];
/**
 * Events for plus button
 */
sheepUp.addEventListener("click", function(){
    animalList.push("sheep")
    upDateUp();
    animalNumberCalculate()
    animalNumbershow()
});
cowUp.addEventListener("click", function(){
    animalList.push("cow")
    upDateUp();
    animalNumberCalculate()
    animalNumbershow()
});
pigUp.addEventListener("click", function(){
    animalList.push("pig")
    upDateUp();
    animalNumberCalculate()
    animalNumbershow()
});
chickenUp.addEventListener("click", function(){
    animalList.push("chicken")
    upDateUp();
    animalNumberCalculate()
    animalNumbershow()
});
/**
 * Events for remove button
 */
chickenDown.addEventListener("click", function(){
    let itemIndex = animalList.findIndex(item => item === "chicken")
        if(itemIndex !== -1){
            animalList.splice(itemIndex,1)            
        }
    animalNumberCalculate()
    animalNumbershow()
    upDateDown()
});
cowDown.addEventListener("click", function(){
    let itemIndex = animalList.findIndex(item => item === "cow")
        if(itemIndex !== -1){
            animalList.splice(itemIndex,1)            
        }
    animalNumberCalculate()
    animalNumbershow()
    upDateDown()
});
sheepDown.addEventListener("click", function(){
    let itemIndex = animalList.findIndex(item => item === "sheep")
        if(itemIndex !== -1){
            animalList.splice(itemIndex,1)            
        }
    animalNumberCalculate()
    animalNumbershow()
    upDateDown()
});
pigDown.addEventListener("click", function(){
    let itemIndex = animalList.findIndex(item => item === "pig")
        if(itemIndex !== -1){
            animalList.splice(itemIndex,1)            
        }
    animalNumberCalculate()
    animalNumbershow()
    upDateDown()
});
/**
 * Transactions function for plus animal
 */
function upDateUp (){
    let usedLeg = 0;
    /**
     * Changing the string to uppercase for a safe result
     */
    UpperCase = animalList.map(item => item.toUpperCase());
    /**
     * Program to find the number of legs available
     */
    UpperCase.map(item => {
        if(item == "COW"){
            usedLeg += 4
        }else if(item == "SHEEP"){
            usedLeg += 4
        }else if(item == "CHICKEN"){
            usedLeg += 2
        }
    });
    /**
     * Printing the number of usable legs on the page
     */
    paragraph.innerHTML = `Number of usable legs in our farm <span id="used-leg" class="text-white h3">${usedLeg}<span>`
    /**
     * Printing the number of usable legs on the console
     */
    console.log("Animals in farm: \n" + UpperCase)
    console.log("Number of usable legs in our farm: " + usedLeg);
}
/**
 * Transactions function for remove animal
 */
function upDateDown (){
    let usedLegNew = 0
    /**
     * Changing the string to uppercase for a safe result
     */
    let UpperCase = animalList.map(item => item.toUpperCase());
    /**
     * Program to find the number of legs available
     */
    UpperCase.map(item => {
        if(item == "COW"){
            usedLegNew += 4
        }else if(item == "SHEEP"){
            usedLegNew += 4
        }else if(item == "CHICKEN"){
            usedLegNew += 2
        }
    });
    /**
     * Printing the number of usable legs on the page
     */
    document.getElementById("used-leg").innerHTML = usedLegNew
    /**
     * Printing the number of usable legs on the console
     */
    console.log("Animals in farm: \n" + UpperCase)
    console.log("Number of usable legs in our farm: " + usedLegNew);
}
/**
 * Function that calculates the number of animals
 */
function animalNumberCalculate(){
    chickenUpdate = 0; sheepUpdate = 0;
    cowUpdate = 0; pigUpdate = 0;
    animalList.map(item => {
        if(item == "cow"){
            cowUpdate++
        }else if(item == "sheep"){
            sheepUpdate++
        }else if(item == "chicken"){
            chickenUpdate++
        }else if(item == "pig"){
            pigUpdate++
        }
    })
}
/**
 * Function displaying the number of animals
 */
function animalNumbershow(){
    chicken.innerHTML = chickenUpdate;
    sheep.innerHTML = sheepUpdate;
    cow.innerHTML = cowUpdate;
    pig.innerHTML = pigUpdate;
}
/**
 * Call function
 */
upDateUp();
animalNumberCalculate()
animalNumbershow()