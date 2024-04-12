
let portfolio_btn = document.querySelector("#portfolio")

portfolio_btn.addEventListener("click", () => {
    let portfolio_section = document.querySelector("#portfolio-div");
    console.log(portfolio_section);
    portfolio_section.scrollIntoView()
});



let allAnchorTag = document.querySelectorAll("a")

allAnchorTag.forEach((val) => {

    console.log(val.classList.add("achor_underline"));
})

// Function to handle the download of the CV
function downloadCV() {
    // Specify the path to the PDF file
    const cvFilePath = 'assets/pdf/CV_SHIVA.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'cv_shiva.pdf'; // Specify the file name for download

    // Trigger a click event on the anchor element to initiate the download
    document.body.appendChild(link);
    link.click();

    // Clean up by removing the anchor element from the DOM
    document.body.removeChild(link);
}

// Event listener for the "Download CV" button
const downloadCVButton = document.querySelector('.cv-resume.btn-cls');
if (downloadCVButton) {
    downloadCVButton.addEventListener('click', downloadCV);
}