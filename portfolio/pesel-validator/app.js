// Validate PESEL
function parsePesel() {
  let s = document.getElementById('pesel').value;

  // Clear current calculated values
  clearData();

  // Check if length is 11
  if (s.length == 0) {

    return;
  }
  console.log(123);
  if (setError(s.length != 11))
    return;

  // Check if all characters are numbers
  let aInt = new Array();
  for (i = 0; i < 11; i++) {
    aInt[i] = parseInt(s.substring(i, i + 1));
    if (isNaN(aInt[i])) {
      setError(1);
      return;
    }
  }

  // Validate PESEL Checksum
  let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
  let sum = 0;
  for (i = 0; i < 11; i++)
    sum += weight[i] * aInt[i];
  if (setError((sum % 10) != 0))
    return;

  // Calculate Date of Birth including XIX, XXI, XXII and XXIII century
  let year = 1900 + aInt[0] * 10 + aInt[1];
  if (aInt[2] >= 2 && aInt[2] < 8)
    year += Math.floor(aInt[2] / 2) * 100;
  if (aInt[2] >= 8)
    year -= 100;

  let month = (aInt[2] % 2) * 10 + aInt[3];
  let day = aInt[4] * 10 + aInt[5];

  // Validate Date of Birth
  if (setError(!checkDate(day, month, year)))
    return;

  // Calculate Gender
  let gender = (aInt[9] % 2 == 1) ? 'Male' : 'Female';

  // Display data
  let monthStr = (month < 10 ? '0' : '') + month;
  let dayStr = (day < 10 ? '0' : '') + day;
  document.getElementById('dateOfBirth').value = `${dayStr}-${monthStr}-${year}`;
  document.getElementById('gender').value = gender;
}

// Display error
function setError(c) {
  document.getElementById('hasError').style.visibility = (c ? 'visible' : 'hidden');
  document.querySelector('.errorMessage').style.display = (c ? 'block' : 'none');
  return c;
}

// Clear current data
function clearData() {
  document.getElementById('hasError').style.visibility = 'hidden';
  document.querySelector('.errorMessage').style.display = 'none';

  document.getElementById('dateOfBirth').value = '';
  document.getElementById('gender').value = '';
}

// Validate date
function checkDate(d, m, y) {
  let dt = new Date(y, m - 1, d);
  return dt.getDate() == d &&
    dt.getMonth() == m - 1 &&
    dt.getFullYear() == y;
}