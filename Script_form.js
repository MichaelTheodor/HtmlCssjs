var form = document.getElementById('form');

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var birthday = document.getElementById('birthday');
var address = document.getElementById('address');
var country = document.getElementById('country');
var zip_code = document.getElementById('zip_code');
var email = document.getElementById('email');
var phone_number = document.getElementById('phone_number');
var cellphone_number = document.getElementById('cellphone_number');
var credit_card_number = document.getElementById('credit_card_number');
var credit_card_type = document.getElementById('credit_card_type');

var departure = document.getElementById('departure');
var destination = document.getElementById('destination');
var destination1 = document.getElementById('destination1');
var destination2 = document.getElementById('destination2');
var destination3 = document.getElementById('destination3');
var travel = document.getElementById('travel');
var return1 = document.getElementById('return1');
var travel2 = document.getElementById('travel2');
var travel3 = document.getElementById('travel3');
var adult_pass = document.getElementById('adult_pass');
var children_5_17 = document.getElementById('children_5_17');
var children_b4 = document.getElementById('children_b4');
var infants = document.getElementById('infants');
var pass_number = document.getElementById('pass_number');
var pass_number1 = document.getElementById('pass_number1');
var pass_number2 = document.getElementById('pass_number2');
var pass_number3 = document.getElementById('pass_number3');

var error = document.getElementById("error");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");
var error5 = document.getElementById("error5");
var error6 = document.getElementById("error6");
var error7 = document.getElementById("error7");
var error8 = document.getElementById("error8");

var button_submit = document.getElementById('button_submit');
var button_print = document.getElementById('button_print');
var button_clear= document.getElementById("button_clear");

    // Clears the form and errors// 
    


function Clear_form()
{
    firstname.value=" "; 
    lastname.value=" ";
    birthday.value="yy-MM-dd";
    address.value=" ";
    country.value="Please choose your country";
    zip_code.value=" ";
    email.value=" ";
    phone_number.value=" ";
    cellphone_number.value=" ";
    departure.value="yy-MM-dd";
    destination.value=" ";
    destination1.value=" ";
    destination2.value=" ";
    destination3.value=" ";
    travel.checked =false;
    travel2.checked =false;
    travel3.checked =false;
    return1.value="yy-MM-dd";
    adult_pass.checked =false;
    children_5_17.checked =false;
    children_b4.checked = false;
    infants.checked = false;
    pass_number.value="0";
    pass_number1.value="0";
    pass_number2.value="0";
    pass_number3.value="0";
    credit_card_number.value=" ";
    credit_card_type.value="Please choose your credit card";
    error.innerText=null;
    error1.innerText=null;
    error2.innerText=null;
    error3.innerText=null;
    error4.innerText=null;
    error5.innerText=null;
    error6.innerText=null;
    error7.innerText=null;
    error8.innerText=null;    
    firstname.style="";
    lastname.style="";
    address.style="";
    zip_code.style="";
    email.style="";
    phone_number.style="";
    cellphone_number.style="";
    credit_card_number.style="";
    credit_card_type.style="";
}

    // Prints the form //

button_print.addEventListener("click", function (){printPage();});

function printPage()
{
    window.print();
}

// Runs validation //

function Validate_form()
{  
    
    if (Validate_firstname () && Validate_lastname() && Validate_address() && Validate_zip_code() && Validate_email() &&  Validate_phone_number() && Validate_cellphone_number() && Validate_credit_card_number() && Validate_credit_card_type())
        {
            thank_you();
            return true;
        }
    else 
    {
          
        return false;
    }                                
} 

    // Validates Firstname //

