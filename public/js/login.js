$("#login-button").on("click", function(){

    event.preventDefault();
    var userName = $("#username-val").val().trim();
    var password = $("#password-val").val().trim();

    if(!userName || !password) {
        $(".alert-message").html("Please Fill in Inputs!");
        $("#alert-modal").modal("toggle");
    }
    console.log(userName);

    $.get("/api/users/" + userName + "/"+ password, function(data){
        console.log(data);
        
        if(!data) {
            $(".alert-message").html("User Doesn't Exist! Try Again");
            $("#alert-modal").modal("toggle");
        }

        localStorage.setItem("user", data.id);
        window.location.href = "/main";
        console.log(localStorage);
    })
});