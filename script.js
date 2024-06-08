function label(tag, atrname, atrvalue, content) {
    let label = document.createElement(tag);
    label.setAttribute(atrname, atrvalue);
    label.innerHTML = content;
    return label;
}

function input(tag, atrname1, atrvalue1, atrname2, atrvalue2) {
    let input = document.createElement(tag);
    input.setAttribute(atrname1, atrvalue1);
    input.setAttribute(atrname2, atrvalue2);
    return input;
}

function break_ele() {
    let ele = document.createElement("br");
    return ele;
}

let firstname_label = label("label", "for", "fname", "First Name");
let brk1 = break_ele();
let firtsname_input = input("input", "type", "text", "id", "fname");
let brk2 = break_ele();

//document.body.append(firstname_label,brk1,firtsname_input,brk2);

let middlename_label = label("label", "for", "mname", "Middle Name");
let brk3 = break_ele();
let middlename_input = input("input", "type", "text", "id", "mname");
let brk4 = break_ele();

//document.body.append(middlename_label,brk3,middlename_input,brk4)

let lastname_label = label("label", "for", "lname", "Last Name");
let brk5 = break_ele();
let lastname_input = input("input", "type", "text", "id", "lname");
let brk6 = break_ele();

//document.body.append(lastname_label, brk5, lastname_input, brk6);

let password_label = label("label", "for", "pass", "Password");
let brk7 = break_ele();
let password_input = input("input", "type", "password", "id", "pass");
let brk8 = break_ele();

//document.body.append(password_label, brk7, password_input, brk8);

let brk9 = break_ele();
let file_label = label("label", "for", "file", "Upload file");
//let brk7 = break_ele();
let file_input = input("input", "type", "file", "id", "file");
//let brk8 = break_ele();

document.body.append(firstname_label, brk1, firtsname_input, brk2, middlename_label, brk3, middlename_input, brk4, lastname_label, brk5, lastname_input, brk6, password_label, brk7, password_input, brk8, brk9, file_label, file_input);