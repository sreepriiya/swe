function checkValue() {
  // Get the input value and split it into an array
  var listOfNumbers = document.getElementById('rafflevalue').value.split(',');
  
  // Check if there are at least ten numbers
  if (listOfNumbers.length < 10) {
    alert('Please enter at least ten numbers.');
    return;
  }
  
  // Convert the numbers from strings to integers
  listOfNumbers = listOfNumbers.map(function(number) {
    return parseInt(number.trim());
  });
  
  // Check if all numbers are valid (between 1 and 100)
  for (var i = 0; i < listOfNumbers.length; i++) {
    if (isNaN(listOfNumbers[i]) || listOfNumbers[i] < 1 || listOfNumbers[i] > 100) {
      alert('Please enter valid numbers between 1 and 100.');
      return;
    }
  }
  

  var winningNumbers = [2, 18, 38, 55, 72, 88, 92]; 
  var numOfMatches = 0;
  for (var i = 0; i < listOfNumbers.length; i++) {
    if (winningNumbers.includes(listOfNumbers[i])) {
      numOfMatches++;
    }
  }
  if (numOfMatches >= 2) {
    alert('Congratulations! You win a free movie ticket!');
  } else {
    alert('Sorry, you did not win this time. Better luck next time!');
  }
}