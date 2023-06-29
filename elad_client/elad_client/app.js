//$(function () {
//    $.ajax({
//        url: 'http://localhost:5000/api/products',
//        type: 'GET',
//        dataType: 'json',
//        success: function (products) {
//            const table = $('#products-table');
//            products.forEach(function (product) {
//                const row = $('<tr>');
//                $('<td>').text(product.name).appendTo(row);
//                $('<td>').text(product.price).appendTo(row);
//                table.append(row);
//            });
//        },
//        error: function (jqXHR, textStatus, errorThrown) {
//            console.error('error getting products:', textStatus, errorThrown);
//        }
//    });
//    const product = {
//        name: 'Product 1',
//        price: 10.99
//    };

//    $.ajax({
//        url: 'http://localhost:5000/api/products',
//        type: 'POST',
//        contentType: 'application/json',
//        data: JSON.stringify(product),
//        success: function (data) {
//            console.log(data);
//        },
//        error: function (xhr, textStatus, errorThrown) {
//            console.log('Error:', textStatus);
//        }
//    });

//});






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
//        url: 'https://localhost:7174/api/Products',
//        type: 'GET',
//        success: function (data) {
//            console.log("data", data);
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
//        url: 'https://localhost:7174/api/Products',
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

//----------------------------------------------------------------------------------------


document.addEventListener('DOMContentLoaded', function () {
//    // handle get products button click
//    document.getElementById('getProductsBtn').addEventListener('click', function () {
//        getProducts();
//    });

    // handle add product button click
    document.getElementById('addProductBtn').addEventListener('click', function () {
        document.getElementById('addProductForm').style.display = 'block';
    });

    // handle submit product button click
    document.getElementById('submitProductBtn').addEventListener('click', function () {
       
        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const data = { productName, productPrice };
      
        addProduct(data);
    });
});

// function to perform GET request
function getProducts() {
    console.log("getProducts");
    const xhr = new XMLHttpRequest();
   
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log("data: ", data)
            // display data on the page
            const productsTable = document.getElementById('productsTable').getElementsByTagName('tbody')[0];
            productsTable.innerHTML = '';
            data.forEach(function (product) {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
               // console.log(" product.productName: ", product.productName);
                nameCell.textContent = product.productName;
                console.log("nameCell: ", nameCell);
                //console.log("nameCell.textContent: ", nameCell.textContent);

                const priceCell = document.createElement('td');
                priceCell.textContent = product.productPrice;
                row.appendChild(nameCell);
                row.appendChild(priceCell);
                productsTable.appendChild(row);
            });
            console.log('productsTable: ', productsTable);
          //  document.getElementById('productsTable').innerHTML = productsTable;
        } else {
            console.error('Error:', xhr.status);
        }
    };
    xhr.open('GET', 'https://localhost:7174/api/Products', true);
    

    xhr.onerror = function () {
        console.error('Request failed');
    };
    xhr.send();
}

// function to perform POST request
function addProduct(data) {
   
    const xhr = new XMLHttpRequest();
    console.log("post, data:", data);
    xhr.open('POST', 'https://localhost:7174/api/Products', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('addProductForm').style.display = 'none';
            getProducts();
        } else {
            console.error('Error:', xhr.status);
        }
    };
    xhr.onerror = function () {
        console.error('Request failed');
    };
    xhr.send(JSON.stringify(data));
}