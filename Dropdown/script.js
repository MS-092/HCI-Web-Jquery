document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdown-btn');
    const surpriseContent = document.getElementById('surprise-content');

    dropdownBtn.addEventListener('click', function() {
        // Toggle the visibility of the surprise content
        surpriseContent.classList.toggle('hidden');

        // Add animation class to the surprise content
        surpriseContent.classList.add('animated', 'fadeIn');
    });
});
