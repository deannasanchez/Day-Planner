var plannerText = $("#planner-text");
var saveBtn = $(".saveBtn");
var $plannerOutput = $(".planner-output");
var $currentDayElem = $("#currentDay");


var todos = [];

currentDayf();
renderPlanner();
init();

function currentDayf () {
        var currentDay = moment();
        $currentDayElem.text(currentDay.format("MMMM Do, YYYY"));
};

function renderPlanner () {
    $plannerOutput.append(" ");

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];
        //var $targetID = $("#"+stringify)
        // var td = $("<td>")
        $plannerOutput.append(todo);
        // $plannerOutput.attr(td);
        //var $targetid = $("#"+stringify(todo.time))
      }
};

  function init() {
      var plansStr = localStorage.getItem("todos");
    //   if (!(plansStr === null || plansStr === "")){
    //       todos = JSON.stringify(plansStr);
    //   }
      storePlans();
      renderPlanner();
  }

  function storePlans() {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  saveBtn.on("click", function(event) {
    event.preventDefault();
    localStorage.clear()
    var plan = plannerText.val().trim();
    console.log(plan)
    todos.push(plan);
    renderPlanner();
    storePlans();
  });
