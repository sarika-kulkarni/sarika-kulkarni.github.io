
const invalidPhoneNumbers = new Set(["0000000000", "8888888888", "1234567890"]);

function invalidPhoneNumber(contactNumber){
  for(const invalidPhoneNumber of invalidPhoneNumbers){
      if(contactNumber == invalidPhoneNumber){
        return true;
      }
  }

  return false;
}

$(document).ready(function(){

  $("#formSubmitStatus").html("");
  $("#commentFormSubmitStatus").html("");

  $("#registrationForm").on("submit", function (event) {
    event.preventDefault();

    const password = $("#regPassword").val();
    const confirmPassword = $("#regConfirmPassword").val();

    if(password !== confirmPassword){
      $("#formSubmitStatus").html("Password do not match").removeClass().addClass("error");
    }else if(invalidPhoneNumber($("#contactNumber").val())){
      $("#formSubmitStatus").html("Invalid phone number").removeClass().addClass("error");
    }
    else{
      $("#formSubmitStatus").html("Registration successful").removeClass().addClass("success");
      $("#registrationForm").trigger('reset');
    }
  });
  
  $("#commentForm").on("submit", function (event) {
    event.preventDefault();
    $("#commentFormSubmitStatus").html("Thank you for your feedback");
    $("#commentForm").trigger('reset');
  }); 
});
    