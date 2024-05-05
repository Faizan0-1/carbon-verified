document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');

  // Function to toggle between dark and light themes
  function toggleTheme() {
      const body = document.body;
      body.classList.toggle('light-theme');
  }

  // Event listener for theme toggle
  themeToggle.addEventListener('click', toggleTheme);
});

document.addEventListener("DOMContentLoaded", function() {
  const circularProgressBars = document.querySelectorAll('.circular-progress');

  circularProgressBars.forEach(function(bar) {
      const progress = parseInt(bar.getAttribute('data-progress'));
      const circumference = 2 * Math.PI * (parseInt(bar.offsetWidth) / 2);
      const offset = circumference - (progress / 100) * circumference;
      bar.style.setProperty('--progress', `${offset}px`);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Selecting the circular progress elements
  const seoPerformanceProgressBar = document.querySelector(".seo-performance");
  const bestPracticesProgressBar = document.querySelector(".best-practices");
  const seoScoreProgressBar = document.querySelector(".seo-score");

  // Selecting the value containers within each circular progress element
  const seoPerformanceValueContainer = document.querySelector(".seo-performance .value-container");
  const bestPracticesValueContainer = document.querySelector(".best-practices .value-container");
  const seoScoreValueContainer = document.querySelector(".seo-score .value-container");

  // Setting initial progress values
  let progressValues = {
      seoPerformance: 0,
      bestPractices: 0,
      seoScore: 0
  };

  // End values for progress
  const seoProgressEndValue = parseInt(seoPerformanceProgressBar.getAttribute('data-end-value'));
  const bestPracticesProgressEndValue = parseInt(bestPracticesProgressBar.getAttribute('data-end-value'));
  const seoScoreProgressBarEndValue = parseInt(seoScoreProgressBar.getAttribute('data-end-value'));

  // Speed of progress animation
  const speed = 50;

  // Function to update progress and colors
  function updateProgress(progressBar, valueContainer, progressValue, progressEndValue) {
      // Updating the value container text
      valueContainer.textContent = `${progressValue}%`;

      // Updating the progress bar gradient
      progressBar.style.background = `conic-gradient(
      ${getProgressColor(progressValue)} ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;

      // Adding conditional color classes to the value container
      valueContainer.classList.remove("less-than-50", "above-50", "above-90");
      if (progressValue < 50) {
          valueContainer.classList.add("less-than-50");
      } else if (progressValue < 90) {
          valueContainer.classList.add("above-50");
      } else {
          valueContainer.classList.add("above-90");
      }

      // Check if progress has reached the end value
      if (progressValue >= progressEndValue) {
          clearInterval(progressBar.progressInterval); // Stop the progress animation
      }
  }

  // Function to get the progress color based on the progress value
  function getProgressColor(progressValue) {
      if (progressValue < 50) {
          return "#e74c3c"; // Red color for score less than 50
      } else if (progressValue < 90) {
          return "#f39c12"; // Orange color for score above 50 and below 90
      } else {
          return "#2ecc71"; // Green color for score above 90
      }
  }

  // Animating the progress for each circular progress element
  function animateProgress(progressBar, valueContainer, progressEndValue) {
      let progressValue = 0;

      // Start the progress animation interval
      progressBar.progressInterval = setInterval(() => {
          // Increment progress value
          progressValue++;

          // Update progress and colors
          updateProgress(progressBar, valueContainer, progressValue, progressEndValue);
      }, speed);
  }

  // Start progress animation for each circular progress element
  animateProgress(seoPerformanceProgressBar, seoPerformanceValueContainer, seoProgressEndValue);
  animateProgress(bestPracticesProgressBar, bestPracticesValueContainer, bestPracticesProgressEndValue);
  animateProgress(seoScoreProgressBar, seoScoreValueContainer, seoScoreProgressBarEndValue);
});


document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
      question.addEventListener('click', function() {
          this.classList.toggle('active');
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const codeContainers = document.querySelectorAll('.code-container');

  codeContainers.forEach(container => {
      const expandIcon = container.querySelector('.expand-icon');
      const codeContent = container.querySelector('.code-content');

      expandIcon.addEventListener('click', function() {
          container.classList.toggle('show-content');
      });
  });
});

$(document).ready(function() {
  $('.expand-icon').click(function() {
      $(this).closest('.code-container').toggleClass('show-content');
  });
});

// Function to copy code blocks to the clipboard
function codeCopy() {
  console.log("Copying code...");

  const copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach(copyButton => {
      copyButton.addEventListener('click', function() {
          const codeBlock = this.parentNode.querySelector('code');
          navigator.clipboard.writeText(codeBlock.innerText)
              .then(() => {
                  const successAlert = document.querySelector('.alert-success');
                  successAlert.style.display = 'block'; // Show success alert
                  setTimeout(() => {
                      successAlert.style.display = 'none'; // Hide after 3 seconds
                  }, 3000);
              })
              .catch(err => {
                  console.error('Unable to copy code: ', err);
                  const errorAlert = document.querySelector('.alert-error');
                  errorAlert.style.display = 'block'; // Show error alert
                  setTimeout(() => {
                      errorAlert.style.display = 'none'; // Hide after 3 seconds
                  }, 3000);
              });
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  codeCopy();
});