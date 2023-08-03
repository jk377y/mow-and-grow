export const formattedUnixTimestamp = (unixTime) => {
    const timestamp = unixTime * 1000;
    const date = new Date(timestamp);
    const formattedDate = date.toString();
    return formattedDate;
};