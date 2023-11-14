document.addEventListener('DOMContentLoaded', () => {

    // to initially hide all departure images
    document.querySelectorAll('.images-container img').forEach(img => img.style.display = 'none');

    document.getElementById('departureSelect').addEventListener('change', event => {
        updateImageDisplay(event.target.value, 'departure-section');
    });

    document.getElementById('destinationSelect').addEventListener('change', event => {
        updateImageDisplay(event.target.value, 'destination-section');
    });

    const updateImageDisplay = (selection, section) => {

       //to hide the images from this section
        document.querySelectorAll(`.${section} .images-container img`).forEach(img => img.style.display = 'none');


        // to determine which image to show
        let imageId;
        if (section === 'departure-section') {
            imageId = selection === 'Texas, USA' ? 'depUsa' : 'depSpain';
        } else {
            imageId = selection.toLowerCase();
        }

        // to show selected image
        const imageElement = document.getElementById(imageId);
        if (imageElement) {
            imageElement.style.display = 'block';
        }
    }
});


//to submit the booking form
document.getElementById('submitBtn').addEventListener('click', function () {
    document.getElementById('bookingForm').submit();
});

