import subHours from 'date-fns/subHours';

export const calculateTimestampForPeriod = (periodInHours: number) =>
	Math.trunc(subHours(new Date().getTime(), periodInHours).getTime());

export const formatTruncatedDuration = (delta: number): string => {
	const days = Math.floor(delta / 86400);
	delta -= days * 86400;
	const hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	const minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;
	const daysStr = days > 0 ? days + 'd' : '0d';
	const hoursStr = hours > 0 ? hours + 'h' : '0h';
	const minsStr = minutes > 0 ? minutes + 'm' : '0m';
	return days > 10 ? `${daysStr}:${hoursStr}`.trim() : `${daysStr}:${hoursStr}:${minsStr}`.trim();
};
