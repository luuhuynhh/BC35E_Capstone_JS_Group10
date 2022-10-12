function Account(email, pw, name, phone, gender) {
    this.email = email;
    this.pw = pw;
    this.name = name;
    this.phone = phone;
    this.gender = gender ? "male" : "female";
}