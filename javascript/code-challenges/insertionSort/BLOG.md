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