
$(document).ready( function () {
    var buttonHTML = " <input type=\"checkbox\" name=\"hold\"><br>"
    $('#assignTable').dataTable( {

        "ajax": "testData/employeeData.txt",

        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "orderable" : false,
            "className": "td-actions text-center",
            "defaultContent": buttonHTML
        } ]
    } );

    $('#assignedTable').dataTable({
        "ajax": "testData/assigned.txt",

        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "orderable" : false,
            "className": "td-actions text-center",
            "defaultContent": buttonHTML
        } ]
    });

} );

