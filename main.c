#include <assert.h>
#include <stdio.h>

void merge_optimal(int *nums1, int m, int *nums2, int n) {
  int i = m - 1;
  int j = n - 1;
  int k = m + n - 1;

  // Invariants:
  // k+1 -> length is sorted -> nums[k] < nums[k+1] ... < nums[length-1]
  // nums1 -> i is sorted -> nums1[0] < ... < nums1[i]
  // nums1[k+1] >= nums1[i]
  // therefore, if k == i the array is sorted
  // k = i + j + 1
  // assume j == -1, meaning we have added all the elements in nums2:
  // k = i + (-1) + 1
  // k = i
  // therefore, if j == -1 then k == i and the array is sorted
  while (i < k) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

int removeElement(int *nums, int numsSize, int val) {
  int count = 0;
  int i = 0;

  while (i < numsSize - count) {
    if (nums[i] == val) {
      int tmp = nums[i];
      int pointer = numsSize - count - 1;
      nums[i] = nums[pointer];
      nums[pointer] = tmp;
      count += 1;
    } else {
      i++;
    }
  }

  return numsSize - count;
}

void printArray(int *arr, int size) {
  printf("[");
  for (int i = 0; i < size; i++) {
    printf("%d", arr[i]);
    if (i < size - 1)
      printf(", ");
  }
  printf("]\n");
}

int main() { return 1; }
