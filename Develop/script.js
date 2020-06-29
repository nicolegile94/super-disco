//$(".time-block").on("click", "p", function() {
  //  var text = $(this).text().trim();
    //var textInput = $("<textarea>").addClass("row").val(text);
    //$(this).replaceWith(textInput);
//});

//$(".time-block").on("click", "button", function(){
  //  var text = $(this).closest("p").val();
    //console.log(text)
    //localStorage.setItem("schedule", JSON.stringify(text));
//})


setDate = function() {
    var currentDate = document.getElementById("date");
    currentDate.textContent = moment().date();
};


setDate();