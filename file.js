// write a Javascript, Python, or OCaml program that:
// -accepts a list of integers
// -emits an error message if the list is not a multiple of 10 in length
// -returns or prints a list of integers based on the input list, but with items at positions
//  which are a multiple of 2 or 3 removed

// As per given choices bellow is the javscript program.


function processIntegerList(inputList) {
    // It Checks if the length of the list is a multiple of 10
    if (inputList.length % 10 !== 0) {
      console.error("Error: The length of the list is not a multiple of 10.");
      return;
    }
  
    // Filter out items at positions which are a multiple of 2 or 3
    const processedList = inputList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
  
    // Print or return the processed list
    console.log("Processed List:", processedList);
  }
  
  // DATA:
  const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  processIntegerList(inputList);
  
________________

// or the different approch for this program can be .

// function processIntegerList(inputList) {
//     if (inputList.length % 10 !== 0) return console.error("Error: The length must be a multiple of 10.");
//     const processedList = inputList.filter((_, i) => (i + 1) % 2 !== 0 && (i + 1) % 3 !== 0);
//     console.log("Processed List:", processedList);
//   }
  
//   // DATA:
//   const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//   processIntegerList(inputList);
  