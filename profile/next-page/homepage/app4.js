
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profile-image');
    const selectedImage = localStorage.getItem('selectedImage');
    if (selectedImage) {
        profileImage.src = `images/${selectedImage}`;
    }
});

