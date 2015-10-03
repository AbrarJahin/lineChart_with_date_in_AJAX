google.load('visualization', '1.1', {packages: ['line', 'corechart']});

function drawChart()
{
    var chartDiv = document.getElementById('chart_div');
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    //data.addColumn('number', "Time");
    data.addColumn('number', "Total Users");

    data.addRows(
                    [
                        [new Date(2014, 0,1,1,1,11),  -.5],
                        [new Date(2014, 0,1,1,1,21),   .4],
                        [new Date(2014, 0,1,1,1,31),   .5],
                        [new Date(2014, 0,1,1,1,41),  2.9],
                        [new Date(2014, 0,1,1,1,51),  6.3],
                        [new Date(2014, 0,1,1,2,01),    9],
                        [new Date(2014, 0,1,1,2,11), 10.6],
                        [new Date(2014, 0,1,1,2,21), 10.3],
                        [new Date(2014, 0,1,1,2,41),  7.4],
                        [new Date(2014, 0,1,1,2,51),  4.4],
                        [new Date(2014, 0,1,1,3,11), 1.1],
                        [new Date(2014, 0,1,1,3,31), -.2]
                    ]
                );

    var Options =
    {
        chart:
        {
            title: 'No of Users in Different Time'
        },
        width: 900,
        height: 500,
        series:
        {
            // Gives each series an axis name that matches the Y-axis below.
            0: {axis: 'Temps'},
            1: {axis: 'Daylight'}
        },
        axes:
        {
            // Adds labels to each axis; they don't have to match the axis names.
            y:
            {
                Temps: {label: 'Total Users'}
            }
        }
    };
    var materialChart = new google.charts.Line(chartDiv);
    materialChart.draw(data, Options);
}

$(function()
{
    //console.log("loaded");
    drawChart();
});

$( window ).resize(function()
{
    //console.log("resize");
    drawChart();
});