$(document).ready(function () {
    $('#map').click(function () {
        $('#page-content-wrapper').load('map.html');
    })
});
$(document).ready(function () {
    $('#customer').click(function () {
        $('#page-content-wrapper').load('customer.html');
    })
});
$(document).ready(function () {
    $('#venue').click(function () {
        $('#page-content-wrapper').load('venue.html');
    })
});
$(document).ready(function () {
    $('#home').click(function () {
        $('#page-content-wrapper').load('index.html');
    })
});
$(document).ready(function () {
    $('#further-info').click(function () {
        $('#page-content-wrapper').load('further-info.html');
    })
});
function store() { //stores items in the localStorage
    var VenueCustomer = document.getElementById('InputVenueCustomer').value;
    var InputDiner = document.getElementById('InputDiner').value;
    var TimeAttending = document.getElementById('TimeAttending').value;
    var key = document.getElementById('key').value; //gets the key from the user

    const customer = {
        VenueCustomer: VenueCustomer,
        InputDiner: InputDiner,
        TimeAttending: TimeAttending,
    }

    window.localStorage.setItem(key, JSON.stringify(customer));
    //converting object to string
}