function Validate_firstname() 
{ 
    
    if (firstname.value.length >0 && /^[A-Za-z]*[^0-9]$/.test(firstname.value) &&  firstname.value.length <= 20 )  
    { 
        firstname.style="";
        return true;
    }
    else
    {
        if (firstname.value.length ==0 )
        {
            alert("Firstname is required");
            error.innerText = "Firstname is required";
            firstname.style="border:2px solid red;";
            return false;
        }
        else if ( !(/^[A-Za-z]*[^0-9]$/).test(firstname.value))
        {
            alert("Please type only Latin characters");
            error.innerText = "Please type only Latin characters";
            firstname.style="border:2px solid red;";
            return false;
        }
        else if(firstname.value.length > 20)
        {
            alert("Firstname must be less than 20 characters");
            error.innerText =  "Firstname must be less than 20 characters";
            firstname.style="border:2px solid red;";
            return false;
        }
    }
} 

    // Validates Lastname //

function Validate_lastname() 
{
    if (lastname.value.length >0 && /^[A-Za-z]*[^0-9]$/.test(lastname.value) &&  lastname.value.length <= 20 )  
    { 
        lastname.style="";
        return true;
    }
    else
    {
        if (lastname.value.length ==0 )
        {
            alert("Lastname is required");
            error1.innerText = "Lastname is required";
            lastname.style="border:2px solid red;";
            return false;
            
        }
        else if ( !(/^[A-Za-z]*[^0-9]$/).test(lastname.value))
        {
            alert("Please type only Latin characters");
            error1.innerText = "Please type only Latin characters";
            lastname.style="border:2px solid red;";
            return false;
            
        }
        else if(lastname.value.length > 20)
        {
            alert("Lastname must be less than 20 characters");
            error1.innerText = "Lastname must be less than 20 characters";
            lastname.style="border:2px solid red;";
            return false;
        }
    }
} 

    // Validates Address //

function Validate_address()
{
    if (address.value.length >0 && /^[A-Za-z]+[^0-9] +[0-9]+$/.test(address.value) &&  address.value.length <= 25 )  
    { 
        address.style="";
        return true;
    }
    else
    {
        if (address.value.length ==0 )
        {
            alert("Address is required");
            error2.innerText = "Address is required";
            address.style="border:2px solid red;";
            return false;
            
        }
        else if ( !(/^[A-Za-z]+[^0-9] +[0-9]+$/).test(address.value))
        {
            alert("Please type your address with latin characthers and then your address number");
            error2.innerText = "Please type your address with latin characthers and then your address number";
            address.style="border:2px solid red;";
            return false;
            
        }
        else if(address.value.length > 25)
        {
            alert("Address must be less than 25 characters");
            error2.innerText = "Address must be less than 25 characters";
            address.style="border:2px solid red;";
            return false;
            
        }
    }
}

    // Validates Zip code //

function Validate_zip_code()
{
    if (zip_code.value.length >0 && /^[0-9]+$/.test(zip_code.value) &&  zip_code.value.length === 5 )  
    { 
        zip_code.style="";
        return true;
    }
    else
    {
        if (zip_code.value.length ==0 )
        {
            alert("Zip code is required");
            error3.innerText = "Zip code is required";
            zip_code.style="border:2px solid red;";
            return false;
            
        }
        else if ( !(/[0-9]+/).test(zip_code.value) )
        {
            alert("Please type only numbers");
            error3.innerText = "Please type only numbers";
            zip_code.style="border:2px solid red;";
            return false;
            
        }
        else if(zip_code.value.length !== 5)
        {
            alert("Zip code  must be exactly 5 characters");
            error3.innerText = "Zip code  must be exactly 5 characters";
            zip_code.style="border:2px solid red;";
            return false;
            
        }
    }
}

    // Validates Email //

function Validate_email() 
{
    if (email.value.length >0 && /^[a-zA-Z0-9.-_%+]+@[a-zA-Z0-9.-_%+]+\.[a-zA-Z]+$/.test(email.value) &&  email.value.length <= 40 )  
    { 
        email.style="";
        return true;
        
    }
    else
    {
        if (email.value.length ==0 )
        {
            alert("Your Email is required");
            error4.innerText ="Your Email is required";
            email.style="border:2px solid red;";
            return false;
            
        }
        else if ( !(/^[a-zA-Z0-9.-_%+]+@[a-zA-Z0-9.-_%+]+\.[a-zA-Z]+$/).test(email.value))
        {
            alert("Please type your email according to the correct format");
            error4.innerText = "Please type your email according to the correct format";
            email.style="border:2px solid red;";
            return false;
            
        }
        else if(email.value.length > 40)
        {
            alert("Email must be less than 40 characters");
            error4.innerText = "Email must be less than 40 characters";
            email.style="border:2px solid red;";
            return false;
            
        }
    }
}

    // Validates Phone number //

