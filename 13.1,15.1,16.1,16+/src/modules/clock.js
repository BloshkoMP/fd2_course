const htmlElements = {
	output: document.querySelector(".container [data-mode=clock] .output")
};
function Clock() {}

Clock.prototype.initClock = function() {
	onIntervalTicker();
	setTimeout(() => {
		onIntervalTicker();
	}, 1000);
};
function onIntervalTicker() {
	const currentDate = new Date();
	const currentTime = currentDate.toTimeString().split(" ")[0];
	htmlElements.output.innerText = currentTime;
	setTimeout(() => {
		onIntervalTicker();
	}, 1000);
}
export { Clock };
