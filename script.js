function getFormvalue() {
  let form = document.getElementById("form1");
  let firstName = form.fname.value.trim();
  let lastName = form.lname.value.trim();
  if (firstName === "" && lastName === "") {
    alert("Please enter your name");
    return false; 
  let fullName = firstName + " " + lastName;
  alert(fullName.trim());
  return false; 
}