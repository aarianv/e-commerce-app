export function renderForm() {
    let formHTML = '';
    
    formHTML += `
        <form>
            <label for="email">CONTACT</label><br>
            <input type="text" id="email" placeholder="EMAIL" required ><br>
            <input type="checkbox" id="emails?">
            <label for="emails?">EMAIL ME WITH NEWS AND OFFERS</label><br>
            <div class="spacer"></div>
            <label for="delivery-info" required >DELIVERY</label><br>
            <select id="country" required > 
                <option value="United Kingdom" selected>United Kingdom</option>
                <option value="United States">United States</option>
            </select><br>
            <input type="text" id="firstname" placeholder="FIRST NAME" required >
            <input type="text" id="lastname" placeholder="LAST NAME" required ><br>
            <input type="text" id="address" placeholder="ADDRESS" required ><br>
            <input type="text" id="city" placeholder="CITY" required >
            <input type="text" id="postcode" placeholder="POSTAL CODE" required ><br>
            <input type="tel" id="phone" placeholder="PHONE" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required /><br>
            <input type="checkbox" id="phone">
            <label for="phone" id="texts?">TEXT ME WITH NEWS AND OFFERS</label><br></br>
            <input type="submit" name="submit" onclick="getData()" value="SUBMIT">
        </form>
    `

document.querySelector('.js-payment-method')
    .innerHTML = formHTML;

let getData = () => {
    	
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
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
}

