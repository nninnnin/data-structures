# Data Structures
---

## 실행하기
- `SpecRunner.html`을 브라우저에서 열어주세요.
- 기본적으로 주어진 테스트를 통과하도록 만들어 주세요.
- 테스트가 부족해보이다면 직접 작성해 주세요.

## 진행 순서

### 1. [Linked List](https://en.wikipedia.org/wiki/Linked_list)

과제를 진행하기 전에 반드시 스스로 조사하여 Linked List의 특성에 대해 공부하세요. 특성과 실생활에서의 용도에 대해 공부하세요.

* 아래 프로퍼티(property)들을 가지고 있는 `linkedList` class를 구현하세요:
  - [ ] `linkedListNode` instance를 value로 가지고 있는 `.head` property.
  - [ ] `linkedListNode` instance를 value로 가지고 있는 `.tail` property.
  - [ ] value를 받아 list의 마지막에 넣어주는 `.addToTail()` method.
  - [ ] list에서 첫번째 node를 지우고 지운 value를 return하는 `.removeHead()` method.
  - [ ] argument로 받은 value가 linked list에 있는지 boolean으로 알려주는 `.contains()` method.
  - [ ] 위 function들의 time complexity는 무엇인가요?

### 2. [Tree](https://en.wikipedia.org/wiki/Tree_(data_structure))

과제를 진행하기 전에 반드시 스스로 조사하여 Linked List의 특성에 대해 공부하세요. 특성과 실생활에서의 용도에 대해 공부하세요.

* 아래 프로퍼티들을 가지고 있는 `tree` class를 구현하세요:
  - [ ] 하위 tree를 array안에 담고 있는 `.children` property.
  - [ ] 특정 value를 받아 node에 넣고 그 node를 tree의 child로 넣는 `.addChild()` method.
  - [ ] argument로 받은 value가 특정 node와 그 자손(descendant) node에 있는지 boolean으로 알려주는 `.contains()` method.
  - [ ] 위 function들의 time complexity는 무엇인가요?

### 3. [Graph](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))

Graph는 node (종종 꼭지점(vertices)이라 부름)와 edge (종종 호(arcs)라고 함)로 구성되어 노드를 연결합니다.
tree와는 다르게 hierarchical data structure가 아닐수도 있습니다.

Graph data structure에는 2가지의 종류가 있습니다: 비_방향성(undirected)와 방향성(directed).

undirected graph는 edge로 연결된 두 node의 관계가 대칭 관계(symmetrical relationship)입니다.
directed graph는 edge에 의해 연결된 node의 관계가 비대칭 관계(asymmetric relationship)입니다.
여러분은 undirected graph를 구현 하실것입니다.

* 아래 프로퍼티들을 가지고 있는 `graph` class를 구현하세요:
  - [ ] undirected graph를 구현하세요. 서로 연결되어 있을 필요는 없습니다.
  - [ ] 새로운 node를 argument로 받아 graph에 넣어주는 `.addNode()` method.
  - [ ] node를 argument로 받아 그 node가 graph에 존제하는지 boolean으로 알려주는 `.contains()` method.
  - [ ] node를 argument로 받아 graph에 있으면 없에주고 없어지는 node와 연결 되어 있는 edge들도 전부 없에 주는 `.removeNode()` method.
  - [ ] 만약 2개의 node가 graph안에 존제 한다면 그 2개의 node 사이에 edge (connection)를 만들어주는 `.addEdge()` method.
  - [ ] 2개의 node가 연결되어 있는지 boolean value로 알려주는 `.hasEdge()` method.
  - [ ] 2개의 node의 연결 고리를 없에주는 `.removeEdge()` method.
  - [ ] augument로 받은 callback function을 graph를 횡단(traverse)하여 node마다 한번씩 invoke하는 `.forEachNode()` method
  - [ ] 위 function들의 time complexity는 무엇인가요?

### 4. [Set](https://en.wikipedia.org/wiki/Set_(abstract_data_type))

