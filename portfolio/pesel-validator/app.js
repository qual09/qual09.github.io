// Validate PESEL
function parsePesel() {
  let peselValue = document.getElementById('pesel').value;

  // Clear current errors and calculated values
  clearData();

  // Check if empty
  if (peselValue.length == 0) {
    return;
  }

  // Check if length is 11
  if (setError(peselValue.length != 11))
    return;

  // Check if all characters are numbers
  let peselArray = [];
  for (i = 0; i < 11; i++) {
    peselArray[i] = parseInt(peselValue.substring(i, i + 1));
    if (isNaN(peselArray[i])) {
      setError(1);
      return;
    }
  }

  // Validate PESEL Checksum
  const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
  let sum = 0;
  for (i = 0; i < 11; i++)
    sum += weight[i] * peselArray[i];
  if (setError((sum % 10) != 0))
    return;

  // Calculate Year including XIX, XXI, XXII and XXIII century
  let year = 1900 + peselArray[0] * 10 + peselArray[1];
  if (peselArray[2] >= 2 && peselArray[2] < 8)
    year += Math.floor(peselArray[2] / 2) * 100;
  if (peselArray[2] >= 8)
    year -= 100;
  // Calculate Month
  let month = (peselArray[2] % 2) * 10 + peselArray[3];
  // Calculate Day
  let day = peselArray[4] * 10 + peselArray[5];

  // Validate Date value
  if (setError(!checkDate(day, month, year)))
    return;

  // Calculate Gender
  let gender = (peselArray[9] % 2 == 1) ? 'Male' : 'Female';

  // Display data
  let monthStr = (month < 10 ? '0' : '') + month;
  let dayStr = (day < 10 ? '0' : '') + day;
  document.getElementById('dateOfBirth').value = `${dayStr}-${monthStr}-${year}`;
  document.getElementById('gender').value = gender;
}

// Display error
function setError(isValid) {
  document.getElementById('hasError').style.visibility = (isValid ? 'visible' : 'hidden');
  document.querySelector('.errorMessage').style.display = (isValid ? 'block' : 'none');
  return isValid;
}

// Clear current data
function clearData() {
  // Error messages
  document.getElementById('hasError').style.visibility = 'hidden';
  document.querySelector('.errorMessage').style.display = 'none';
  // Calculated values
  document.getElementById('dateOfBirth').value = '';
  document.getElementById('gender').value = '';
}

// Validate date
function checkDate(day, month, year) {
  let date = new Date(year, month - 1, day);
  return date.getDate() == day &&
    date.getMonth() == month - 1 &&
    date.getFullYear() == year;
}
