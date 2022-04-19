const currentDate = new Date();
const timestamp = currentDate.getTime();
const browser = window.navigator.userAgent;



document.cookie = `browser=${browser}; timestamp=${timestamp};`;

allCookies = document.cookie.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map(c => c.trim());
    cookies[name] = value;
    return cookies;
}, {});

alert(JSON.stringify(allCookies));



function showCookies() {
    const output = document.getElementById('cookies')
    output.textContent = '> ' + document.cookie
}

function clearOutputCookies() {
    const output = document.getElementById('cookies')
    output.textContent = ''
    document.cookie = `expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

}



