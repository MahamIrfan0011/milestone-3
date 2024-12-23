const generateResumeButton = document.getElementById("generate-resume")!;
const resumeForm = document.getElementById("resume-form")!;
const profilePicInput = document.getElementById("profile-pic") as HTMLInputElement;
const profilePicPreview = document.getElementById("profile-pic-preview") as HTMLImageElement;

// Event listener for profile picture upload
profilePicInput.addEventListener("change", () => {
    const file = profilePicInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePicPreview.src = e.target?.result as string;
            profilePicPreview.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
    }
});

// Event listener for generating resume
generateResumeButton.addEventListener("click", () => {
    const firstName = (document.getElementById("first-name") as HTMLInputElement).value;
    const lastName = (document.getElementById("last-name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

    // Open the generated resume in a new tab
    const newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write(`
            <html>
            <head>
                <title>${firstName} ${lastName}'s Resume</title>
                <style>
                    body { background: linear-gradient(135deg, #003366, #666); color: white; font-family: Arial, sans-serif; }
                    img { border-radius: 50%; width: 100px; height: 100px; object-fit: cover; }
                </style>
            </head>
            <body>
                <header>
                    <h1>${firstName} ${lastName}'s Resume</h1>
                    <img src="${profilePicPreview.src}" alt="Profile Picture">
                </header>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Education:</strong> ${education}</p>
                <p><strong>Skills:</strong> ${skills}</p>
                <p><strong>Experience:</strong> ${experience}</p>
            </body>
            </html>
        `);
        newWindow.document.close();
    }
});


