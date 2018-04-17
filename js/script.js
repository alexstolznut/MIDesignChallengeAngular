/*eslint-env browser*/
var movie1 = [12, 19, 3, 5, 2, 3];
var movie2 = [19, 3, 6, 7, 13, 9];
var one = window.document.getElementById("oneBefore");
var two = window.document.getElementById("twoBefore");
var twoConts = window.document.getElementById("twoContentsBefore");


function appendChart() {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                    label: '# of Votes',
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
                    label: '# of Votes 2',
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
                        beginAtZero: true
                    }
            }]
            }
        }
    });
}

appendChart();

//function changeElementColor() {
//    "use strict";
//    var test = document.getElementsByTagName('dialog');
//    var mdl = document.getElementsByTagName('.mdl-dialog');
//    window.console.log(test);
//    test[1].setAttribute("open", "");
//    test[1].style.width = "280px";
//    test[1].style.display = "block";
//    test[1].style.position = "absolute";
//    test[1].style.right = "0px";
//    test[1].style.left = "0px";
//    test[1].style.margin = "auto";
//    window.console.log(test);
//
//}

function secondModal() {
    one.setAttribute("class", "slideOut");
    setTimeout(function () {
        one.style.display = "none";
        two.querySelector("h6").setAttribute("class", "twoAfter");

        twoConts.setAttribute("class", "twoContentsAfter");
        two.style.display = "block";
        twoConts.style.display = "block";
    }, 2000);

    //    setTimeout(function(){
    //        twoConts.style.display = "block";
    //    },4000)
    //    


    //    two.style.display = "block";


}

function resetModal() {
    one.removeAttribute("class", "slideOut");
}


var dialog = window.document.querySelector('dialog');
var buttons = window.document.getElementsByTagName('button');
window.console.log(dialog);
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}

for (var i = 0; i < buttons.length; i = i + 1) {
    if (buttons[i].id === "movie1" || buttons[i].id === "movie2") {
        buttons[i].addEventListener('click', function () {
            dialog.showModal();

        });
    } else if (buttons[i].id === "agree1") {
        window.console.log("agree");
        buttons[i].addEventListener("click", secondModal);

    } else if (buttons[i].id === "close1" || buttons[i].id === "close2" || buttons[i].id === "agree2") {
        buttons[i].addEventListener("click", function () {
            dialog.close();
            resetModal();
            one.style.display = "block";
            two.style.display = "none";
        })
    }
}
//for (var i = 0; i < buttons.length; i = i + 1) {
//    if (buttons[i].id === "movie1" || buttons[i].id === "movie2") {
//        buttons[i].addEventListener('click', function(){
//        dialog[0].showModal();
//            
//        });
//    } else if(buttons[i].id === "agree1" || buttons[i].id ==="close1") {
//    
//    }
//        if (buttons[i].className !== "mdl-button agree" || buttons[i].clasName !== "mdl-button close") {
//            window.console.log("agree");
//            window.console.log("close");
//
//            buttons[i].addEventListener('click', function () {
//                dialog[0].showModal();
//            });
//        } else if (buttons[i].className === "mdl-button agree2" || buttons[i].className === "mdl-button close2") {
//            window.console.log("agree2");
//            window.console.log("close2");
//        }


//dialog[0].querySelector('.close').addEventListener('click', function () {
//    dialog[0].close();
//});
//dialog[0].querySelector('.agree').addEventListener('click', function () {
//    dialog[0].close();
//    //    purchaseDialog.setAttribute('open');
//    changeElementColor();
//});


//window.addEventListener('load', appendChart);
