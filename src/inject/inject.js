chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// Get the climactic moments
			const climax = [311];
			let playing = false;

			window.setInterval(() => {
				let currentTime = document.getElementsByTagName("video")[0].currentTime;
				if (climax.includes(parseInt(currentTime)) && !playing) {
					let theme = new Audio(chrome.extension.getURL("themes/very_short.mp3"));
					theme.volume = 0.2;
					theme.addEventListener('ended', () => {
						playing = false;
					});
					theme.play();
					playing = true;
				}
			}, 500);
		}
	}, 10);
});
