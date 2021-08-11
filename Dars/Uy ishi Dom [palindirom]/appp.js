function myfun() {
  let pass = document.getElementById("numb").value;
  let rev = pass.split("").reverse().join("");
  let text = document.getElementById("numb");
  text.value = rev;
  if (pass.toLowerCase() == rev.toLowerCase()) {
    alert(pass + "-->Palindirom");
  } else {
    alert(pass + "-->Palindirom Emas")
  }
}
