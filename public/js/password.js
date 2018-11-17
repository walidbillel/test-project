$("#get-pass").on("click", function(){
    event.preventDefault();
    var realName = $("#realname-val").val().trim();
    var email = $("#email-val").val().trim();
    if (!realName || !email) {
        $(".alert-message").html("Please Fill up All Inputs");
        $("#alert-modal").modal("toggle");
    }
    console.log(realName + "  " + email);

    $.get("/api/users/password/"+ realName + "/" + email, function(data){
        console.log(data);
        if (!data){
            $(".alert-message").html("Name or Email Not Valid! Try Again");
            $("#alert-modal").modal("toggle");
        } else {
            $(".alert-message").html(`Your Password is ${data.password}`);
            $("#alert-modal").modal("toggle");
           
        }
       
    });
    
});