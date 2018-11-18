var currentUserId = localStorage.getItem("user");

console.log(currentUserId);

$.get("/api/users/" + currentUserId , function(data){
    console.log(data);

    $("#user-logged").html(data.Username.toUpperCase())
});

