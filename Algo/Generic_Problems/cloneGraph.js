function cloneGraph(root) {
    if(!root)
      return null;

    const cloned_root = createNode(root);
    if(!root.neighbors || !root.neighbors.length)
      return cloned_root;
    
    const visited = new Map();
    const queue = [root, cloned_root];

    while(queue.length){
        const current_vertex = queue.shift();
        const cloned_vertex = queue.shift();
        const current_vertex_key = current_vertex.data;
        current_vertex.neighbors.forEach(nextVertex => {
          const next_vertex_key = nextVertex.data;
          if(!visited.has(next_vertex_key)){
            queue.push(nextVertex);
            queue.push(createNode(nextVertex.data));
            cloned_vertex.neighbors.push(nextVertex);
          }
        });
        if(!visited.has(current_vertex_key))
            visited.set(current_vertex_key, current_vertex);
    }
    return cloned_root;
}


function createNode(data){
    return ({ data ,  neighbors : []});
}


const vertex1 = createNode(1);
const vertex2 = createNode(2);
const vertex3 = createNode(3);
const vertex4 = createNode(4);

vertex1.neighbors.push(vertex2);
vertex1.neighbors.push(vertex3);

vertex2.neighbors.push(vertex1);
vertex2.neighbors.push(vertex4);

vertex3.neighbors.push(vertex1);
vertex3.neighbors.push(vertex4);

vertex4.neighbors.push(vertex2);
vertex4.neighbors.push(vertex3);

import { inspect } from "util";
console.dir(inspect(cloneGraph(vertex1),true, 5 ));

