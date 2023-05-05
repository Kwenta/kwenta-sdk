export const startInterval = (callback: () => void, ms: number) => {
	callback();
	return window.setInterval(callback, ms);
};
