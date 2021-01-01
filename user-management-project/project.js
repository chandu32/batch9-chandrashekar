var userList = [];
function login(){
    console.log("email: " + $("#email").val());
    console.log("password: " + $("#password").val());


    var i;
    var isUserLoggedIn = false;
    var loggedInUserDetails;
    if(userList.length === 0){
        alert("The user not exist");
    } else {
        for(i = 0; i < userList.length; i++) {
            if(userList[i].email === $("#email").val() && userList[i].password === $("#password").val()){
                isUserLoggedIn = true;
                loggedInUserDetails = userList[i];
            }
        }
    }



}

function CreateAccount(){
    console.log("firstname: " + $("#fname").val());
    console.log("lastname: " + $("#lname").val());
    console.log("email: " + $("#createaccountemail").val());
    console.log("password: " + $("#createaccountpassword").val());
    console.log("conformpassword: " + $("#conformpassword").val());
    console.log("age: " + $("#age").val());
    console.log("gender: " + $("#male").val());
    console.log("gender: " + $("#female").val());
    console.log("Favorite Hero: " + $("#hero").val());

    var userDetailes = {
        firstname : $("#fname").val(),
        lastname : $("#lname").val(),
        email : $("#createaccountemail").val(),
        password : $("#createaccountpassword").val(),
        conformpassword : $("#conformpassword").val(),
        age : $("#age").val(),
        gender : $("#male").val(),
        gender : $("#female").val(),
        Favorite : $("#hero").val()
        }
        if(userList.length !==0 && userList.filter(x => x.email == $("#createaccountemail").val()).length !==0){
            var eee = $("#createaccountemail").val();
            window.alert("The Email" + eee + "already exist")
        }else{
            userList.push(userDetailes);
        }

        var  pas1 = document.getElementById("createaccountpassword").value;
        var  pas2 = document.getElementById("conformpassword").value;

        if (pas1 != pas2){
            alert("password did not match")
        }else{
            userList.push(userDetailes);
        }



        var age = document.getElementById("age").value;

    if(age === "") {
        return true;
      }
      
      // convert age to a number
      age = parseInt(age, 10);
      
      //check if age is a number or less than or greater than 100
      if (isNaN(age) || age < 1 || age > 100)
      { 
        alert("The age must be a number between 1 and 100");
        return false;
      }
      userList.push(userDetailes);
}
console.log(userList);
        

        
        
        

   

function switchForms(formtype){
    if(formtype === "login"){
       // $("#loginform").removeClass("hide");
       // $("#createaccountform").addClass("hide");
       $("#loginform").show();
       $("#createaccountform").hide();
    }else{
       // $("#loginform").addClass("hide");
       // $("#createaccountform").addClass("hide");
       $("#loginform").hide();
       $("#createaccountform").show();

    }
}



    