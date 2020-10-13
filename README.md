# Data structures

VanillaJS로 링크드리스트, 해시테이블, 이진탐색트리, 그래프를 구현하였습니다.

미리 작성된 `spec`의 테스트를 통과하는 코드를 `src`에 작성하는 형태로 과제가 이루어졌습니다.

해시테이블
- 해시테이블의 키값이 중복(collision)될 때, Linear Probing(Open addressing) 방식으로 바로 다음 인덱스에 데이터를 저장하도록 구현
- 해시테이블에 87.5% 이상의 데이터가 삽입되거나 12.5% 이하의 데이터가 남아있다면 해시테이블의 storage limit을 조절하도록 구현
