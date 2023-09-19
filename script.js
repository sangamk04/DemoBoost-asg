// Practicing JavaScript
document.addEventListener('DOMContentLoaded', () => {
  
    let $staffBoxes = document.querySelectorAll('.staff-box');
    for ( let eachStaffBox of $staffBoxes ) {
      eachStaffBox.style = 'border:solid green;';
      eachStaffBox.classList.add('buggerface');
    }
  
  });
  /*
  document.addEventListener('DOMContentLoaded', () => {
    
    let $titles = document.querySelectorAll('h2');
    for (let $eachTitle of $titles ) {
      $eachTitle.classList.add('purpleAliens');
    }
    
  });
  */
  
  /*document.addEventListener('DOMContentLoaded', () => {
     let $titles = document.querySelectorAll('h2');
     for ( let $titleEach of $titles ) {
       $titleEach.classList.add('purpleAliens');
     } 
  })*/
  
  let $images = document.querySelectorAll('img');
  for ( let $eachImage of $images ) {
    $eachImage.addEventListener('click', addClass);  
  }
  
  function addClass() {
    this.classList.toggle('supercool'); 
    this.parentElement.classList.toggle('supercool');
    this.parentElement.style = "border:solid purple;";
  } 
  
  resetButton = document.createElement('button');
  resetButton.innerHTML = 'I <em>am</em> a demon';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
  
  function resetGame() {
    alert('woah, you reset the game!');
    resetButton.parentNode.removeChild(resetButton);
  }
  
   