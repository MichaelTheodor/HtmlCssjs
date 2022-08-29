?>
<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title> Database results </title>
<link rel="stylesheet" href="form.css">
</head>
<body>
<br><br><br><br>
<a href=http://localhost/php_applications/GR_Airlines/index.html><button  type="button" name="go_to_form" id="go_to_form" value="Return to form">Return to form</button></a>
</body>
</html>		
<?php

include_once 'database.php';

if(isset($_POST['button_submit'])  && $_POST['button_submit']==='Submit')
{	 
	 $firstname = $_POST['firstname'];
	 $lastname = $_POST['lastname'];
	 $birthday = $_POST['birthday'];
	 $address = $_POST['address'];
	 $country = $_POST['country'];
	 $zip_code = $_POST['zip_code'];
	 $email = $_POST['email'];
	 $phone_number=$_POST['phone_number'];
	 $cellphone_number=$_POST['cellphone_number'];
	 $credit_card_number=$_POST['credit_card_number'];
     $credit_card_type=$_POST['credit_card_type'];
     $departure=$_POST['departure'];
     $destination=$_POST['destination'];
     $destination1=$_POST['destination1'];
     $travel=$_POST['travel'];
     $return1=$_POST['return1'];
     $destination2=$_POST['destination2'];
     $destination3=$_POST['destination3']; 
     $travel2=$_POST['travel2'];
     $travel3=$_POST['travel3'];
     $adult_pass=$_POST['adult_pass'];
     $pass_number=$_POST['pass_number'];
     $children_5_17=$_POST['children_5_17'];
     $pass_number1=$_POST['pass_number1'];
     $children_b4=$_POST['children_b4'];
     $pass_number2=$_POST['pass_number2'];
     $infants=$_POST['infants'];
     $pass_number3=$_POST['pass_number3'];
	 

	 $query = "INSERT INTO passengers_table (firstname,lastname,birthday,address,country,zip_code,email,phone_number,cellphone_number,credit_card_number,credit_card_type,departure,destination,destination1,travel,return1,destination2,destination3,travel2,travel3,adult_pass,pass_number,children_5_17,pass_number1,children_b4,pass_number2,infants,pass_number3) 
	 values ('$firstname','$lastname','$birthday','$address','$country','$zip_code','$email','$phone_number','$cellphone_number','$credit_card_number','$credit_card_type','$departure','$destination','$destination1','$travel','$return1','$destination2','$destination3','$travel2','$travel3','$adult_pass','$pass_number','$children_5_17','$pass_number1','$children_b4','$pass_number2','$infants','$pass_number3')";

	 if($result = pg_query($query))
	 {
		echo "Data Added Successfully.";
	 }
	 else{
		echo "Error.";
	 }
}

if (isset($_GET['search']) && $_GET['search']==='Search')
{  
    $email=$_GET['email'];

    $query= "SELECT * FROM passengers_table WHERE email='".$_GET['email']."';";

   if($result=pg_query($query))
	{
		echo "<table style='border:1px solid black'>";
		echo '<tr> 
		<th>Firstname</th>
		<th>Lastname</th>
		<th>Date of birth</th>
		<th>Country</th>
		<th>Zip code</th>
		<th>Email</th>
		<th>Phone number</th>
		<th>Cellphone number</th>
		<th>Credit Card Number</th>
		<th>Credit Card Type</th>
		<th>Departs</th>
		<th>From</th>
		<th>To</th>
		<th>Oneway</th>
		<th>Returns</th>
		<th>From</th>
		<th>To</th>
		<th>Direct flights</th>
		<th>Flexible dates</th>
		<th>Adults</th>
		<th>Number</th>
		<th>Children 5-17</th>
		<th>Number</th>
		<th>Children 2-4</th>
		<th>Number</th>
		<th>Infants</th>
		<th>Number</th></tr>';

		//Shows results in rows of array //

		while($row = pg_fetch_array($result)) 
		{
		echo "<tr><td>".$row['firstname']."</td>".
		"<td>".$row['lastname']."</td>".
		"<td>".$row['birthday']."</td>".
		"<td>".$row['country']."</td>".
		"<td>".$row['zip_code']."</td>".
		"<td>".$row['email']."</td>".
		"<td>".$row['phone_number']."</td>".
		"<td>".$row['cellphone_number']."</td>".
		"<td>".$row['credit_card_number']."</td>".
		"<td>".$row['credit_card_type']."</td>".
		"<td>".$row['departure']."</td>".
		"<td>".$row['destination']."</td>".
		"<td>".$row['destination1']."</td>".
		"<td>".$row['travel']."</td>".
		"<td>".$row['destination2']."</td>".
		"<td>".$row['destination3']."</td>".
		"<td>".$row['travel2']."</td>".
		"<td>".$row['travel3']."</td>".
		"<td>".$row['adult_pass']."</td>".
		"<td>".$row['pass_number']."</td>".
		"<td>".$row['children_5_17']."</td>".
		"<td>".$row['pass_number1']."</td>".
		"<td>".$row['children_b4']."</td>".
		"<td>".$row['pass_number2']."</td>".
		"<td>".$row['infants']."</td>".
		"<td>".$row['pass_number3']."</td></tr>";
    }
    echo "</table>" ;
	}
	else
	{
		echo "Error.";
	}	
}
