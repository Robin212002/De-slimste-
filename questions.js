document.getElementById('questions-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const question = document.getElementById('question').value;
  const answers = document.getElementById('answers').value.split(',').map(answer => answer.trim());
  
  // Store the question and answers in local storage or send them to a backend for storage

  // Redirect to the game interface
  window.location.href = 'game.html'; // Redirect to the game interface
});
