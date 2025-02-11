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

int remove_element(int *nums, int numsSize, int val) {
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

int remove_duplicates(int *nums, int numsSize) {
  int pointer = 0;
  for (int i = 0; i < numsSize; i++) {
    if (i == numsSize - 1 || nums[i] != nums[i + 1]) {
      nums[pointer] = nums[i];
      pointer += 1;
    }
  }
  return pointer;
}

int remove_duplicates_keep_pairs(int *nums, int numsSize) {
  int pointer = 0;
  int count = 0;
  for (int i = 0; i < numsSize; i++) {
    if (i == numsSize - 1 || nums[i] != nums[i + 1]) {
      count = 0;
    } else {
      count++;
    }
    if (count < 2) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
}

/**
 * This implementation assumes that a majority exists. If we cannot make this
 * assumptions, an additional iteration is required to confirm it is an actual
 * majority.
 * Intuition: if it's not the majority in arr[i..j] then we can ignore
 * arr[i...j] because it would have to be the majority in arr[j...k] to
 * potentially be the overall majority, and if that's the case then we would
 * count it as the majority anyway.
 */
int boyer_moore_vote(int *nums, int numsSize) {
  int count = 0;
  int element;

  for (int i = 0; i < numsSize; i++) {
    if (i == 0) {
      element = nums[i];
      count++;
      continue;
    }

    count += nums[i] == element ? 1 : -1;
    if (count <= 0) {
      element = nums[i];
      count = 1;
    }
  }

  return element;
}

void rotate_arr(int *nums, int numsSize, int k) {
  int mod_k = k % numsSize;
  for (int i = 0; i < mod_k; i++) {
    int prev_el;
    for (int j = 0; j < numsSize; j++) {
      if (j == 0) {
        prev_el = nums[0];
      }
      int next_el_index = j == numsSize - 1 ? 0 : j + 1;
      int tmp = nums[next_el_index];
      nums[next_el_index] = prev_el;
      prev_el = tmp;
    }
  }
}

void rotate_arr_eff(int *nums, int numsSize, int k) {
  // Reverse whole arr
  // Reverse the last k els
  // Reverse the first n-k els
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

int main() {
  int arr[] = {1, 2, 3, 4, 5, 6, 7};
  int size = 7;
  rotate_arr(arr, size, 3);
  printArray(arr, size);
  return 1;
}
