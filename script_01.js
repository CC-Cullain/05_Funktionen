"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test(){
    console.log("Hallo Karsten!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() 
{
    // what happens in VEGAS ...
    let firstName = "Sven";    
    console.log("Hallo " + firstName + "!"); 

}

// console.log(firstName); // Fehler: Scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

ausgabeNamenParam("Asad"); // call + Argument(e)
ausgabeNamenParam("Roxana");
ausgabeNamenParam("Sven");
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) { // Parameter
    console.log("Hallo " + firstName + "!"); 
}

