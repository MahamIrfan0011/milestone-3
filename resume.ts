document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from localStorage
  const firstName = localStorage.getItem('firstName');
  const middleName = localStorage.getItem('middleName');
  const lastName = localStorage.getItem('lastName');
  const address = localStorage.getItem('address');
  const education = localStorage.getItem('education');
  const year = localStorage.getItem('year');
  const institution = localStorage.getItem('institution');
  const skills = localStorage.getItem('skills');
  const experience = localStorage.getItem('experience');

  // Display data in HTML
  (document.getElementById('first-name') as HTMLElement).innerText = firstName || 'Not Provided';
  (document.getElementById('middle-name') as HTMLElement).innerText = middleName || 'Not Provided';
  (document.getElementById('last-name') as HTMLElement).innerText = lastName || 'Not Provided';
  (document.getElementById('address') as HTMLElement).innerText = address || 'Not Provided';
  (document.getElementById('education') as HTMLElement).innerText = education || 'Not Provided';
  (document.getElementById('year') as HTMLElement).innerText = year || 'Not Provided';
  (document.getElementById('institution') as HTMLElement).innerText = institution || 'Not Provided';
  (document.getElementById('skills') as HTMLElement).innerText = skills || 'Not Provided';
  (document.getElementById('experience') as HTMLElement).innerText = experience || 'Not Provided';
});

