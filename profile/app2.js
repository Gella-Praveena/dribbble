
// Function to open the file upload dialog when clicking on img-left
document.querySelector('.img-left').addEventListener('click', function () {
    document.querySelector('input[type="file"]').click();
});

// Function to handle file upload
document.querySelector('input[type="file"]').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector('.img-left').innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
        };
        reader.readAsDataURL(file);
    }
});

// Function to show the modal popup
document.querySelector('button').addEventListener('click', function () {
    document.getElementById('myModal').style.display = "block";
});

// Function to close the modal popup
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('myModal').style.display = "none";
});

// Function to select and display the default image on the circle part
function selectDefaultImage(image) {
    document.querySelector('.img-left').innerHTML = `<img src="${image}" alt="Avatar">`;
    document.getElementById('myModal').style.display = "none";
}