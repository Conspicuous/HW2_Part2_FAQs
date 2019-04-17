"use strict";
var $ = function(id) { return document.getElementById(id); };

var current = null;
// the event handler for the click event of each a element
var toggle = function() {
    var link = this;                             // they clicked a tag
	var h2 = link.parentNode;                    // h2 tag that contains a tag
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    var h2Elements = faqs.getElementsByTagName("h2");
    for (var i = 0; i < h2Elements.length; i++ ) {
        if( h2Elements[i].hasAttribute("class"))

        {
            //h2Elements[i].className="";
            h2Elements[i].removeAttribute("class");
            h2Elements[i].nextElementSibling.removeAttribute("class");

        }


    }

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) {
//        h2.removeAttribute("class");
        h2.className = "";
    } else {
//        h2.setAttribute("class", "minus");
        h2.className = "minus";
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) {
        div.className = "";
    } else if (current !== div) {
        current = div;
        div.className = "open";
    } else {
      current = null;
    }
};

window.onload = function() {
    // get the a tags
    var faqs = $("faqs");
    var linkElements = faqs.getElementsByTagName("a");

    // attach event handler for each a tag
    for (var i = 0; i < linkElements.length; i++ ) {
    	linkElements[i].onclick = toggle;
    }
    // set focus on first <a> tag
    linkElements[0].focus();
};
