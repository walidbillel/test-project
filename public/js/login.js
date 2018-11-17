$("#login-button").on("click", function(){

    event.preventDefault();
    var userName = $("#username-val").val().trim();
    var password = $("#password-val").val().trim();

    console.log(userName);

    $.get("/api/users/" + userName + "/"+ password, function(data){
        console.log(data);
        if(!data) {
            alert("user doesnt exist");

        }

        localStorage.setItem("user", data.id);
        console.log(localStorage);
    })
});