export const convertTimeStampToDate = (timestamp) => {
	//const originalTimestamp = "1992-03-19T18:30:00.000Z";
	const date = new Date(timestamp);

	const day = String(date.getUTCDate()).padStart(2, "0");
	const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are zero-based
	const year = date.getUTCFullYear();

	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
};
