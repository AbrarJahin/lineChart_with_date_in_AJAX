$(function ()                                               //Document Ready
{
    if($("#container").length != 0)     //if the div exists
    {
        drawLineChart('container','ajax.php');
    }
});

setInterval(function()                      //Set Auto Refresh in every 5s
{
    if($("#container").length != 0)     //if the div exists
    {
        drawLineChart('container','ajax.php');
    }
}, 5000);

function drawLineChart(div_id,ajax_source)
{
    $('#'+div_id).highcharts(
    {
        credits:
        {
          enabled: false
        },
        chart:
        {
            type: 'spline'
        },
        plotOptions:
        {
            /*series:                 //Stopping the animation
            {
                animation: false
            },*/
            spline:
            {
                marker:
                {
                    enabled: true
                }
            }
        },
        title:
        {
            text: 'No of Users vs Time'
        },
        subtitle:
        {
            text: 'Toatl no of attenders in this webinar'
        },
        xAxis:
        {
            type: 'datetime',
            /*dateTimeLabelFormats:
            {               //referance =>> https://stackoverflow.com/questions/7101464/how-to-get-highcharts-dates-in-the-x-axis
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '. %b',
                week: '%e. %b',
                month: '%b \'%y',
                year: '%Y'
            },*/
            title:
            {
                text: 'Time'
            }
        },
        yAxis:
        {
            title:
            {
                text: 'Snow depth (m)'
            },
            min: 0
        },
        tooltip:
        {
            headerFormat: '<b>{series.name} :<br/> {point.x:%e %b,%Y - %H:%M:%S}</b><br>',
            pointFormat: '{point.y:.2f} unit'
        },
        series: get_ajax_data(ajax_source)
    });
}

function get_ajax_data(ajax_source)
{
    var jsonData = $.ajax({
                              url       : ajax_source,
                              dataType  : "json",
                              async     : false
                            }).responseText;

    var total_data_from_AJAX = [];
    $.each($.parseJSON(jsonData), function(index, element)
    {
        var name = "";
        var temp_AJAX_data=[];
        $.each(element,function(key_array,value_array)
        {
            if(key_array.localeCompare('name')==0)
            {
                name=value_array;
            }
            else if(key_array.localeCompare('data')==0)
            {
                $.each(value_array,function(key_temp,value_temp)
                {
                    var time_year=0,time_month=0,time_day=0,time_hour=0,time_min=0,time_sec=0,value_of_data=0;
                    $.each(value_temp,function(key,value)
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
                        else if(key.localeCompare('value')==0)
                        {
                            value_of_data=value;
                        }
                    });
                    temp_AJAX_data.push([Date.UTC(time_year, time_month,time_day,time_hour,time_min,time_sec), value_of_data]);
                });
            }
        });
        total_data_from_AJAX.push(
                                    {
                                        name: name,
                                        data: temp_AJAX_data
                                    }
                                );
    });

    return total_data_from_AJAX;
}