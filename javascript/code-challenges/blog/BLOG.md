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

# Quick Sort

## Pseudocode

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value 
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right. 
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Trace

We will trace through the array [8, 4, 23, 42, 16, 15]

## What is happening

Quick Sort is about dividing elements into smaller parts. It selects an item in the array to become the pivot and starts dividing from there.

To start, you'll first find if the left item is smaller than the right, if it is, we'll call our partition function. 

In partition, you'll assign your pivot which will be the most right item in the array. You'll set low to the most left item minus 1. You'll loop through from left to right. If the item is less than or equal to the pivot, you're going to increment low and call swap.

In swap, we're setting temp equal to the item in the array. Then setting the item in the array equal to the array at low. Then array at low to temp.

Back to partition, outside of the for loop we're going to call swap again and return low + 1. We'll go back to quickSort and run through the function recursively.