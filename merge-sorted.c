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
}

void merge_optimal(int *nums1, int m, int *nums2, int n) {
  int i = m - 1;
  int j = n - 1;
  int k = m + n - 1;

  // Invariants:
  // k+1 -> length is sorted
  // 1 -> i is sorted
  // arr[k+1] >= arr[i]
  // therefore, if k = i the array is sorted
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

int main() {
  int arr1[6] = {4, 5, 6, 0, 0, 0};
  int *ptr1 = arr1;
  int arr2[3] = {1, 2, 3};
  int *ptr2 = arr2;
  merge_optimal(ptr1, 3, ptr2, 3);

  for (int i = 0; i < 6; i++) {
    printf("%d", arr1[i]);
    if (i != 5) {
      printf(", ");
    } else {
      printf("\n");
    }
  }

  return 1;
}
