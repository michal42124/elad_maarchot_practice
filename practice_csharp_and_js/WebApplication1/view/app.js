////$(function () {
////    $.ajax({
////        url: 'http://localhost:5000/api/products',
////        type: 'GET',
////        dataType: 'json',
////        success: function (products) {
////            const table = $('#products-table');
////            products.forEach(function (product) {
////                const row = $('<tr>');
////                $('<td>').text(product.name).appendTo(row);
////                $('<td>').text(product.price).appendTo(row);
////                table.append(row);
////            });
////        },
////        error: function (jqXHR, textStatus, errorThrown) {
////            console.error('error getting products:', textStatus, errorThrown);
////        }
////    });
////    const product = {
////        name: 'Product 1',
////        price: 10.99
////    };

////    $.ajax({
////        url: 'http://localhost:5000/api/products',
////        type: 'POST',
////        contentType: 'application/json',
////        data: JSON.stringify(product),
////        success: function (data) {
////            console.log(data);
////        },
////        error: function (xhr, textStatus, errorThrown) {
////            console.log('Error:', textStatus);
////        }
////    });

////});






//$(document).ready(function () {
//    // handle get products button click
//    $('#getProductsBtn').click(function () {
//        getProducts();
//    });

//    // handle add product button click
//    $('#addProductBtn').click(function () {
//        $('#addProductForm').show();
//    });

//    // handle submit product button click
//    $('#submitProductBtn').click(function () {
//        const name = $('#productName').val();
//        const price = $('#productPrice').val();
//        const data = { name, price };
//        addProduct(data);
//    });
//});

//// function to perform GET request
//function getProducts() {
//    $.ajax({
//        url: 'http://localhost:5000/api/products',
//        type: 'GET',
//        success: function (data) {
//            // display data on the page
//            const productsTable = $('#productsTable tbody');
//            productsTable.empty();
//            data.forEach(product => {
//                const row = $('<tr>');
//                row.append($('<td>').text(product.name));
//                row.append($('<td>').text(product.price));
//                productsTable.append(row);
//            });
//        },
//        error: function (xhr, status, error) {
//            console.error('Error:', error);
//        }
//    });
//}

//// function to perform POST request
//function addProduct(data) {
//    $.ajax({
//        url: 'http://localhost:5000/api/products',
//        type: 'POST',
//        contentType: 'application/json',
//        data: JSON.stringify(data),
//        success: function (result) {
//            $('#addProductForm').hide();
//            getProducts();
//        },
//        error: function (xhr, status, error) {
//            console.error('Error:', error);
//        }
//    });
//}