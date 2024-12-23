var generateResumeButton = document.getElementById("generate-resume");
var resumeForm = document.getElementById("resume-form");
var profilePicInput = document.getElementById("profile-pic");
var profilePicPreview = document.getElementById("profile-pic-preview");
// Event listener for profile picture upload
profilePicInput.addEventListener("change", function () {
    var _a;
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePicPreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            profilePicPreview.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
    }
});
// Event listener for generating resume
generateResumeButton.addEventListener("click", function () {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // Open the generated resume in a new tab
    var newWindow = window.open('', '_blank');
    if (newWindow) {
        newWindow.document.write("\n            <html>\n            <head>\n                <title>".concat(firstName, " ").concat(lastName, "'s Resume</title>\n                <style>\n                    body { background: linear-gradient(135deg, #003366, #666); color: white; font-family: Arial, sans-serif; }\n                    img { border-radius: 50%; width: 100px; height: 100px; object-fit: cover; }\n                </style>\n            </head>\n            <body>\n                <header>\n                    <h1>").concat(firstName, " ").concat(lastName, "'s Resume</h1>\n                    <img src=\"").concat(profilePicPreview.src, "\" alt=\"Profile Picture\">\n                </header>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <p><strong>Address:</strong> ").concat(address, "</p>\n                <p><strong>Education:</strong> ").concat(education, "</p>\n                <p><strong>Skills:</strong> ").concat(skills, "</p>\n                <p><strong>Experience:</strong> ").concat(experience, "</p>\n            </body>\n            </html>\n        "));
        newWindow.document.close();
    }
});
