function shout(string){
  console.log(string.toUpperCase())
  return string.toUpperCase()
}
function whisper(string){
  console.log(string.toLowerCase())
  return string.toLowerCase()
}
function sayHiToGrandma(string){
  if(string ==="HELLO"){
    string="YES INDEED!"
    return string
  }else if(string ==="hello"){
    string="I can't hear you!"
    return string
  }else if(string ==="I love you, Grandma."){
  string = "I love you, too." 
  return string
  }
}