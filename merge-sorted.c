#include <stdio.h>

void merge_time_efficient(int *nums1, int m, int *nums2, int n) {
  int nums1_pointer = 0;
  int nums2_pointer = 0;
  int new_arr[m + n];
  for (int i = 0; i < m + n; i++) {
    if (nums1_pointer >= m) {
      new_arr[i] = nums2[nums2_pointer];
      nums2_pointer++;
    } else if (nums2_pointer >= n) {
      new_arr[i] = nums1[nums1_pointer];
      nums1_pointer++;
    } else {
      int num_1 = nums1[nums1_pointer];
      int num_2 = nums2[nums2_pointer];
      if (num_1 < num_2) {
        new_arr[i] = num_1;
        nums1_pointer++;
      } else {
        new_arr[i] = num_2;
        nums2_pointer++;
      }
    }
  }

  for (int i = 0; i < m + n; i++) {
    nums1[i] = new_arr[i];
  }
}

/*
 * A space efficient implementation would sort nums1 in place by shifting the
 * remaining nums1 values to the right one and then inserting the next lowest
 * number where the gap was left. Note that the shifting makes the time
 * complexity O(n^2).
 *
 * example:
 * nums1 = [1, 4, 6, 0, 0, 0];
 * nums2 = [2, 3, 7];
 *
 * [1, 4, 6, 0, 0, 0];
 * [1, _, 4, 6, 0, 0] -> [1, 2, 4, 6, 0, 0];
 * [1, 2, _, 4, 6, 0] -> [1, 2, 3, 4, 6, 0];
 * [1, 2, 3, 4, 6, 7];
 */

int main() {
  int arr1[6] = {1, 2, 3, 0, 0, 0};
  int *ptr1 = arr1;
  int arr2[3] = {2, 5, 6};
  int *ptr2 = arr2;
  merge_time_efficient(ptr1, 3, ptr2, 3);
  return 1;
}
