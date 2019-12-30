var csp = "script-src 'none'";

chrome.webRequest.onHeadersReceived.addListener(

    function (details) {

		var withCSP = details.responseHeaders.concat(

			[
				{
					name: "Content-Security-Policy",
					value: csp
				}
			]
		);

		return {responseHeaders: withCSP};

	},

	{

		urls: ["<all_urls>"],
		types: ["main_frame", "sub_frame"]
	},

    ["blocking", "responseHeaders"]
);

chrome.browserAction.onClicked.addListener(

    function () {

		if (csp === "script-src 'none'") {

			csp = "";

			chrome.browserAction.setIcon(

				{
					path: {

						"16": "icons/reCSPet-off-16.png",
						"32": "icons/reCSPet-off-32.png",
						"64": "icons/reCSPet-off-64.png"
					}
				}
			);

			chrome.browserAction.setTitle({title: "Recspet is currently disabled"});

		} else {

			csp = "script-src 'none'";

			chrome.browserAction.setIcon(

				{
					path: {

						"16": "icons/reCSPet-16.png",
						"32": "icons/reCSPet-32.png",
						"64": "icons/reCSPet-64.png"
					}
				}
			);

			chrome.browserAction.setTitle({title: "Recspet is currently enabled"});
		}
	}
);
