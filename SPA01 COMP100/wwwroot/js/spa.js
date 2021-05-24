$(document).ready(function () {
    $().load('navbar.html');
});
$(document).ready(function () {
    $('#map').click(function () {
        $('#page-content-wrapper').load('map.html');
    })
});
$(document).ready(function () {
    $('#track-and-trace').click(function () {
        $('#page-content-wrapper').load('track-and-trace.html');
    })
});
$(document).ready(function () {
    $('#customer').click(function () {
        $('#page-content-wrapper').load('customer.html');
    })
});
$(document).ready(function () {
    $('#venue').click(function () {
        $('#page-content-wrapper').load('login.html');
    })
});
$(document).ready(function () {
    $('#home').click(function () {
        $('#page-content-wrapper').load('index.html');
    })
});
$(document).ready(function () {
    $('#further').click(function () {
        $('#page-content-wrapper').load('further-info.html');
    })
});
$(document).ready(function () {
    $('#further_image').click(function () {
        $('#page-content-wrapper').load('further-info.html');
    })
});
$(document).ready(function () {
    $('#customer_image').click(function () {
        $('#page-content-wrapper').load('customer.html');
    })
});
$(document).ready(function () {
    $('#venue_image').click(function () {
        $('#page-content-wrapper').load('login.html');
    })
});
$(document).ready(function () {
    $(document).on("click", "#login-submit", function () {
        //$('#page-content-wrapper').load('venue.html');
        validate();
    })
});
$(document).ready(function () {
    $('#yes').click(function () {
        $('#page-content-wrapper').load('isolate.html');
    })
});
function store_customer_form() { //stores items in the localStorage
    var CustomersVenue = document.getElementById('InputVenueCustomer').value;
    var Customers = document.getElementById('InputDiner').value;
    var TimeAttending = document.getElementById('TimeAttending').value;
    //var key = document.getElementById('key').value; //gets the key from the user
    var key = 'key';
    localStorage.setItem(key, InputDiner)
    localStorage.setItem(key, CustomersVenue)
    localStorage.setItem(key, Customers)
    localStorage.setItem(key, TimeAttending)

    //window.localStorage.setItem(key, JSON.stringify(customer));
    //converting object to string
}

function store_venue_form() { //stores items in the localStorage
    var InputVenue = document.getElementById('InputVenue').value;
    var InputTables = document.getElementById('InputTables').value;
    var InputSeats = document.getElementById('InputSeats').value;
    var OpeningTime = document.getElementById('OpeningTime').value;
    var ClosingTime = document.getElementById('ClosingTime').value;
    var key = document.getElementById('key').value; //gets the key from the user

    

    const customer = {
        InputVenue: InputVenue,
        InputTables: InputTables,
        InputSeats: InputSeats,
        OpeningTime: OpeningTime,
        ClosingTime: ClosingTime,
    }

    window.localStorage.setItem(key, JSON.stringify(customer));
    //converting object to string
}

function validate() {
    if (document.getElementById("username").value == "user" && document.getElementById("password").value == "password") {
        $('#page-content-wrapper').load('venue.html');
    }
}

$(document).ready(function () {
    $('#customer-submit').click(function () {
        var CustomersVenue = document.getElementById('InputVenueCustomer').value;
        var Customers = document.getElementById('InputDiner').value;
        var TimeAttending = document.getElementById('TimeAttending').value;
        //var key = document.getElementById('key').value; //gets the key from the user
        var key = 'key';
        localStorage.setItem(key, CustomersVenue)
        localStorage.setItem(key, Customers)
        localStorage.setItem(key, TimeAttending)

    })
});