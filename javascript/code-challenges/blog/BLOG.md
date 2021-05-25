# Insertion Sort

## Pseudocode

```
 InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Trace

We will trace through the array [8, 4, 23, 42, 16, 15]

## What is happening

Insertion sort is a method where we divide the array into a sorted section and an unsorted section. We compare the unsorted items to see if it is larger than the previous item. If it is not bigger, then we insert that item. We look from left to right and sort as we go.

The first step is creating a for loop to loop over each item of the array.

We set j so we can use that for our while loop and we are using temp to hold the current item.

Next we set up a nested while loop to loop through the array and evaluate the numbers against each other. We evaluate the numbers if the item is greater than 0 and the current item is smaller than the item in the array.

# Merge Sort

## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Trace

We will trace through the array [8, 4, 23, 42, 16, 15]

## What is happening

Overall, we are trying to sort an array by merging the numbers in the array together. Our end goal is [4, 8, 15, 16, 23, 42].

### mergeSort

To start off, we're setting n to be arr.length so that our code is more readable. If the array length is larger than 1, then we will go through the process of going through our if condition.

First we will find the middle by dividing the array in half. Once we have the middle we can find the left and right numbers by further dividing the array. We will use slice() to find the left numbers and splice() to find the right. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string. The splice() method removes or replaces existing elements.

Next we will use recursion to combine the left and right.

### merge

We need to use merge to merge the two arrays: left and right. The while loop is where you will figure out what numbers belong on the left and right. We will then use the second while loop to properly push the correct numbers into the left and right arrays.