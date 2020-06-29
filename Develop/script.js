var savebtnNine = document.getElementById("saveBtnNine");

//set the current date
setDate = function() {
    var currentDate = document.getElementById("date");
    currentDate.textContent = moment().date();
};

//determine status of the hour - 9 AM
hourStatus9 = function() {
    if (moment().hour() === timeBlock9.textContent){
        timeBlock9.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock9.textContent) {
        timeBlock9.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock9.textContent) {
        timeBlock9.className = "future";
        console.log("future")
    };
};

//determine status of the hour - 10 AM
hourStatus10 = function() {
    if (moment().hour() === timeBlock10.textContent){
        timeBlock10.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock10.textContent) {
        timeBlock10.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock10.textContent) {
        timeBlock10.className = "future";
        console.log("future")
    };
};

//determine status of the hour - 11 AM
hourStatus11 = function() {
    if (moment().hour() === timeBlock11.textContent){
        timeBlock11.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock11.textContent) {
        timeBlock11.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock11.textContent) {
        timeBlock11.className = "future";
        console.log("future")
    };
};

//determine status of the hour - 12 AM
hourStatus12 = function() {
    if (moment().hour() === timeBlock12.textContent){
        timeBlock12.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock12.textContent) {
        timeBlock12.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock12.textContent) {
        timeBlock12.className = "future";
        console.log("future")
    };
};

//determine status of hour - 1 PM
hourStatus13 = function() {
    if (moment().hour() === timeBlock13.textContent){
        timeBlock13.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock13.textContent) {
        timeBlock13.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock13.textContent) {
        timeBlock13.className = "future";
        console.log("future")
    };
};

//determing status of hour - 2 PM
hourStatus14 = function() {
    if (moment().hour() === timeBlock14.textContent){
        timeBlock14.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock14.textContent) {
        timeBlock14.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock14.textContent) {
        timeBlock14.className = "future";
        console.log("future")
    };
};

//determine status of hour - 3 PM
hourStatus15 = function() {
    if (moment().hour() === timeBlock15.textContent){
        timeBlock15.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock15.textContent) {
        timeBlock15.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock15.textContent) {
        timeBlock15.className = "future";
        console.log("future")
    };
};

//determing status of hour - 4 PM
hourStatus16 = function() {
    if (moment().hour() === timeBlock16.textContent){
        timeBlock16.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock16.textContent) {
        timeBlock16.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock16.textContent) {
        timeBlock16.className = "future";
        console.log("future")
    };
};

//determine status of hour - 5 PM
hourStatus17 = function() {
    if (moment().hour() === timeBlock17.textContent){
        timeBlock17.className = "present";
        console.log("present")
    } else if (moment().hour() > timeBlock17.textContent) {
        timeBlock17.className = "past";
        console.log("past")
    } else if (moment().hour() < timeBlock17.textContent) {
        timeBlock17.className = "future";
        console.log("future")
    };
};

//save on button click 9
$('#saveBtn9').on('click', function() {   
    var input = $('#taskNine').textContent
    console.log(input)
    localStorage.setItem("textNine", input)
});

hourStatus9();
hourStatus10();
hourStatus11();
hourStatus12();
hourStatus13();
hourStatus14();
hourStatus15();
hourStatus16();
hourStatus17();
setDate();