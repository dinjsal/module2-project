//to show images of the selected country and destination
document.getElementById('departureSelect').addEventListener('change', () => {
    showCountryImage(this.value, 'departure');
});


document.getElementById('destinationSelect').addEventListener('change', () => {
    showCountryImage(this.value, 'destination');
});


function showCountryImage(country, type) {
    // to hide all images
    document.querySelectorAll('.' + type + '-section .images-container img').forEach(img => {img.style.display = 'none';
});

    // to show the selected country image
    const imgId = type + country;
    document.getElementById(imgId).style.display = 'block';

}


//to submit the booking form
document.getElementById('submitBtn').addEventListener('click', function () {
    document.getElementById('bookingForm').submit();
});