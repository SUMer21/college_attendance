function mentorLogin() {
    const mentors = ['haritha@SCITS', 'kalyani@SCITS', 'shanthi@SCITS'];
    const loginInput = document.getElementById('menid1').value;
    const passwords = ['7338@SCITS', '7339@SCITS', '7340@SCITS'];
    const passwordInput = document.getElementById('menid2').value;

    // Find the index of the input username in the mentors array
    const index1 = mentors.indexOf(loginInput);

    // Find the index of the input password in the passwords array
    const index2 = passwords.indexOf(passwordInput);

    // Check if both indexes match
    if (index1 === index2 && index1 !== -1) {
        window.open('attendance.html','_blank');
    } else {
        alert('Please enter correct username or password.');
    }
}


