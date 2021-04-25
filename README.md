# Data Structures and Algorithms

See [setup instructions](https://codefellows.github.io/setup-guide/code-301/3-code-challenges), in the Code 301 Setup Guide.

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges

- Please follow the instructions specific to your 401 language, which can be found in the directory below, matching your course.

# Code Challenges

## [Challenge 02 - array-shift](./javascript/code-challenges/arrayShift/array-shift.js)

### Challenge Summary
Write a function where you put a new value in the middle of an array.

### Challenge Description
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

### Approach & Efficiency
I used the .splice method. When googling, I found that this was the most common practice. I looked up how splice works and it seemed like it would be the most effective way to put the new value in the middle of the array.

### Solution
![code challenge 2](./assets/array-shift.png)

## [Challenge 03 - array-binary-search](./javascript/code-challenges/arrayBinarySearch/array-binary-search.js)

### Challenge Summary
Write a function where you use binary search to find an element in the array

### Challenge Description
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.
NOTE: The search algorithm used in your function should be a binary search.

### Approach & Efficiency
I used binary search. I had to look up how to use it and found this page: [link to resource](https://stackabuse.com/binary-search-in-javascript/). This page did a great job at explaining how this code works and what the process of this code is.

### Solution
![code challenge 3](./assets/array-binary-search.png)

## [Challenge 05 - array-binary-search](./javascript/code-challenges/linkedList/ll.js)

### Challenge Summary
Define a method for insert that adds a new node to the head of the list. Define a method called includes that takes any value to return a boolean. Define a method call toString that returns a string of all the values in the list.

### Challenge Description
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
  - Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
  - Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
  - Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
    - "{ a } -> { b } -> { c } -> NULL"
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
- Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

### Approach & Efficiency
- For the method called insert, I used Brian's demo code and changed everything that said append to insert. Append adds to the end and insert is what added to the head of the list which is why we were able to make that change.
- For the includes method I was able to google more methods that works with linked lists to have a better understanding of what you're supposed to do. I found [this article](https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571) and was able to attempt includes.
- For the toString method I knew I needed to find a way to concat my values to the format that is required by the assignment. I wasn't able to figure it out with concat but was able to use template literals to create how I wanted my string to be formatted.

### API
**insert** The method creates a new node. If the head doesn't exist then it will set the head. Else, it will start the traversal. The while loop will go through everything and creates the actual traversal. When you get to the end you'll see current.next setting the node as the next value. At the end, return this to return the whole list.

**includes** The method set thisNode to null with val as an argument. It goes through the while loop, if theNode's value strict equals to val then it will return true because that means it is found in the link list. If thisNode reaches the end at thisNode.next then it will return false.

**toString** The method sets thisNode to null and string to an empty string. It goes through the while loop with thisNode. We have our empty string and we're adding the thisNode's value. If it reaches the end and is at thisNode.next which will equal null, then the string will add NULL. thisNode = thiseNode.next; will be the end of the loop and will return the populated string.