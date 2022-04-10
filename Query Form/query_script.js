// Storing necessary DOM Elements in variables for future use 

let viewbtn = document.getElementById("view-query-btn");
let queryform = document.getElementById("query-form");
let querydata = document.getElementById("query-data")
let queryheading = document.getElementById("query-heading")


let name_input = document.getElementById("name");
let mail_input = document.getElementById("mail");
let query_subject_select = document.getElementById("query-subject");
let query_text = document.getElementById("query-text");

// Global variables to store form values.

let name_val;
let mail_val;
let query_subject_val;
let query_text_val;

let query_data_name = document.getElementById("query-data-name");
let query_data_mail = document.getElementById("query-data-mail");
let query_data_subject = document.getElementById("query-data-subject");
let query_data_details = document.getElementById("query-data-details");

let editbtn = document.getElementById("edit-query-btn");


querydata.style.display = 'none';



// Adding event listeners to buttons.
viewbtn.addEventListener("click", viewquery);
editbtn.addEventListener("click", editquery);


// Hide the query summary and Show the form with previously entered values.
function editquery() {
    
    queryheading.innerText = "Enter your queries";
    queryform.style.display ="block";
    querydata.style.display = 'none';


    name_input.value = name_val;
    mail_input.value = mail_val;
    query_subject_select.value = query_subject_val
    query_text.value = query_text_val; 
}

// Function to run on view query button is clicked.
function viewquery(){
    
    //Get form values
    name_val = name_input.value;
    mail_val = mail_input.value;
    query_subject_val = query_subject_select.value;
    query_text_val = query_text.value;

    console.log(name_val);
    console.log(mail_val);
    console.log(query_subject_val);
    console.log(query_text_val);

    // Check if all compulsary fields are entered.
    if (name_val != "" && mail_val != "" && query_subject_val != "" && query_text_val != "") {
        
        // Hide the form and Show the user query summary 
        queryheading.innerText = "Review your query";
        queryform.style.display ="none";
        querydata.style.display = 'block';

        query_data_name.innerText = name_val;
        query_data_mail.innerText = mail_val;
        query_data_subject.innerText = query_subject_val;
        query_data_details.innerText = query_text_val;
    
    } else {
        // If there are any missing fields generate a alert message and prompt the user to fill the fields.

        let alert_str = "Please fill in the\n\n"; // Variable to store the alert message shown to the user.
        if (name_val == "") {
            
            alert_str += "name field\n\n";
        }

        if (mail_val == "") {
            
            alert_str += "mail field\n\n";
        }

        if (query_subject_val == "") {
            
            alert_str += "query subject field\n\n";
        }

        if (query_text_val == "") {
            
            alert_str += "your query.";
        }
        alert(alert_str); // Showing the alert.
    }
    

}