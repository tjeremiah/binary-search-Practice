const search = (nums, target) => {
    let start = 0;
    let end = nums.length -1;
    let ascending = nums[start] < nums[end]

    while ( start <= end ) {

        mid = Math.floor(start + (end - start) / 2)  //get the middle index
        if (target == nums[mid]) {
            return mid
        }
        if(ascending) { // nums is sorted in ascending order
          if (target < nums[mid]) {
            end = mid -1
          }
          else { 
            start = mid + 1
          }
       }
       else { // nums is sorted in descending order
           if(target > nums[mid]) {
               end = end - 1
           }
           else {
              start = mid +1
           }
       }
    }
}


console.log(search([-1,0,3,5,9,12], 9))