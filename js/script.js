/*eslint-env browser*/

//BASIC VARIABLES AND ARRAYS 
var movie1 = [48, 49, 60, 40, 57, 37];
var movie2 = [65, 60, 40, 50, 37, 24];
var one = window.document.getElementById("oneBefore");
var two = window.document.getElementById("twoBefore");
var twoConts = window.document.getElementById("twoContentsBefore");

//HELPER FUNCTION SO JQUERY WASN'T NECESSARY 
var $ = function (id) {
    return window.document.getElementById(id);
};

//ANGULAR APP CONTROLLER 
(function () {
    var app = angular.module('dataDashApp', []);



    app.controller('dataDashController', function ($scope) {

        $scope.movies = [{
            title: "Movie 1",
            date1: "May 3 2015",
            date2: "May 4 2015",
            weekSales: "2,346"
      }, {
            title: "Movie 2",
            date1: "May 3 2015",
            date2: "May 4 2015",
            weekSales: "4,422"
      }]


    })
})();

//CHARTS JS 
function appendChart() {
    "use strict";
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                    label: 'Movie 1',
                    data: movie1,
                    backgroundColor: [
                'rgba(77, 182, 172, .5)'
            ],
                    borderColor: [
                'rgba(77, 182, 172, .5)',
            ],
                    borderWidth: 1
        },
                {
                    label: 'Movie 2',
                    data: movie2,
                    backgroundColor: [
                'rgba(192,192,192,.5)'
            ],
                    borderColor: [
                'rgba(192,192,192,.5)'
            ],
                    borderWidth: 1

                  }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
            }]
            }
        }
    });
}




window.addEventListener("load", init);

function secondModal() {
    "use strict";
    one.setAttribute("class", "slideOut");
    setTimeout(function () {
        one.style.display = "none";
        two.style.display = "block";
        twoConts.style.display = "block";
    }, 300);

    two.querySelector("h6").setAttribute("class", "twoAfter");

    twoConts.setAttribute("class", "twoContentsAfter");


}

function resetModal() {
    one.removeAttribute("class", "slideOut");
    one.style.display = "block";
    two.style.display = "none";
    twoConts.style.display = "none";
    two.querySelector("h6").removeAttribute("class", "twoAfter");
    twoConts.removeAttribute("class", "twoContentsAfter");
}

function clearInputs(){
    var dialog = window.document.querySelector('dialog');
    var inputs = dialog.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i = i + 1){
        inputs[i].value = " ";
    }
}

function pullMovie(e) {
        var dialog = window.document.querySelector('dialog');
        var x = e.currentTarget.parentElement.parentElement.children;
        var y = x[0].textContent;
        window.console.log(y);
        dialog.querySelector("h6").innerHTML = y
        return y;

    }

    function pullName() {
        var x =$("firstName").value;
        var y = $("twoContentsBefore").querySelector("p");
        y.innerHTML = y.innerHTML + x;
        
    }

function init() {

    var dialog = window.document.querySelector('dialog');
    var buttons = window.document.getElementsByTagName('button');
    window.console.log(dialog);
    
    appendChart();
    
    
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }


    for (var i = 0; i < buttons.length; i = i + 1) {
        if (buttons[i].id === "movie") {
            buttons[i].addEventListener('click', function (e) {
                dialog.showModal();
                window.console.log("button one pressed");
                pullMovie(e)

            });
        } else if (buttons[i].id === "agree1") {
            buttons[i].addEventListener("click", function () {
                secondModal();
                pullName();
                
            });


        } else if (buttons[i].id === "close1" || buttons[i].id === "close2" || buttons[i].id === "agree2") {
            buttons[i].addEventListener("click", function () {
                dialog.close();
                resetModal();
                 clearInputs();
            })
        }
    }
}
