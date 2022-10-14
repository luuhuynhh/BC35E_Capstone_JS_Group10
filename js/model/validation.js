function Validation() {
    this.kiemTraRong = function (value, idErr, mess) {
        if (value.trim() === "") {
            document.querySelector(idErr).innerHTML = mess;
            document.querySelector(idErr).style.display = "block";
            return false;
        }

        document.querySelector(idErr).style.display = "none";
        return true;
    }

    this.kiemTraEmail = function (email) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            alert("Valid email address!");
            document.form1.text1.focus();
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
        }

    }

    this.kiemTraChucVu = function (idSelect, idErr, mess) {
        if (document.querySelector(idSelect).selectedIndex !== 0) {
            document.querySelector(idErr).innerHTML = mess;
            document.querySelector(idErr).style.display = "block";
            return false;
        }

        document.querySelector(idErr).style.display = "none";
        return true;
    }

    this.kiemTraDoDaiKiTu = function (value, idErr, mess, min, max) {
        if (value.length < min || value.length > max) {
            document.querySelector(idErr).innerHTML = mess;
            document.querySelector(idErr).style.display = "block";
            return false;
        }

        document.querySelector(idErr).style.display = "none";
        return true;
    }

    this.kiemTraChuoiKiTu = function (value, idErr, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

        if (value.match(letter)) {
            document.querySelector(idErr).style.display = "none";
            return true;
        }

        document.querySelector(idErr).innerHTML = mess;
        document.querySelector(idErr).style.display = "block";
        return false;
    };

    this.kiemTraEmail = function (value, idErr, mess) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            document.querySelector(idErr).style.display = "none";
            return true;
        }

        document.querySelector(idErr).innerHTML = mess;
        document.querySelector(idErr).style.display = "block";
        return false;
    }

    this.kiemTraMatKhau = function (value, idErr, mess) {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[A-Z]).{6,10}$/;

        if (re.test(value)) {
            document.querySelector(idErr).style.display = "none";
            return true;
        }

        document.querySelector(idErr).innerHTML = mess;
        document.querySelector(idErr).style.display = "block";
        return false;
    }

    this.kiemTraConfirmMatKhau = function (pass, confirmPass, idErr, mess) {
        if (pass !== confirmPass) {
            document.querySelector(idErr).innerHTML = mess;
            document.querySelector(idErr).style.display = "block";
            return false;
        } else {
            document.querySelector(idErr).style.display = "none";
            return true;
        }
    }

    this.kiemTraKhoangGiaTri = function (value, idErr, mess, min, max) {
        if (Number(value) < min || Number(value) > max) {
            document.querySelector(idErr).innerHTML = mess;
            document.querySelector(idErr).style.display = "block";
            return false;
        }

        document.querySelector(idErr).style.display = "none";
        return true;
    }

    this.kiemTraMaNVTrung = function (value, idErr, mess, arr) {
        var isExist = false;

        for (var i = 0; i < arr.length; i++) {
            var sv = arr[i];
            if (sv.taiKhoan === value) {
                isExist = true;
                break;
            }
        }

        if (isExist) {
            document.querySelector(idErr).innerHTML = mess;
            document.querySelector(idErr).style.display = "block";
            return false;
        }

        document.querySelector(idErr).innerHTML = "";
        document.querySelector(idErr).style.display = "none";
        return true;
    };
}