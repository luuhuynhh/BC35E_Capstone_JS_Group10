const validation = new Validation();

// validate password
const inputPassword = document.querySelector("#inputPassword");
inputPassword.onkeyup = function () {
    let isValid = true;
    if (inputPassword.value) {
        isValid &= validation.kiemTraMatKhau(inputPassword.value, "#errPassword", "Mật khẩu không đúng định dạng");
    } else {
        isValid &= validation.kiemTraRong(inputPassword.value, "#errPassword", "password trống");
    }
}

// validate confirm password
const inputCFPassword = document.querySelector("#inputCFPassword");
inputCFPassword.onkeyup = function () {
    let isValid = true;
    isValid &= validation.kiemTraConfirmMatKhau(inputPassword.value, inputCFPassword.value, "#errCFPassword", "Mật khẩu không khớp");
}

// validate email

const inputEmail = document.querySelector("#inputEmail");
inputEmail.onkeyup = function () {
    let isValid = true;
    if (inputEmail.value) {
        isValid &= validation.kiemTraEmail(inputEmail.value, "#errEmail", "Email không đúng định dạng");
    }
    else {
        isValid &= validation.kiemTraRong(inputEmail.value, "#errEmail", "Email không được để trống");
    }
}

// validate name
const inputName = document.querySelector("#inputName");
inputName.onkeyup = function () {
    let isValid = true;
    isValid &= validation.kiemTraRong(inputName.value, "#errName", "Name không được để trống");
}

// validate phone
const inputPhone = document.querySelector("#inputPhone");
inputPhone.onkeyup = function () {
    let isValid = true;
    isValid &= validation.kiemTraRong(inputPhone.value, "#errPhone", "Phone không được để trống");
}