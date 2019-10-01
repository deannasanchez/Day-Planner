var plannerText = $("#planner-text");
var saveBtn = $(".save");
var $plannerOutput = $(".planner-output");
var $currentDayElem = $("#currentDay");


var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

currentDayf();
renderPlanner();

function currentDayf () {
        var currentDay = moment();
        $currentDayElem.text(currentDay.format("MMMM Do, YYYY"));
};

function renderPlanner () {
    $plannerOutput.html(" ");

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
    
        
        $("<p>").textContent(todo);
        $plannerOutput.append($("<p>"));
      }
}

saveBtn.on("click", function(event) {
    event.preventDefault();
    var plan = put.value;
})

