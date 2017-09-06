export function greeting() {
  let now = new Date(); //curent date
  let hrs = now.getHours(); //current hour
  let msgStart; //declare for if statements
  if (hrs >  2) msgStart = "Good morning "; //if between 3am - noon
  if (hrs > 12) msgStart = "Good afternoon "; //if between 1pm - 5pm
  if (hrs > 17 || hrs < 3) msgStart = "Good evening "; //if between 6pm - 2am
  return msgStart
};

export function dateParse(tstamp) {
  let hours = tstamp.getHours(); //get the hours from the mew date
  if (hours > 12) {
    hours -= 12;
    var time = hours + ':' + tstamp.getMinutes() + 'pm';
    //handles military time to standard
  } else {
    var time = hours + ':' + tstamp.getMinutes() + 'am';
  }
  let timestamp = tstamp.getDate() + '/' + (tstamp.getMonth()+1) + '/' + tstamp.getFullYear() + ' at ' + time;
  return timestamp;
}
