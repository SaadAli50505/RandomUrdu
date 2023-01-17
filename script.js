var bold = [
  "ا",
  "ب",
  "پ",
  "ت",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "و",
  "ی,ے",
];
var all = [
  "آ",
  "ا",
  "ب",
  "پ",
  "ت",
  "ٹ",
  "ث",
  "ج",
  "چ",
  "ح",
  "خ",
  "د",
  "ڈ",
  "ذ",
  "ر",
  "ڑ",
  "ز",
  "ژ",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ک",
  "گ",
  "ل",
  "م",
  "ن",
  "و",
  "ہ",
  "ی,ے",
];

function r1() {
  var randomIndex = Math.floor(Math.random() * bold.length);
  var randomChar = bold[randomIndex];
  if (bold.length == 0) {
    alert("Finished");
  } else {
    alert(randomChar);
  }
  bold = bold.filter((char) => char !== `${randomChar}`);
}
function r2() {
  var randomIndex = Math.floor(Math.random() * all.length);
  var randomChar = all[randomIndex];
  if (all.length == 0) {
    alert("Finished");
  } else {
    alert(randomChar);
  }
  all = all.filter((char) => char !== `${randomChar}`);
}
