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




export function aufgabe02(args) {
  // erstellt die Funktion 
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
    // Element in einen Grossbuchstaben umwandeln
  const capitalizedElement = currentElement.toUpperCase()
  
  // Hänge den Grossbuchstaben an das Resultat an...
  result.push(capitalizedElement)
  
  }
return result.join("")
}


export function aufgabe03(args) {
  const input = args
  const result = []
  let count= 0

  for (let i = 0 ; i < input.length; i++) {
    const currentElement =input[i]

if (currentElement === 'e') {
  count=count + 1
} 
if (currentElement === 'E') {
  count = count + 1
}
}
  return count ("")
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

  for (let i = 0 ; i < input.length; i++) {
    const currentElement = Input [i]

}
  return result.join("")
}


export function aufgabe06(args) {
  const input = args
  const result = []

  for (let i = 0 ; i < input.length; i++) {
    const currentElement =input[i]

}
  return result.join("")
}


export function aufgabe07(args) {
  const input = args
  const result = []

  for (let i = 0 ; i < input.length; i++) {
    const currentElement =input[i]

}
  return result.join("")
}


export function aufgabe09(args) {
const input = args
const result = []

let len = 0

for (let i = 0; i < input.length; i++) {
const currentElement = input[i]

len = len + 1

}

if ( len === 6 ) {
  return true 
} else {
  return false
  }
}


export function aufgabe11 (args) {
const input = args
let ascii = null

if (input.length > 1 ) { // funktionswächter//

  return null 
}



for (let i = 0;1 < input.length; i++) {
const currentElement = input[i]
ascii = currentElement.charCodeAt(0)
return ascii
}
return null
}

export function aufgabe12 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
const currentElement = input[i]

if (currentElement === "e") {
  return i
}

  }
  
  return -1
}

export function aufgabe13 (args) {
  const input = args
  const result = []
  
  return result.join("")
}















