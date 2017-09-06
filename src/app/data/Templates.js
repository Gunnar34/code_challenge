var checkIn = {
  id: 1,
  name: 'check-in message',
  body: 'Welcome to ',
  time: 'You checked in on ',
  room: 'to room number is ',
  end: 'Please let me know if there is anything we can assist you with!'
}
var checkOut = {
  id: 2,
  name: 'check out message',
  body: 'Thank You for staying with ',
  time: 'You checked out on ',
  room: 'from room number ',
  end: 'Please let me know if there is anything we can assist you with!'
}
var update = {
  id: 3,
  name: 'update message',
  body: 'We hope you are enjoying your stay with ',
  time: 'Your check out date is ',
  room: 'from room number ',
  end: 'Please let me know if there is anything we can assist you with!'
}
var templates = [checkIn, checkOut, update];

export default templates;
