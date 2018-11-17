$("#submit-button").on("click", function(){
    event.preventDefault();
    var userName = $("#username-val").val().trim();
    var realName = $("#realname-val").val().trim();
    var email = $("#email-val").val().trim();
    var pass = $("#password-val").val().trim();
    var confPass = $("#conf-password-val").val().trim();

    if(!userName || !realName || !email || !pass || !confPass) {
        alert("please fill in all inputs");
    } else if (!(pass === confPass)) {
        alert("passwords don't match")
    } else {

        var userobject = {
            realname: realName,
            username: userName,
            email: email,
            password: pass,
            passCon: confPass 
        }

        console.log(userobject);
        upsertUserToDatabase(userobject)
    }
    
});

function upsertUserToDatabase(newUser) {

    $.post("/api/users", newUser).then(function(res, err){
        console.log(err)
        console.log(res)
        if (res.name == "SequelizeUniqueConstraintError") {
          // alert("That username or email is already in user");
        alert("username or email already taken")
        }
        else {
          window.location.href = "/"
        }
    });
}
