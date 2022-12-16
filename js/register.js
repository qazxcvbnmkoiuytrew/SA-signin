$('#register').click(function (e) {

    var valid = this.form.checkValidity();

    if (valid) {
        var username = $('#username').val();
        var password = $('#password').val();
        var nickname = $('#nickname').val();
        var phonenumber = $('#phonenumber').val();
        var email = $('#email').val();
        var submit = $('#register').val();

        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: '../classes/RegistrationInc.php',
            data: {
                'username': username,
                'password': password,
                'nickname': nickname,
                'phonenumber': phonenumber,
                'email': email,
                'submit': submit
            },
            
            success: function (data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sucessfully sign up',
                    showConfirmButton: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "signin.php"
                    }
                })

            },
            error: function (data) {
                Swal.fire(
                    'Error',
                    'There were errors while saving the data.',
                    'error'
                )
            }
        });
    }

});
