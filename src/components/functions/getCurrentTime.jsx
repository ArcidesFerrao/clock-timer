import formatTime from './formatTime';

export default function getCurrentTime() {
    const dateToday = new Date();

    const hr = dateToday.getHours();
    const min = dateToday.getMinutes();
    const s = dateToday.getSeconds();
    
    return {
      hr: formatTime(hr),
      min: formatTime(min),
      s: formatTime(s),
    };
  }
