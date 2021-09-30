var dateOfBirth = document.querySelector("#birthday-date");
var checkBtn = document.querySelector("#check-btn");
var result = document.querySelector("#output");

checkBtn.addEventListener("click", findPallindrome);


function findPallindrome() {
  var dob = dateOfBirth.value;
  var removeSpecialChars = dob.replaceAll("-", "");
  var reverseDob = removeSpecialChars.split('').reverse().join('');
  // console.log(removeSpecialChars);
  // console.log(reverseDob);

  if (dob === reverseDob) {
    result.innerHTML = "This is a Pallindrome."
  } else {
    result.innerHTML = "This is not a Pallindrome."
   
  }
}


