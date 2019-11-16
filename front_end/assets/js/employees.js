
$(document).ready( function () {
    var buttonHTML = "                      <div class=\"td-actions text-right\">\n                          <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info trainingButton\" data-toggle=\"modal\" data-target=\"#trainingModal\">\n                              <i class=\"material-icons\">work</i>\n                          </button>\n                         <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#deleteWarningModal\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                      </div>";
    $('#employeeTable').dataTable( {

        "ajax": "testData/employeeData.txt",

        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "orderable" : false,
            "className": "td-actions text-center",
            "defaultContent": buttonHTML
        } ]
    } );

    $('#trainingTable').dataTable({
        "ajax": "testData/training.txt"
    });

} );


