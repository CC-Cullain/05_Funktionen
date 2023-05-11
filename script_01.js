"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)

// test();

// Funktionsrumpf (body) | callee
// Funktionsdeclaration

function test() {

    console.log("Hallo wer auch immer");

}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();



// function ausgabeNamen() {
    
//     console.log("Hallo wer auch immer");

//     let vorName = prompt("Wie heißt du?"); 
//     // prompt der nur mit entsprechender Anfrage über ausgabeName getriggert wird

//     console.log("Hallo " + vorName);

//         if (vorName != "Lukas") {

//             console.log("Aha");

//         } else {
//             console.log("Na dann"); 
//         } 
// }

// ausgabeNamenParam(prompt("Wie heißt du?")) // Argument (Daten für Parameter)

function ausgabeNamenParam(firstName) {
    
    console.log("Hallo " + firstName);

}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams(
//     prompt("Wie ist dein Vorname?"),
//     prompt("Wie ist dein Nachname")
//     )

function ausgabeNamenParams(
    firstName,
    lastName) {
    
    console.log("Hallo " + firstName + " " + lastName + "!");

}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2(
    // prompt("Wie ist dein Vorname?"),
    // prompt("Wie ist dein Nachname")
    // )

function ausgabeNamenParams2(
    firstName,
    lastName) {
    
    // 1. Funktionalität: string composing
    const GAP = " "
    let outputStr = "Hallo" + GAP + firstName + GAP + lastName + "!";

    // 2. Funktionalität: string output

    console.log(outputStr);

}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten in Funktionen| return

output(
    getString(
        prompt("Wie ist dein Vorname?"),
        prompt("Wie ist dein Nachname")));

function getString(firstName, lastName) {
    
    const GAP = " "
    let outputStr = "Hallo" + GAP + firstName + GAP + lastName + "!";
    return outputStr;
}

/** Input --> Parameter | return --> Output **/

// Funktionalität: String Output

function output(outputData) {
    
    console.log(outputData)

}