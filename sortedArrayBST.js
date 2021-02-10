function TreeNode(val){
    this.val = val;
     this.left = null;
     this.right = null;
}

const sortedArrayToBST = (nums) => {
    if(nums.length == 1) {
        return new TreeNode(nums[0])
    }
    if (nums.length == 0 ) {
        return null
    }

    let centerIdx = Math.floor(nums.length/2)
    let root = new TreeNode(nums[centerIdx])
    
    // left sub tree
    let leftSubTree = nums.slice(0, centerIdx )
    root.left = sortedArrayToBST(leftSubTree)
     
    // right sub tree
    let rightSubTree = nums.slice(centerIdx +1, nums.length)
     root.right = sortedArrayToBST(rightSubTree)

     return root;
}
console.log(sortedArrayToBST([-10, -3,0, 5,9]))
   
const helper()