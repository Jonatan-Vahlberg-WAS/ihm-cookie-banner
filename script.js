
const cookieBanner = document.querySelector('.cookie-banner');
const cookieBannerButton = cookieBanner.querySelector('.cookie-banner__button');
const LAST_COOKIE_POLICY = 1
/* Implement all javascript */

function closeCookieBanner() {
  cookieBanner.classList.add('cookie-banner--hidden');
}

function showCookieBanner() {
  cookieBanner.classList.remove('cookie-banner--hidden');
}

function setCookie() {
    document.cookie = 'cookiesAccepted=' + LAST_COOKIE_POLICY + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}

function checkCookie() {
    const cookiesAccepted = document.cookie.split(';').filter(item => item.includes('cookiesAccepted='));
    if (cookiesAccepted.length > 0) {
        const cookiePolicy = cookiesAccepted[0].split('=')[1];
        if (cookiePolicy == LAST_COOKIE_POLICY) {
            return closeCookieBanner();
        }
    }
    showCookieBanner();
}

document.addEventListener('DOMContentLoaded', checkCookie);
cookieBannerButton.addEventListener('click', () => {
    setCookie();
    closeCookieBanner();
})
