  
function validateForm() {
  //Form validation for first name field
  var first = document.forms["myForm"]["firstname"].value;
  if (first == "") {
    alert(" First Name must be filled out");
    return false;
  }
  //Form Validation for lastname field
  var last = document.forms["myForm"]["lastname"].value;
  if (last == "") {
    alert("Last name must be filled out");
    return false;
  }

  //Form validation for Email field
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  //Form validation for Phone number field
  var phone = document.forms["myForm"]["phone"].value;
  if (phone == "") {
    alert("Phone Number must be filled out");
    return false;
  }
}
