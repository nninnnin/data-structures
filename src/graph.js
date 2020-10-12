// ------------------------
// Instantiate a new graph
const Graph = function() {
  this.nodes = {};
  return this;
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeNumber) {
  if (typeof nodeNumber !== "number") {
    throw new Error('Error : node number should be a value type of "number"');
  }

  this.nodes[nodeNumber] = [];

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
  if (this.nodes.hasOwnProperty(fromNode) && this.nodes.hasOwnProperty(toNode)) {
    if (this.nodes[fromNode][toNode] === 1 && this.nodes[toNode][fromNode] === 1) {
      return true;
    } else {
      return false;
    }
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