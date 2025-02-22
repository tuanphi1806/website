$(document).ready(function () {
    // Chuyển đổi giữa Sign Up và Log In
    $('.tab a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
        var target = $(this).attr('href');
        $('.tab-content > div').hide();
        $(target).fadeIn(500);
    });

    // Xử lý đăng nhập
    $('#login-button').on('click', function (e) {
        e.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();

        // Kiểm tra tên đăng nhập và mật khẩu (thay thế bằng logic thực tế trong ứng dụng)
        if (email === "test@example.com" && password === "12345") {
            $('#login-message').text("Đăng nhập thành công!").addClass('success').fadeIn();
            $('#login-message').removeClass('error');
        } else {
            $('#login-message').text("Sai tên đăng nhập hoặc mật khẩu!").addClass('error').fadeIn();
            $('#login-message').removeClass('success');
        }
    });

    // Quên mật khẩu
    $('#forgot-password').on('click', function (e) {
        e.preventDefault();
        $('#login').hide();
        $('#forgot-password-form').fadeIn();
    });

    // Xử lý quên mật khẩu
    $('#reset-password-form').on('submit', function (e) {
        e.preventDefault();

        var email = $('#reset-email').val();
        if (email === "test@example.com") {
            $('#reset-message').text("Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.").css("color", "green");
        } else {
            $('#reset-message').text("Email không hợp lệ. Vui lòng thử lại.").css("color", "red");
        }
    });
});
