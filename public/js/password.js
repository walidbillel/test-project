$("#get-pass").on("click", function(){
    event.preventDefault();
    var realName = $("#realname-val").val().trim();
    var email = $("#email-val").val().trim();

    console.log(realName + "  " + email);

    $.get("/api/users/password/"+ realName + "/" + email, function(data){
        console.log(data);
        if (!data){
            alert("name or email is wrong")
        } else {
            alert(`Your Password is: ${data.password}`)
        }
       
    })
    
});