let getData = () => {
    	
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname')
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const city = document.getElementById('city');
    const recieveEmails = document.getElementById('.emails?');
    const postcode = document.getElementById('postcode');
    const phone = document.getElementById('phone');
    const recieveTexts = document.getElementById('texts?');
    
    let data = 
        '\r First Name: ' + firstname.value + ' \r\n ' + 
        'Last Name: ' + lastname.value + ' \r\n ' +
        'Address: ' + address.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'Country: ' + country.value + ' \r\n ' + 
        'City: ' + city.value + ' \r\n ' + 
        'Recieve Emails? :' + recieveEmails.value + ' \r\n' +
        'Postcode:' + postcode.value + ' \r\n' +
        'Phone: ' + phone.value + ' \r\n' +
        'Recieve Texts? :' + recieveTexts.value;

    
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}

