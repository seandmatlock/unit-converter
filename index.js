/*
1 meter = 3.281 feet
1 foot = 0.304 meters
1 liter = 0.264 gallon
1 gallon = 3.785 liters
1 kilogram = 2.204 pound
1 pound = 0.453 kilograms
*/

let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button-el")

let length = document.getElementById("length-conversion")
let volume = document.getElementById("volume-conversion")
let mass = document.getElementById("mass-conversion")

// Need to refactor this into template literals, but haven't figured it out yet 

function lengthConversion() {
    length.textContent = inputEl.value + " meters = " + (inputEl.value * 3.281).toFixed(3)  + ' feet | ' + inputEl.value + " feet = " + (inputEl.value * 0.304).toFixed(3) + " meters."
} 

function volumeConversion() {
    volume.textContent = inputEl.value + " liters = " + (inputEl.value * 0.264).toFixed(3)  + ' gallons | ' + inputEl.value + " gallons = " + (inputEl.value * 3.785).toFixed(3) + " liters."
} 

function massConversion() {
    mass.textContent = inputEl.value + " kilos = " + (inputEl.value * 2.204).toFixed(3)  + ' pounds | ' + inputEl.value + " pounds = " + (inputEl.value * 0.453).toFixed(3) + " kilos."
} 

buttonEl.addEventListener("click", function() {
    lengthConversion()
    volumeConversion()
    massConversion()
})