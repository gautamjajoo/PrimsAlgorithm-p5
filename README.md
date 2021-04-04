### Solving Minimum Spanning Tree using Prim's Algorithm

Minimum spanning tree is a spanning tree with weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.

We will use [Prim's Algorithm](https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/) to solve the problem.

The set of vertices is divided into two different sets - connected and notConnected.

Initially all are given keyvalue as `INFINTE`. As we pick first vertex, we assign `0` as the keyvalue. 
Then we pick another vertex and find the minimum distance and store these values in an array.

All the connected vertices are assing `0` as the keyValue.

Similarly, we calculate the minimum distance for all vertices and join one by one. 

![Screenshot from 2021-04-04 16-12-46](https://user-images.githubusercontent.com/24366008/113507948-0b62dd80-956b-11eb-819b-3c081898da81.png)

