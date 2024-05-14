export default function formatTime(time) {
    const timeString = String(time);

    const isValid = timeString.length === 2;

    if (isValid) return time;

    const newTime = timeString.padStart(2, 0);

    return newTime;
}