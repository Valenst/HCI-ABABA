
function validate(){
    if(!validateName()) return;
    if(!validatePhone()) return;
    if(!validateNumberOfPeople()) return;
    if(!validateDate()) return;
    if(!validateTime()) return;
    if(!validateCoupon()) return;

    window.alert("Reservation made successfuly!")
}

function validateName(){
    var name = document.getElementById("name").value;

    if(name == ""){
        window.alert("Name must not be empty!");
        return false;
    }

    if(name.length < 5 || name.length > 20){
        window.alert("Name must be at between 5 to 20 characters!");
        return false;
    }

    if(name.includes(' ')){
        window.alert("Name must not contain any whitespaces!");
        return false;
    }

    return true;
}

function validatePhone(){
    var phone = document.getElementById("phone").value;
    
    if(phone.toString() == ""){
        window.alert("Phone number must not be empty!");
        return false;
    }

    return true;
}

function validateNumberOfPeople(){
    var numberofpeople = document.getElementById("numberofpeople").value;

    if(numberofpeople.toString() == ""){
        window.alert("Number of people must not be empty!");
        return false;
    }

    if(numberofpeople < 1){
        window.alert("Number of people must be at least 1!");
        return false;
    }

    if(numberofpeople > 20){
        window.alert("Maximum number of people is 20!");
        return false;b
    }

    return true;
}

function validateDate(){
    var date = document.getElementById("date").value;

    if(date.toString() == ""){
        window.alert("Date must not be empty!");
        return false;
    }

    date = new Date(date).getTime();

    console.log(new Date().getTime(), date)
    if(new Date().getTime() > date){
        window.alert("Invalid date!")
        return false;
    }

    return true;
}

function validateTime(){
    var time = document.getElementById("time").value;

    if(time.toString() == ""){
        window.alert("Time must not be empty!");
        return false;
    }

    if(time < '09.00' || time > '21.00'){
        window.alert("Must reserve between 09.00 and 21.00!");
        return false;
    }

    return true;
}

function validateCoupon(){
    var coupon = document.getElementById("coupon").value;

    if(coupon == ""){
        return true;
    }

    var valid_coupons = ["ABABA44", "STEAKGIFT", "JAPANESEWAGYU"];
    if(!valid_coupons.includes(coupon.toUpperCase())){
        window.alert("Coupon code is invalid!");
        return false;
    }

    return true;

}