Set는 특별한 순서 없이 unique한 value가 들어 있습니다.

* 아래 프로퍼티들을 가지고 있는 `set` class를 구현하세요:
  - [ ] string value를 받아 `set`에 넣어주는 `.add()` method.
  - [ ] string value를 받아 `set`에 있는지 없는지 boolean value를 return하여 알려주는 `.contains()` method.
  - [ ] string value를 받아 `set`에 그 value가 존재할시 없에 주는 `.remove()` method.
  - [ ] 위 function들의 time complexity는 무엇인가요?
  * **Note:** `set`은 필요 이상의 공간을 사용하지 말아야합니다. 막약 value가 set에 있다면, 똑같은 value를 다시 set에 넣는 것으로 `set`의 size가 커지지 않아야 합니다.

### 5. [Hash Table](https://en.wikipedia.org/wiki/Hash_table)

과제를 진행하기 전에 반드시 스스로 조사하여 Linked List의 특성에 대해 공부하세요. 특성과 실생활에서의 용도에 대해 공부하세요.

- [ ] `hashTable` class를 구현하세요:
  * **시작 하기전에:** 여러분들에게 주어진 helper function이 무슨일을 하는지 파악하기 위해 여러가지 시도를 해보세요.
  * 이미 주어진 has function을 가지고 key value를 array index value로 바꿀것입니다.
  * `limitedArray` helper function도 이미 구현되있습니다.
  * `limitedArray`의 source code는 `src/hashTableHelpers.js`에 있습니다.
  * JavaScript의 array를 사용하지말고 `limitedArray`를 사용하여 저장해야할 값을 넣어주세요.
  * source code에서 보게 되겠지만 `limitedArray`는 `get`, `set`, 그리고 `each` method들이 있습니다. 이 method들을 사용하여 `limitedArray`를 이용해야 합니다.
  * `limitedArray`를 사용할 때에는 bracket notation을 사용하지 마세요.
- [ ] 모든 instance에 아래있는 property들을 사용할수 있게 하세요.
  - [ ] `.insert()` method
  - [ ] `.retrieve()` method
  - [ ] `.remove()` method
  - [ ] 위 메소드들의 시간 복잡도는 무엇인가요?

### 6. [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree)

Binary tree는 각각의 노드가 최대 2개의 children을 가질수 있는 tree입니다.
Binary tree는 children이 2개 이하인 것만 빼면 tree와 똑같습니다.

Binary **search** tree는, 하나의 child가 현재 node의 value보다 작습니다. 그리고 나머지 child는 현재 node보다 큰 value를 가지고 있습니다. (binary tree는 child가 최대 2개라는것 명심하세요)

왼쪽에 있는 child node가 현재 부모 node보다 값이 크던 아니면 오른쪽에 있는 child node가 값이 크던 한번 정해지면 binary search tree 전체에 일관성(consistent)있게 적용되어야 합니다. 이 consistent한 성질 덕분에 Binary search tree data structure에서 value를 찾는 operation이 굉장히 빠릅니다.

* 아래 property를 가지고 있는 `binarySearchTree` class를 구현하세요:
  - [ ] 현재 Binary Search Tree(BST) value보다 작은 value를 가지고 있는 `.left` property.
  - [ ] 현재 BST value보다 큰 value를 가지고 있는 `.right` property.
  - [ ] value를 argument로 받아 알맞는 장소(`.left` 또는 `.right`)에 BST를 넣어주는 `.insert()` method.
  - [ ] value를 argument로 받아 받은 value가 tree에 존재하는지 boolean으로 알려주는 `.contains()` method.
  - [ ] callback function을 argument로 받아 그 callback function을 tree의 모든 value별로 invoke 해주는 `.depthFirstLog()` method.
  - [ ] 위 function들의 time complexity는 무엇인가요?

## Resources

- [VisuAlgo](http://visualgo.net/)는 여러 data structure들과 algorithm들을 visualize하는 멋진 사이트 입니다. 
