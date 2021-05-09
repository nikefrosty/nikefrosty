//listening for message from popup

chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
   if( request.msg === "Collect Details" ) {
// Handle the message
console.log("received request");
console.log(request.msg+" Request received");


  function getData(){
var details = {}// an object to store the values

//assigning values to object elements
details.requestor=document.getElementsByClassName("ms-Persona-primaryText")[0].innerText;
details.requestAmount=document.getElementsByClassName("innercolumnright_59f82a33")[23].innerText;
details.productOrderNumber=document.getElementsByClassName("ms-TextField-field")[10].value;
details.procurementSpecialist=document.getElementsByClassName("ms-TextField-field")[13].value;
details.OCIO_ServiceLine=document.getElementsByClassName("ms-Dropdown-titleIsPlaceHolder")[4].innerText;


//assiginng table values
let table_row= document.getElementsByClassName("ms-Table")[0]["rows"][1];
details.fundType=table_row.children[4].innerText;
details.fundedBy=table_row.children[3].innerText;
details.costCenter=table_row.children[6].innerText;
details.expenseAccount=table_row.children[7].innerText;
//details.peopleSoftProject=table_row.children[8].innerText;
details.amount=table_row.children[5].innerText;
details.Opex_ID=table_row.children[9].innerText;

details.vendorCompanyName=document.getElementsByClassName("ms-TextField-field")[13].value;
details.approvedVendor=document.getElementsByClassName("ms-Dropdown-title")[11].children[0].innerText;


console.log(details);
//sending the fetched data to popup
chrome.runtime.sendMessage({"msg":"details fetched","data":details});

  }

getData()


}
});
