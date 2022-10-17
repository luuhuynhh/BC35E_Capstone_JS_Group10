const validation = new Validation();
let isValid = true;
// validate password
const inputPassword = document.querySelector("#inputPassword");
inputPassword.onkeyup = function () {
    if (inputPassword.value) {
        isValid &= validation.kiemTraMatKhau(inputPassword.value, "#errPassword", "Mật khẩu từ 6 đến 10 kí tự, gồm ít nhất 1 kí tự in hoa, 1 kí tự đặc biệt!");
    } else {
        isValid &= validation.kiemTraRong(inputPassword.value, "#errPassword", "Mật khẩu không được để trống!");
    }
}

// validate confirm password
const inputCFPassword = document.querySelector("#inputCFPassword");
inputCFPassword.onkeyup = function () {
    isValid &= validation.kiemTraConfirmMatKhau(inputPassword.value, inputCFPassword.value, "#errCFPassword", "Mật khẩu không khớp!");
}

// validate email

const inputEmail = document.querySelector("#inputEmail");
inputEmail.onkeyup = function () {
    if (inputEmail.value) {
        isValid &= validation.kiemTraEmail(inputEmail.value, "#errEmail", "Email không đúng định dạng!");
    }
    else {
        isValid &= validation.kiemTraRong(inputEmail.value, "#errEmail", "Email không được để trống!");
    }
}

// validate name
const inputName = document.querySelector("#inputName");
inputName.onkeyup = function () {
    isValid &= validation.kiemTraRong(inputName.value, "#errName", "Name không được để trống!");
}

// validate phone
const inputPhone = document.querySelector("#inputPhone");
inputPhone.onkeyup = function () {
    isValid &= validation.kiemTraRong(inputPhone.value, "#errPhone", "Phone không được để trống!");
}

const signup = async (account) => {
    try {
        let res = await axios({
            url: "https://shop.cyberlearn.vn/api/Users/signup",
            method: "POST",
            responeType: "json",
            data: account
        });
        return res;
    } catch (err) {
        console.log(err);
    }
}

const resetForm = () => {
    document.querySelector("#inputEmail").value = "";
    document.querySelector("#inputPassword").value = "";
    document.querySelector("#inputCFPassword").value = "";
    document.querySelector("#inputName").value = "";
    document.querySelector("#inputPhone").value = "";
    document.querySelector("#male").checked = true;
}

document.querySelector("#submit").onclick = function (e) {
    e.preventDefault();
    console.log(isValid);
    let email = document.querySelector("#inputEmail").value;
    let password = document.querySelector("#inputPassword").value;
    let name = document.querySelector("#inputName").value;
    let phone = document.querySelector("#inputPhone").value;
    let isMale = document.querySelector("#male").checked;
    if (isValid) {
        let account = new Account(email, password, name, phone, isMale);
        const res = signup(account);
        if (res && res.statusText === "OK") {
            alert(res.data.message);
            resetForm();
        } else {
            alert("Đăng ký tài khoản không thành công!");
        }
    }
}