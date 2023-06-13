export function isDateInPast(dateString) {
  var currentDate = new Date();
  var inputDate = new Date(dateString);

  if (inputDate < currentDate) {
    return true;
  } else {
    return false;
  }
}
