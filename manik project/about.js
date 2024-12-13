// Toggle visibility of content
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const moreInfo = document.getElementById('more-info');

    toggleButton.addEventListener('click', () => {
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            moreInfo.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });
});