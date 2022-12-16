$('#login').click(function (e) {
    var valid = this.form.checkValidity();
    if (valid) {
        var username = $('#username').val();
        var password = $('#password').val();
        var submit = $('#login').val();
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: '../classes/LoginInc.php',
            data: {
                'username': username,
                'password': password,
                'submit': submit
            },


            success: function (data) {
                if ($.trim(data) == "1") {
                    window.location.href = "index.php"
                }
                if ($.trim(data) == "2") {
                    $('#message').html("帳號或密碼錯誤");
                }

            },
            error: function (data) {

            }
        });
    }
})
