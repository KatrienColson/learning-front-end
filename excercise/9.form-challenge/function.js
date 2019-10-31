$(".flp label").each(function(){
	var sop = '<span class="ch">'; 
	var scl = '</span>'; 
 
	$(this).html(sop + $(this).html().split("").join(scl+sop) + scl);
 
	$(".ch:contains(' ')").html("&nbsp;");
})
 
var d;
 
$(".flp input").focus(function(){
 
	var tm = $(this).outerHeight()/2 *-1 + "px";
 
	$(this).next().addClass("focussed").children().stop(true).each(function(i){
		d = i*50;
		$(this).delay(d).animate({top: tm}, 200, 'easeOutBack');
	})
})
$(".flp input").blur(function(){
	if($(this).val() == "")
	{
		$(this).next().removeClass("focussed").children().stop(true).each(function(i){
		d = i*50;
		$(this).delay(d).animate({top: 0}, 500, 'easeInOutBack');
		})
	}
})

//invulveld submit
document.getElementById("email").addEventListener("submit", validation);

// let form = document.getElementById('email');
// console.log("email");
 
function validation(){
	event.preventDefault();
	let email = document.forms["validate"].value;
	let at = email.indexOf("@");
	let point = email.lastIndexOf(".");
	let non = document.getElementById("novalid");
	let oui = document.getElementById("valid");
	
		if(at < 1 || point < (at + 2) || (point + 2) >= email.length){
		non.style.display = "block";
		oui.style.display = "none";
		return false;
		} else {
		oui.style.display = "block";
		non.style.display = "none";
		return false;
        }
        
}
console.log("");


/*data onthouden*/
function dotest(){
    var input = document.getElementById('fname');
    if( localStorage.test ){
        input.value = localStorage.test;
    }

    input.addEventListener('blur', function(){
        localStorage.test = input.value;
    }, false);
    
}
/* submit knop met confirm*/
function Validate() {
    var password = document.getElementById("psswrd").value;
    var confirmPassword = document.getElementById("cfpsswrd").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}
    console.log(psswrd);

//gebruik van nodige tekens voor paswoord
var myInput = document.getElementById("psswrd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

    // When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

    // When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

    // When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
