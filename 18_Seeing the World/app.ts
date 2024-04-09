// Making a Array of Countries and Print its Original order
let countriesToVisit: string[] = ["China", "Denmark" , "Brazil" , "Australia"];
console.log("Original Order:", countriesToVisit) 


// Print the Array in Alphabetical Order without modifying the Actual Array list
console.log("Alphabetical order:", [...countriesToVisit].sort());

//show that the array is still in its original order
console.log("Still in original order:", countriesToVisit)

// print the array in reversed order without modifying the actual array list.
console.log("Reverse Order:", [...countriesToVisit].reverse()); 

//show that the array is still in its original order
console.log("Still in original order:", countriesToVisit)

// we have changed the original array order now
console.log("Original Array Reversed:", countriesToVisit.reverse()); 

// print the array to show that its back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort()); 

// we have changed again the original order array now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse()); 