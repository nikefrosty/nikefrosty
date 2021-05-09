
$(function() {
 // Sending a message to content.js to fetch data

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   chrome.tabs.sendMessage(tabs[0].id, {msg:"Collect Details"});

   console.log("sent message");
 });

});

chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
   if( request.msg === "details fetched" ) {
     window.details={};
    window.details=request.data;
     console.log(request.msg);
     console.log(window.details);
        }
  }
);

$(document).ready(function(){
    $("#loadbtn").click(function(){
      //handle
      console.log(window.details['requestor']);
      $("#requestor").text(window.details['requestor']);
      $("#request-amount").text(window.details['requestAmount']);
      $("#funded-by").text(window.details['fundedBy']);
      $("#fund-type").text(window.details['fundType']);
      $("#amount").text(window.details['amount']);
      $("#cost-center").text(window.details['costCenter']);
      $("#opex-id").text(window.details['Opex_ID']);
      $("#PON").text(window.details['productOrderNumber']);
      $("#service-line").text(window.details['OCIO_ServiceLine']);
      $("#procure-spec").text(window.details['procurementSpecialist']);
      $("#exp-accnt").text(window.details['expenseAccount']);
      $("#approved-vendor").text(window.details['approvedVendor']);
      $("#vendr-comp-name").text(window.details['vendorCompanyName']);


      $(".extracted").attr("hidden", false);

    });
});


$(document).ready(function(){
    $("#requestor-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#requestor").text(currentText);
    });
});

$(document).ready(function(){
    $("#request-amount-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#request-amount").text(currentText);
    });
});

$(document).ready(function(){
    $("#funded-by-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#funded-by").text(currentText);
    });
});

$(document).ready(function(){
    $("#fund-type-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#fund-type").text(currentText);
    });
});

$(document).ready(function(){
    $("#amount-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#amount").text(currentText);
    });
});

$(document).ready(function(){
    $("#cost-center-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#cost-center").text(currentText);
    });
});

$(document).ready(function(){
    $("#opex-id-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#opex-id").text(currentText);
    });
});

$(document).ready(function(){
    $("#PON-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#PON").text(currentText);
    });
});

$(document).ready(function(){
    $("#service-line-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#service-line").text(currentText);
    });
});

$(document).ready(function(){
    $("#procure-spec-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#procure-spec").text(currentText);
    });
});

$(document).ready(function(){
    $("#exp-accnt-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#exp-accnt").text(currentText);
    });
});

$(document).ready(function(){
    $("#approved-vendor-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#approved-vendor").text(currentText);
    });
});

$(document).ready(function(){
    $("#vendr-comp-name-updated").keyup(function(){
        // Getting the current value of textarea
        var currentText = $(this).val();

        // Setting the Div content
        $("#vendr-comp-name").text(currentText);
    });
});
