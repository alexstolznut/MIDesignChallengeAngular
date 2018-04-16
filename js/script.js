function appendChart(){
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
            data: [19, 3, 6, 7, 13, 9],
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
            display:false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

appendChart();

//window.addEventListener('load', appendChart);

