// ==UserScript==
// @name         Ryerson Co-op - Remove Entries
// @namespace    https://recruitstudents.ryerson.ca/
// @version      1.1
// @description  Ryerson Co-op Portal Plugin
// @author       lyjacky11
// @match        https://recruitstudents.ryerson.ca/myAccount/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Stay Logged In
    stayLoggedIn();

    function stayLoggedIn() {
        keepMeLoggedInClicked();
        console.log("Stay logged in!");
        setTimeout(stayLoggedIn, 20000);
    }

    // 1. Remove Applied entries from list
    var lastCount = 0;
    removeApplied();

    function removeApplied() {
        var counter = 0;
        var elements = document.querySelectorAll('a[role="button"]');
        for (var i = 0; i < elements.length; i++) {
            var elementText = elements[i].innerHTML;
            if (elementText.trim() == "Applied") {
                elements[i].parentNode.parentNode.style.display = "none";
                counter++;
            }
        }
        if (counter != lastCount) {
            console.log("Removed " + counter + " job entries!");
            //alert("Removed " + counter + " job entries!");
        }
        lastCount = counter;
        setTimeout(removeApplied, 500);
    }

    // 2. Remove Shortlisted entries from list
    // removeShortlist();

    function removeShortlist() {
        var item = document.getElementsByClassName("action");
        for (var i = 0; i < item.length; i++) {
            if (item[i].innerHTML.trim() == "Shortlisted") {
                item[i].parentNode.parentNode.style.display = "none";
            }
        }
        setTimeout(removeShortlist, 500);
    }

})();
