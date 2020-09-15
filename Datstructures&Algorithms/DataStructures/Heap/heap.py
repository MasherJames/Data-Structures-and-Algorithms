'''
Binary heap -  Complete binary tree
    i) Max Heap - The value of the key at the root node is greater
       than all other values below it
    ii) Min Heap - The value of the key at the root node is lesser
        than all other values below it

- Height is log n since it's filled from left to right

Common uses
 - Heap sort, with a O(log n) time complexity
 - Priority Queue (Abstract Data Type)
 - Graph Algorithms

Left Node Index = 2 * parent_node_indx
Right Node Index = 2 * parent_node_indx + 1
Parent Node Index = child_node_indx / 2
'''




def heapify_max(arr_heap, parent_indx, total_nodes):
    left_node_indx = 2 * parent_indx
    right_node_indx = 2 * parent_indx + 1

    largest_value_node_indx = parent_indx

    # Check if the left node is greater than parent
    if left_node_indx < total_nodes and arr_heap[left_node_indx] > arr_heap[parent_indx]:
        largest_value_node_indx = left_node_indx

    # Check if the right node is greater than the parent
    if right_node_indx < total_nodes and arr_heap[right_node_indx] > arr_heap[largest_value_node_indx]:
        largest_value_node_indx = right_node_indx

    # don't swap if the largest value is the parent index

    if largest_value_node_indx != parent_indx:
        parent_node_temp = arr_heap[parent_indx]
        arr_heap[parent_indx] = arr_heap[largest_value_node_indx]
        arr_heap[largest_value_node_indx] = parent_node_temp
        print(arr_heap)
        heapify_max(arr_heap, largest_value_node_indx, len(arr_heap))

'''
First element in array is None to make the root node index 1
'''
heap_data = [None, 4, 7, 8, 3, 2, 6, 5]
heapify_max(heap_data, 1, len(heap_data))