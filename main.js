var selectedRow = null

function onFormSubmit(e) {
    debugger;
    event.preventDefault();
    var abc = validate();
    if (abc) {
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        }
        else {
            updateRecord(formData);
        }
        resetForm();
    }
    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["bookName"] = document.getElementById("bookName").value;
    formData["courseName"] = document.getElementById("courseName").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
    console.log(formData);
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.bookName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseName;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> `;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = ` <button  onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("bookName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("courseName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.bookName;
    selectedRow.cells[2].innerHTML = formData.courseName;
    selectedRow.cells[3].innerHTML = formData.price;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("id").value = '';
    document.getElementById("bookName").value = '';
    document.getElementById("courseName").value = '';
    document.getElementById("price").value = '';
    selectedRow = null;
}


function validate() {

    var userSubject = document.getElementById("id");
    var userBook = document.getElementById("bookName");
   
    var userCourse = document.getElementById("courseName");
    var userPrice = document.getElementById("price");


    var checkSubject =/[0-9.0-9]/
    var checkbook = /[a-zA-Z]$/
   
    var checkCourse  = /[a-zA-Z 0-9]$/
    var checkPrice = /[0-9.0-9]/

let testingValue = 0;

if( userSubject== " " || userSubject == undefined )
{
    alert("id is required");
     return false;
}


else if (checkSubject.test(userSubject.value)) {
    testingValue++;
}
else {
   
    document.getElementById("bookid").innerHTML="enter numeric value only";
  
   return false;
}

if( userBook== " " || userBook == undefined )
{
    alert("book name is required");
     return false;
}



 else   if (checkbook.test(userBook.value)) {
        testingValue++;
    }
    else {
      
        document.getElementById("nameerrmsg").innerHTML="enter alphabates only";
        return false;
    }
     
    if( userCourse== " " || userCourse == undefined )
    {
        alert("course name is required");
         return false;
    }
    

 else   if (checkCourse.test(userCourse.value)) {
        testingValue++;
    }
    else {
       
        document.getElementById("courseerrmsg").innerHTML="enter numeric and alphabatic value";
        return false;
    }

    if( userPrice== " " || userPrice == undefined )
    {
        alert("book price is required");
         return false;
    }
    


 else   if (checkPrice.test(userPrice.value)) {
        testingValue++;
    }
    else {
    
        document.getElementById("priceerrmsg").innerHTML="enter number value only";
        return false;
    }
    if(testingValue>0){
        
        return true;
    }
}