(function(){
	// Event attachment helper function
	var addEventSniffer = document.body;
	var addEvent;
	if (addEventSniffer.addEventListener) { // Good browsers
		addEvent = function(event, element, handler) {
			element.addEventListener(event, handler, false);
		}
	} else if (addEventSniffer.attachEvent) { // Bad IE
		addEvent = function(event, element, handler) {
			element.attachEvent("on" + event, handler);
		}
	} else {
		addEvent = function(event, element, handler) {
			element[event] = handler;
		}
	}
	var anchors = document.getElementsByTagName("a");
	for(i = 0; i < links.length; i++) {
		addEvent("dblclick", links[i], function(){
			// Do something (popup window?)
		});
	}
})();
