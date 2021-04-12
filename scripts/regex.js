var element = document.getElementById("form");
var ele = document.getElementById("feedback");
if (element.addEventListener) {
    element.addEventListener("submit", main_validator, true);
} else if (ele.attachEvent) { //backup for old IE
    element.attachEvent('onsubmit', main_validator);
}
function main_validator(e) {
    console.log(e);
    e.preventDefault();
    ele.innerHTML = ""; //??
    if (check_username(e.target[0].value) && check_username (e.target[1].value) ) {
        element.submit();
    }
}
function check_username(firstname) {
    //[a-zA-Z_.-]*$/g
    var re = new RegExp(/^[a-zA-Z0-9_.-]*$/);
    var message = "";
    var someWrong = false;
    console.log(re.test(firstname));
    if (!re.test(firstname)) {
        message += "Name can only be [a-z], [A-Z], or (-,_)";
        someWrong = true;
  //      console.log(someWrong);//test
    }
    if (firstname.length > 20) {
        message += "\nUsername must be less than 20 characters";
        someWrong = true;
    }
    if (someWrong) {
        //Create a <p> element
        var para = document.createElement("P");
        para.classList.add("danger");
        //Create a text node
        var t = document.createTextNode(message);
        para.appendChild(t);
        ele.appendChild(para);
        return false;
    }
    return true;
}

