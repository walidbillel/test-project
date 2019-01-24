var upload = new FileUploadWithPreview('myUniqueUploadId');

$("#submit-button").on("click", function () {
    event.preventDefault();

    // $(".input-animate").addClass("animated jackInTheBox").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    //     $(this).removeClass("animated jackInTheBox");
    //   });



    var userName = $("#username-val").val().trim();
    var realName = $("#realname-val").val().trim();
    var email = $("#email-val").val().trim();
    var pass = $("#password-val").val().trim();
    var confPass = $("#conf-password-val").val().trim();


    if (!userName || !realName || !email || !pass || !confPass) {
        $(".alert-message").html("Please Fill in all Inputs!");
        $("#alert-modal").modal("toggle");
    } else if (!(pass === confPass)) {
        $(".alert-message").html("Passwords Don't Match!");
        $("#alert-modal").modal("toggle");
    } else {

        var userobject = {
            realName: realName,
            Username: userName,
            email: email,
            password: pass,
            passCon: confPass
        }

        console.log(userobject);
        upsertUserToDatabase(userobject)
    }

});

function upsertUserToDatabase(newUser) {

    $.post("/api/users", newUser).then(function (res, err) {
        console.log(err)
        console.log(res)
        if (res.name == "SequelizeUniqueConstraintError") {
            // alert("That username or email is already in user");
            $(".alert-message").html("Username or Email Already Taken!");
            $("#alert-modal").modal("toggle");
        }
        else {
            window.location.href = "/"
        }
    });
}
