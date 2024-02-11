'use client';

export interface LocalizedDateTimeProps {
	eventDate: string;
	supressHydrationWarning?: boolean;
}

const LocalizedDateTime = ({ eventDate, supressHydrationWarning }: LocalizedDateTimeProps) => {
	const localizedDate = new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'short',
		hour: 'numeric',
		minute: 'numeric',
		timeZoneName: 'short'
	}).format(new Date(eventDate));

	// This is always logged to the browser console
	console.log({localizedDate});

	// When suppressHydrationWarning is used
	// The server output will never be overwritten
	// by the browser
	return (
		<div suppressHydrationWarning={supressHydrationWarning}>
			{localizedDate}
		</div>
	);
};

export default LocalizedDateTime;
