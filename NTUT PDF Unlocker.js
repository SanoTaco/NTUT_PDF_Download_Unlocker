// ==UserScript==
// @name         NTUT PDF Unlocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://istudy.ntut.edu.tw/learn/path/viewPDF.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
document.getElementById("download").style.display = "block";
Download = 1;
    // Your code here...
})();