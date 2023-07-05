
const cookieBanner = document.querySelector('.cookie-banner');
const cookieBannerButton = cookieBanner.querySelector('.cookie-banner__button');
const CURRENT_POLICY = 1
const COOKIE_KEY = 'cookie-policy';


function closeCookieBanner() {
  cookieBanner.classList.add('cookie-banner--hidden');
}

function showCookieBanner() {
  cookieBanner.classList.remove('cookie-banner--hidden');
}

function setCookie() {
    // Set cookie for 1 year with path current policy
}

function checkCookie() {
    // Get all cookies
    // Extract cookie for specific key
    // Check if cookie is set
       // If cookie is set, 
          //If policy is current policy close cookie banner
    
    // If cookie is not set or policy is not current policy show cookie banner
}

document.addEventListener('DOMContentLoaded', checkCookie);
// Add event listener to cookie banner button