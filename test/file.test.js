// file.test.js

const { processIntegerList } = require('./processList');

describe('processIntegerList', () => {
  // Test case 1
  it('should return processed list without items at positions multiple of 2 or 3', () => {
    const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const expectedOutput = [1, 4, 5, 7, 9, 11];
    expect(processIntegerList(inputList)).toEqual(expectedOutput);
  });

  // Test case 2
  it('should emit an error message if the list length is not a multiple of 10', () => {
    const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    processIntegerList(inputList);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error: The length must be a multiple of 10.');
    consoleErrorSpy.mockRestore();
  });
});
