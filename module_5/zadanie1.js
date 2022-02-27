let i = prompt ("input");
 i = +i;
  alert (typeof i);
if (i% 2 ===0) {
  alert ("четное");
}
else if (i%1 ===0) {
  alert ("нечетное");
}
else {
  alert("Упс, кажется вы ошиблись")
}
if (i > 0)
  alert(true)
else if (i < 0)
  alert(false )
else
  alert(false)

NaN === NaN; // => false

const someNumber = NaN;

if (someNumber !== someNumber) {  console.log('Is NaN');
} else {
console.log('Is Not NaN');
}
// logs "Is NaN"