function Validate_phone_number() 
{
    if (phone_number.value.length >0 && /^\+3021[0-9]*$/.test(phone_number.value) &&  phone_number.value.length === 13 )  
    { 
        phone_number.style="";
        return true;
         
    }
    else
    {
        if (phone_number.value.length ==0 )
        {
            alert("Phone number is required");
            error5.innerText = "Phone number is required";
            phone_number.style="border:2px solid red;";
            return false;
            
        }
        else if ( !(/^\+3021[0-9]*$/).test(phone_number.value))
        {
            alert("Please type only numbers according to the designated format");
            error5.innerText = "Please type only numbers according to the designated format";
            phone_number.style="border:2px solid red;";
            return false;
            
        }
        else if(phone_number.value.length !==13)
        {
            alert("Phone number must be exactly 13 characters");
            error5.innerText = "Phone number must be exactly 13 characters";
            phone_number.style="border:2px solid red;";
            return false;
            
        }
    }
} 

    // Validates Cellphone number //

function Validate_cellphone_number() 
{
    if (cellphone_number.value.length >0 && /^\+3069[0-9]+$/.test(cellphone_number.value) &&  cellphone_number.value.length ===13 )  
    { 
        cellphone_number.style="";
        return true;
         
    }
    else
    {
        if (cellphone_number.value.length ==0 )
        {
            alert("Cellphone number is required");
            error6.innerText = "Cellphone number is required";
            cellphone_number.style="border:2px solid red;";
            return false;
            
        }
        else if ( !(/^\+3069[0-9]+$/).test(cellphone_number.value))
        {
            alert("Please type only numbers according to the designated format");
            error6.innerText = "Please type only numbers according to the designated format";
            cellphone_number.style="border:2px solid red;";
            return false;
            
        }
        else if(cellphone_number.value.length !==13)
        {
            alert("Cellphone number must be exactly 13 characters");
            error6.innerText = "Cellphone number must be exactly 13 characters";
            cellphone_number.style="border:2px solid red;";
            return false;
            
        }
    }
} 

    // Validates Credit card number //

function Validate_credit_card_number() 
{
    if (credit_card_number.value.length >0 && /\d{16}$/.test(credit_card_number.value) &&  credit_card_number.value.length === 16 )  
    { 
        credit_card_number.style="";
        return true;
         
    }
    else
    {
        if (credit_card_number.value.length ==0 )
        {
            alert("Your Credit card number is required if you like to book with us");
            error7.innerText = "Your Credit card number is required if you like to book with us";
            credit_card_number.style="border:2px solid red;";
            return false;
            
        }
        else if ( !(/^[0-9]+$/).test(credit_card_number.value))
        {
            alert("Please type only numbers");
            error7.innerText = "Please type only numbers";
            credit_card_number.style="border:2px solid red;";
            return false;
            
        }
        else if(credit_card_number.value.length !=16 )
        {
            alert("Credit card number must be exactly 16 characters");
            error7.innerText = "Credit card number must be exactly 16 characters";
            credit_card_number.style="border:2px solid red;";
            return false;
            
        }
    }
} 

function Validate_credit_card_type() 
{
    if (credit_card_type.value !="Please choose your credit card" )
    { 
        credit_card_type.style="";
        return true;
         
    }
    else
    {
        if (credit_card_type.value=="Please choose your credit card" )
        {
            alert("Your Credit card type is required if you like to book with us");
            error8.innerText = "Your Credit card type is required if you like to book with us";
            credit_card_type.style="border:2px solid red;";
            return false;
            
        }   
    }
} 

function thank_you() 
{
    alert("Thank you, your booking has been submitted!");
}


