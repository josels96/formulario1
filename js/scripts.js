var row = "";
$("#dias").change(function () { 
    var fecha = moment($("#compra").val()).add($("#dias").val(),'days').format('YYYY-MM-DD')
    $("#pago").val(fecha);
});
$($("#guardar")).click(function () {
    var codigo = "<tr class='text-center'><td>" + $("#factura").val() + "</td><td>" + $("#proveedor").val() + "</td><td>" + $("#compra").val() + "</td><td>" + $("#dias").val() + "</td><td>" + $("#pago").val() + "</td><td>" + $("#importe").val() + " €" + "</td><td><i class='bi bi-pencil btn btn-primary edita'></i></td><td><i class='bi bi-trash btn btn-danger elimina'></i></td></tr>";

    if ($("#dias").val() < 0) {
        alert("Los días de pago no pueden ser negativos")
    }
    
    $("#tabla tbody").append(codigo);
    limpiar();
});

$("#tabla tbody").on("click", ".elimina", function(){ 
    $(this).closest("tr").remove();
});

$("#tabla tbody").on("click", ".edita", function(){ 
    row = $(this).closest("tr").index();
    var factura = $("#tabla tbody").find("tr").eq(row).find("td").eq(0).text();
    var proveedor = $("#tabla tbody").find("tr").eq(row).find("td").eq(1).text();
    var compra = $("#tabla tbody").find("tr").eq(row).find("td").eq(2).text();
    var dias = $("#tabla tbody").find("tr").eq(row).find("td").eq(3).text();
    var pago = $("#tabla tbody").find("tr").eq(row).find("td").eq(4).text();
    var importe = $("#tabla tbody").find("tr").eq(row).find("td").eq(5).text();
    var euro = importe.split(" ")
    var digito = parseInt(euro[0])    

    $("#factura").val(factura);
    $("#proveedor").val(proveedor);
    $("#compra").val(compra);
    $("#dias").val(dias);
    $("#pago").val(pago);
    $("#importe").val(digito);
    $("#guardar").hide();
    $("#actualizar").show();
});

$("#actualizar").click(function () { 
    $("#tabla tbody").find("tr").eq(row).find("td").eq(0).text($("#factura").val());
    $("#tabla tbody").find("tr").eq(row).find("td").eq(1).text($("#proveedor").val());
    $("#tabla tbody").find("tr").eq(row).find("td").eq(2).text($("#compra").val());
    $("#tabla tbody").find("tr").eq(row).find("td").eq(3).text($("#dias").val());
    $("#tabla tbody").find("tr").eq(row).find("td").eq(4).text($("#pago").val());
    $("#tabla tbody").find("tr").eq(row).find("td").eq(5).text($("#importe").val() + " €");
    limpiar();
    $("#actualizar").hide();
    $("#guardar").show();
});

function limpiar (){
    $("#factura").val("")
    $("#proveedor").val("")
    $("#compra").val("")
    $("#dias").val("")
    $("#pago").val("")
    $("#importe").val("")
}