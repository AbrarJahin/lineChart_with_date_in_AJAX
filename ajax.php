<?php

	function random_one_entry($time_day)
	{
	    return array(
						'time_year'		=> 2015,
						'time_month'	=> 10,
						'time_day'		=> $time_day,
						'time_hour'		=> rand(0,24),
						'time_min'		=> rand(0,60),
						'time_sec'		=> rand(0,60),
						'value'			=> rand()
					);
	}

	function random_single_data_generate($max_no_of_dataset_per_data)
	{
		$data_to_return=[];
		if($max_no_of_dataset_per_data<2)$max_no_of_dataset_per_data=2;
		$total_no_of_data = rand(2,$max_no_of_dataset_per_data);
		for ($x = 1; $x <= $total_no_of_data; $x++)
		{
		    $data_to_return[] = random_one_entry($x);
		}
		return $data_to_return;
	}

	function random_data_generate($max_no_of_lines_to_draw,$max_no_of_dataset_per_data)
	{
		$data_to_return=[];
		if($max_no_of_lines_to_draw<1)$max_no_of_lines_to_draw=1;
		$total_no_of_data = rand(1,$max_no_of_lines_to_draw);			//Total no of lines
		for ($x = 1; $x <= $total_no_of_data; $x++)
		{
		    $data_to_return[] = array(
		    							'name' => 'Line No '.$x,
    									'data' => random_single_data_generate($max_no_of_dataset_per_data)
		    						);
		}
		return $data_to_return;
	}

    echo json_encode(random_data_generate(10,30));			//2 = no of line (max), 3=no of data per line (max)
?>