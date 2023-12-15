export function aufgabe01(args) {

  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === 'e') {
      result.push("")
    } else if ( currentElement === 'E') {
      result.push("")

  } else {
  result.push(currentElement)
  }
}
  return result.join("")
}



// erstellt die funktion 
export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
    // Element in einen Grossbuchstaben umwandeln
  const capitalizedElement = currentElement.toUpperCase()
  
  // Hänge den Grossbuchstaben an das Resultat an
  result.push(capitalizedElement)
  
  }
return result.join("")
}


export function aufgabe03(args) {
  const input = args
  const result = []
  let count= 0

  for (let i = 0; i < input.length; i++) {
    const currentElement =input[i]
//zähle alle e`s 
if (currentElement === 'e') {
  count = count + 1
} 
if (currentElement === 'E') {
  count = count + 1
}
}
  return count 
}


export function aufgabe04(args) {
  const input = args
  const result = []

  for (let i = 0 ; i < input.length; i++){
    const currentElement =input[i]

  }
  return result.join("")
}


export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0

  for (let i = 0 ; i < input.length; i++) {
    const currentElement = input[i]
// Erkennt Grossbuchstaben
if (currentElement===".") {}
else if (currentElement===" "){}

// Erkennt ob Grossbuchstaben vorkommen
else if(currentElement === currentElement.toUpperCase())
{capitalLetters++}
  
if (capitalLetters > 0) {
  return true
}else {
  return false 
}


}
  
}

//Funktion teste ob Sonderzeichen vorkommen
export function aufgabe06(args) {
  const input = args
  

  for (let i = 0 ; i < input.length; i++) {
    const currentElement =input[i]
    const ascii= currentElement.charCodeAt(0)
  if (48 <= ascii&& ascii<= 57) {

  } else if (65<= ascii&& ascii <= 90) {

  }else if (65<= ascii&&ascii <= 122) {

  }else if (currentElement === " ") {

  }else if (currentElement === " ") {

  }else {
    return true
  }
}
return false
}





export function aufgabe07(args) {
  const input = args
  const result = []
// Testet ob das wort "und" vorkommt 
  for (let i = 0 ; i < input.length; i++) {
    const currentElement =input[i]
if (currentElement === "u") {
  if(input[i+1]=== "n") {
    if(input[i+2]=== "d") {
    return true
  }
}
}
  }
  return false // Falls kein 'und' vorhanden ist wird Funktion abgebrochen
}



export function aufgabe08 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // e's sollen ersetzt werden
    if (currentElement === "e") {
      result.push (3)

    }
    else {
      result.push (currentElement)
    }
  
  }
  return result.join("")
}





export function aufgabe09(args) {
const input = args
const result = []

let len = 0

for (let i = 0; i < input.length; i++) {
const currentElement = input[i] 
len = len +1 
} //testet ob eingabe genau 6 Zeichen lang ist
if (len === 6) {
  return true }
  else {return false}
}




// teste ob eine Eingabe ein korrekter RGB Hexcode ist.
export function aufgabe10 (args) {
  const input = args

  if (input.length !== 7) return false 
  if (input [0] !== "#") return false 

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57) {
      // mache nichts; ist eine Zahl
    } else if (65 <= ascii && ascii <= 70) {
      //mache nichts; ist A-F
    } else {
      return false
    }
  } return true
}







export function aufgabe11 (args) {
  const input = args
  const result = []
  let ascii = null

  if (input.length>1) {// ist funktionswächter
    return null
  }

  for (let i = 0;i < input.length; i++) {
    const currentElement = input[i]
    ascii = currentElement.charCodeAt (0)
    return ascii
  }
  
  return null
}


export function aufgabe12(args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]
// sucht position des elements e
if (currentElement === "e") {
  return i
}

  }
  
  return -1
}

