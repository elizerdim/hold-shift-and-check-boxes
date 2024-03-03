const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(e) {
  let inbetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        inbetween = !inbetween;
      }

      if (inbetween) {
        checkbox.checked = true;
      }
    })
  }
}


// The following code is Wes Bos's solution from the challenge

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
//
// let lastChecked;
//
// function handleCheck(e) {
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     checkboxes.forEach(checkbox => {
//       console.log(checkbox);
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//         console.log('Starting to check them in between!');
//       }
//
//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }
//
//   lastChecked = this;
// }