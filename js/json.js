<!DOCTYPE html>
<html lang="en">
<head>
<title>JavaScript - read JSON from URL</title>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

<body>
    <div class="mypanel"></div>

    <script>
    $.getJSON('https://mtzfederico.com/js/example1.json', function(data) {
        
        var text = `Number Of Orders: ${data.NumberOfOrders}<br>
                    Client id: ${data.clientid}<br>
                    Order 0 Name: ${data.orders.0.name}`
                    
        
        $(".mypanel").html(text);
    });
    </script>
    
</body>
</html>
