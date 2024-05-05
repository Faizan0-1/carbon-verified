document.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.querySelector('.loader-container');

    // Show loader when the form is submitted
    document.getElementById('website-form-id').addEventListener('submit', () => {
        loaderContainer.style.display = 'flex'; // Show loader
    });

    document.getElementById('website-form-id2').addEventListener('submit', () => {
        loaderContainer.style.display = 'flex'; // Show loader
    });

    // Hide loader when the document is fully loaded
    window.addEventListener('load', () => {
        loaderContainer.style.display = 'none'; // Hide loader
    });
});

