// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        jandan.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.href,
        rHttp = /^http:\/\//,
        isHttp = url.indexOf('http://') === 0,
        isHttps = url.indexOf('https://') === 0;
    if (isHttp) {
        window.location.replace( url.replace(rHttp, 'https://') );
    } else if (isHttps) {
        [].forEach.call(document.querySelectorAll('a[href^="http://"]'), function (link) {
            link.href = link.href.replace(rHttp, 'https://');
        });
    }
})();