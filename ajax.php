<?php
      $JSON = array(
					array(
								'time_year'		=> 2005,
								'time_month'	=> 10,
								'time_day'		=> 12,
								'time_hour'		=> 2,
								'time_min'		=> 30,
								'time_sec'		=> 12,
								'total_user_no'	=> 100 
							),
					array(
								'time_year'		=> 2005,
								'time_month'	=> 11,
								'time_day'		=> 12,
								'time_hour'		=> 2,
								'time_min'		=> 30,
								'time_sec'		=> 12,
								'total_user_no'	=> 190 
							),
					array(
								'time_year'		=> 2005,
								'time_month'	=> 12,
								'time_day'		=> 12,
								'time_hour'		=> 2,
								'time_min'		=> 30,
								'time_sec'		=> 12,
								'total_user_no'	=> 90 
							),
					array(
								'time_year'		=> 2006,
								'time_month'	=> 1,
								'time_day'		=> 12,
								'time_hour'		=> 2,
								'time_min'		=> 30,
								'time_sec'		=> 12,
								'total_user_no'	=> 180 
							)
                    );
      echo json_encode($JSON);
?>