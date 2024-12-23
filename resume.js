document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from localStorage
    var firstName = localStorage.getItem('firstName');
    var middleName = localStorage.getItem('middleName');
    var lastName = localStorage.getItem('lastName');
    var address = localStorage.getItem('address');
    var education = localStorage.getItem('education');
    var year = localStorage.getItem('year');
    var institution = localStorage.getItem('institution');
    var skills = localStorage.getItem('skills');
    var experience = localStorage.getItem('experience');
    // Display data in HTML
    document.getElementById('first-name').innerText = firstName || '';
    document.getElementById('middle-name').innerText = middleName || '';
    document.getElementById('last-name').innerText = lastName || '';
    document.getElementById('address').innerText = address || '';
    document.getElementById('education').innerText = education || '';
    document.getElementById('year').innerText = year || '';
    document.getElementById('institution').innerText = institution || '';
    document.getElementById('skills').innerText = skills || '';
    document.getElementById('experience').innerText = experience || '';
});
