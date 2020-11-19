var findMedianSortedArrays = function(nums1, nums2) {
    let sortedArray = []

    if (nums1.length === 0) {
        sortedArray = nums2
    }
    else if (nums2.length === 0) {
        sortedArray = nums1
    } 
    else {
        let index1 = 0
        let index2 = 0

        while (index1 != nums1.length && index2 != nums2.length) {
            if (nums1[index1] <= nums2[index2]) {
                sortedArray.push(nums1[index1])
                index1++
            } else {
                sortedArray.push(nums2[index2])
                index2++
            }
        }

        while (index1 === nums1.length && index2 != nums2.length) {
            sortedArray.push(nums2[index2])
            index2++
        }

        while (index1 != nums1.length && index2 === nums2.length) {
            sortedArray.push(nums1[index1])
            index1++
        }
    }

    if (sortedArray.length === 1) {
        return sortedArray[0]
    }    
    else if (sortedArray.length % 2 === 1) {
        let sortedIndex = (sortedArray.length - 1) / 2
        return sortedArray[sortedIndex]
    }
    else {
        let sortedIndex = sortedArray.length / 2
        let mean = (sortedArray[sortedIndex - 1] + sortedArray[sortedIndex]) / 2
        return mean
    }
};