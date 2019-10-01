var plannerText = $("#planner-text");
var saveBtn = $(".saveBtn");
var $plannerOutput = $(".planner-output");
var $currentDayElem = $("#currentDay");


var todos = [""];

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
        var td = $("<td>", "td")
        td.text(todo);
        $plannerOutput.append(td);
      }
};

saveBtn.on("click", function(event) {
    event.preventDefault();
    var plan = plannerText.val();
    plan = plan.trim();
    todos.push(plan);
    renderPlanner();
  });