export function aufgabe13 (args) {
  // Suche die position des letzen e
  const input = args
  const result = []
  for (let i = 1; i < input.length; i++) {
 const currentElement = input [i]
 if (currentElement === 'e') {
  return i
 }

  }
  
  return -1
}


export function aufgabe14 (args) {
  const input = args
  const result = 0
  let count = 0

  for (let i = 0;i < input.length;i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count++
    if (count === 3) {
        return i
      }
    }
  }
  return -1
}


export function aufgabe15 (args) {
  const input = args
  const result = []
  for (let i = 0; i< input.length; i++) {
    const currentElement = input[i]

    if (currentElement === '') {
      return result.join("")
    }
    result.push(currentElement)
  }
  
  return result.join("")

}

export function aufgabe16 (args) {
  const input = args
  const result = []
  
  return result.join("")
}


export function aufgabe17 (args) {
  const input = args;
  const result = input.split(',')
  
for (let i = 0; i < result.length - 1; i++) { 
  for (let j = 0; j < result.length - 1 - i; j++) {
    if (result[j] > result[j + 1]){

      [result[j],result[j+1]]= [result[j+1],result[j]]
    }
  }
} 
  
  return result.join(',')
}

export function aufgabe18(args) {
  const input = args
  const result = []
  
  return result.join("")
}

export function aufgabe19(args) {
  // verdopplung der Zeichen //
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
    result.push(currentElement)
    result.push(currentElement)
  }
  return result.join("")
}

export function aufgabe20(args) {
  const input = args
  const result = []
  
  for(let i = 0; i < input.length; i++) {
    const currentElemet = input[i]

// Prüft ob der  Leerschlag nach dem '.' vorhanden ist)
    if (currentElement ==="."){
    if (input[i+1] ===" "){
      return true
    }
    }
  }
  return false
}


export function aufgabe21 (args) {
  const input = args
  const result = []

  let positionOfLastE= -1
  for(let i = 0; i < input.length;i++) {
    const currentElement = input[input.length-i-1]
    result.push(currentElement)
  }
  
  return result.join("")
}

export function aufgabe22 (args) {
  const input = args
  const result = []
  let firstPart = true
   
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
   
    if (firstPart === true) {
      result.push("_")
    } else {
      result.push(currentElement)
    }
   
   
    if (currentElement === 'k') {
      firstPart = false
    }
   
  }
  return result.join("")
  }
  
  
  
export function aufgabe24 (args) {
  const input = args
  const result = []

  if (input.length === 1) return input
  const firstElem= input[0]
  const lastElem=input[input.length-1]
// Erste und letzte zeicheneingabe wird vertauscht
  result.push(lastElem)
  for (let i= 1;i < input.length -1; i++) {
    const currentElement = input [i]
    result.push(currentElement)// fügt das currentElement hinzu
  }
  result.push (firstElem)
  return result.join("")
}

export function aufgabe25 (args) {
  const input = args
  const result = []
  

  if (input.length % 2 === 0) {
    const pos = input.length/2 // /2 weil man dadurch die hälfte bekommt bzw halbiert
  
  for (let i = 0; i < input.length;i++) {
    const currentElement= input[i]

    if (i===pos|| i=== pos -1){}
    else {
      result.push(currentElement) 
    }
  }
  
  }
  else {
    const pos= Math.floor(input.length / 2) // halbiert die Zahl

    for (let i = 0; i < input.length; i ++) {
      const currentElement = input[i]
      if (i===pos) {}
      else {result.push(currentElement)}
    }
  }
return result.join("")
}





// Der sogennante Bubbelsort ist ein Algorhytmus welcher Elemente in einer Liste vertauscht und sortiert//
export function bubbleSort (args){
  const list = args.split ("")

  for (let i = 0; i < list.length - 1; i++) {
const currentElement = list[i]
const nextElement = list[i + 1]
if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)){
const tmp = list[i+1]
list [i + 1] = list[i] 
list[i] =tmp
i= -1
  } 
}
 const result = list.join("")
 console.log(result) 
  
  return result

}
