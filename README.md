# Code Finder

This repository contains a simple code finder application implemented in JavaScript. The application allows users to search for a password within a list of common passwords. If the password is found, it displays the password along with the time taken to find it. If the password is not found in the list of common passwords, it performs a systematic search to find the password.

## Implementation Details

### JavaScript Functions

#### findCodeAlgorithm(targetCode)
- This function takes a target password as input and attempts to find it by incrementing through all possible combinations of characters until the target password is found.
- It relies on the `incrementCode` function to generate all possible combinations.

#### incrementCode(code)
- This function takes a code (password) as input and generates the next possible code (password) by incrementing through all possible combinations of characters.
- It is used by the `findCodeAlgorithm` function to generate all possible combinations.

### CommonCodes Class

#### constructor()
- Initializes an instance of the CommonCodes class with an empty Map to store common passwords.

#### populate(...filenames)
- Populates the CommonCodes instance with common passwords from the provided text files.
- Each text file contains a list of passwords separated by newline characters.
- It uses the Fetch API to asynchronously read the contents of each file and populate the Map.

#### contains(code)
- Checks if the given code (password) exists in the Map of common passwords.
- Returns true if the code is found, otherwise returns false.

### HTML Interface

The HTML interface provides a simple user interface for the code finder application. It consists of an input field for the user to enter the password to find, a button to trigger the search,
and a result area to display the outcome of the search, including the time taken to find the password.
