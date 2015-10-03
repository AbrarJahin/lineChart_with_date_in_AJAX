google.load('visualization', '1.1', {packages: ['line', 'corechart']});


function get_ajax_data_for_total_user()
{
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    data.addColumn('number', "Total Users");

    var jsonData = $.ajax({
                              url: "ajax.php",
                              dataType: "json",
                              async: false
                            }).responseText;
    var temp_AJAX_data=[];
    $.each($.parseJSON(jsonData), function(index, element)
    {
        var time_year=0,time_month=0,time_day=0,time_hour=0,time_min=0,time_sec=0,total_user_no=0;
        //console.log(index+" Start");
        $.each(element,function(key,value)
        {
            if(key.localeCompare('time_year')==0)
            {
                time_year=value;
            }
            else if(key.localeCompare('time_month')==0)
            {
                time_month=value;
            }
            else if(key.localeCompare('time_day')==0)
            {
                time_day=value;
            }
            else if(key.localeCompare('time_hour')==0)
            {
                time_hour=value;
            }
            else if(key.localeCompare('time_min')==0)
            {
                time_min=value;
            }
            else if(key.localeCompare('time_sec')==0)
            {
                time_sec=value;
            }
            else if(key.localeCompare('total_user_no')==0)
            {
                total_user_no=value;
            }
        });
        temp_AJAX_data.push([new Date(time_year, time_month,time_day,time_hour,time_min,time_sec),  total_user_no]);
    });

    //console.log(temp_AJAX_data);
    data.addRows(temp_AJAX_data);

    return data;
}

function drawChart_totalUser(div_id)
{
    var chartDiv = document.getElementById(div_id);

    var Options =
    {
        chart:
        {
            title: 'No of Users in Different Time'
        },
        width: '100%',
        height: '100%',
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
        }/*,
        animation:
        {
            duration: 1000,
            easing: 'out',
        }*/
    };

    var materialChart = new google.charts.Line(chartDiv);
    materialChart.draw(get_ajax_data_for_total_user(), Options);
}

$(function()
{
    if($("#chart_div").length != 0)
    {
      drawChart_totalUser('chart_div');
    }
});

$( window ).resize(function()
{
    if($("#chart_div").length != 0)
    {
      drawChart_totalUser('chart_div');
    }
});

setInterval(function()
{
    if($("#chart_div").length != 0)
    {
      drawChart_totalUser('chart_div');
    }
}, 20000);