import binSearch from "./images/binaryTree.png";
import graphimage from "./images/graphimg.jpg";
import sortimage from "./images/sortingimg.png"
export function getDetails(){
   return [  
       {
           id:1,
           title:"Binary Search",
           description:"Binary search is an efficient algorithm for finding an item from a sorted list of item",
           route:"/binarySearch",
           img:binSearch
       },
    //    {
    //     id:2,
    //     title:"Graph",
    //     description:"A Graph is a non-linear data structure consisting of vertices and edges.",
    //     route:"/binarySearch",
    //     img:graphimage
    // },
    // {
    //     id:3,
    //     title:"Sorting",
    //     description:"Sorting algorithm specifies the way to arrange data in a particular order.",
    //     route:"/binarySearch",
    //     img:sortimage
    // }
   ]
}