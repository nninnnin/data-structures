// ------------------------
// Instantiate a new graph
const Graph = function() {
  this.nodes = {}; // nodes의 각 인덱스(키)는 노드넘버를 의미한다
  return this;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeNumber) {
  if (typeof nodeNumber !== "number") {
    throw new Error('Error : node number should be a value type of "number"');
  }

  this.nodes[nodeNumber] = []; // 빈 배열이 할당된 것은 해당 인덱스(node)가 가리키는 곳에 빈 노드가 생성되었음을 의미하고, 해당 배열의 인덱스는 이 노드와 연결된 edge의 존재를 의미한다.

  return true;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes.hasOwnProperty(node)) {
    return true;
  }

  return false;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  const nodeNumber = node;
  delete this.nodes[nodeNumber];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) { // 먼저 노드가 존재하는지 확인하고..
    if (this.nodes[fromNode][toNode] === 1 && this.nodes[toNode][fromNode] === 1) { // 엣지가 존재하는지 (잘 가리키고 있는지)
      return true;
    } 
    
    // 존재하지 않는다면..
    return false;
  }

  return new Error('Some or all nodes are not defined');
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    this.nodes[fromNode][toNode] = 1;
    this.nodes[toNode][fromNode] = 1;

    return true;
  }

  return new Error('Some or all nodes are not defined');
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    this.nodes[fromNode][toNode] = 0;
    this.nodes[toNode][fromNode] = 0;
  
    return true;
  }
  
  return new Error('Some or all nodes are not defined');
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (node of Object.keys(this.nodes)) {
    cb(node);
  }
};


Graph.prototype.traverse = function () {
  // dfs로 구현
  
  // bfs로 구현
}