/**
 * Copyright © 2020 KSalting
 * 
 * Licensed under the MIT License
 * 
 * https://github.com/codebyksalting/vanilla-js-scrollthrough/blob/master/LICENSE
 * 
 * A short and simple permissive license with conditions 
 * only requiring preservation of copyright and license notices. 
 * Licensed works, modifications, and larger works 
 * may be distributed under different terms and without source code.
 */

/**
 * Main smooth scroll function
 * 
 * @param {string} targetedElement Element to which the user will be scrolled to.
 * @param {string} scrollSpeed The scrolling speed - fast, medium, or slow.
 */
function scrollThrough(targetedElement, scrollSpeed) {

    // Default paremeter values
    scrollOffset = (typeof scrollOffset !== 'undefined') ? scrollOffset : 10;
    scrollSpeed = (typeof scrollSpeed !== 'undefined') ? scrollSpeed : 'fast';

    // Set scroll step amount
    switch(scrollSpeed){
        case 'slow':
            var timeoutSpeed = 40;
            break;
        case 'medium':
            var timeoutSpeed = 30;
            break;
        case 'fast':
        default:
            var timeoutSpeed = 15;
    }

    // Get the current scroll position and the target element's position on the document - with support for IE11
    var triggerPosition = window.scrollY || document.documentElement.scrollTop;
    var checkElement = document.querySelector(targetedElement);
    // Element should exist and must not be hidden
    if (checkElement && checkElement.offsetWidth > 0 && checkElement.offsetHeight > 0) {
        var targetPosition = Math.floor(triggerPosition + checkElement.getBoundingClientRect().top);
    } else {
        var targetPosition = 0;
    }

    // Set the scroll direction
    var topToBottom = false;
    if (triggerPosition < targetPosition) {
        topToBottom = true;
    }

    // Calculate the distance between the scroll position and the target element
    var targetDistanceY = Math.abs(triggerPosition - targetPosition);

    // Set the scroll speed
    var stepDistance = targetDistanceY / timeoutSpeed;

    var timer = setInterval(function(){
        // Stop the timer once the target position is reached
        if (topToBottom) {
            triggerPosition += stepDistance;
            if (triggerPosition >= targetPosition) {
                clearInterval(timer);
            }
        } else {
            triggerPosition -= stepDistance;
            if (triggerPosition <= targetPosition) {
                clearInterval(timer);
            }
        }

        window.scrollTo(0, triggerPosition);
    }, 15);

}

// Enable polyfill for all internal links
document.addEventListener('DOMContentLoaded', function() {
    var allLinks = Array.prototype.slice.call( document.querySelectorAll('a') );
    allLinks.forEach(function(cur) {
        if (cur.hash) {
            cur.addEventListener('click', function(e){
                e.preventDefault();
                scrollThrough(this.hash);
            });
        }
    });
}, false);
