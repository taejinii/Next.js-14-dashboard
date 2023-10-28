# _Next.js 14 App Router Guide / Chapter-11_

[Next.js 14 guide chapter-11](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination)

## **Adding Search and Pagination**

### **URL params를 이용한 검색구현 장점**

1. 북마크 및 공유 가능한 URL: 검색 매개변수가 URL에 있으므로 유저는 검색 쿼리 및 필터를 포함한 애플리케이션의 상태를 북마크에 추가하여 나중에 참조하거나 공유 가능.

2. 서버 측 렌더링 및 Initial Load: URL 매개변수를 서버에서 직접 사용하여 초기 상태를 렌더링할 수 있으므로 서버렌더링을 쉽게 처리할 수 있다.

3. 분석 및 추적: 검색 쿼리와 필터를 URL에 직접 포함하면 추가적인 클라이언트 측 로직 없이도 사용자 행동을 더 쉽게 추적 가능.

### **Next.js에서 검색기능에 사용되는 3가지 hooks**

- **useSearchParams**: 현재 URL의 매개변수에 접근가능
  _/dashboard/invoices?page=1&query=pending_ -> _{page: '1', query: 'pending'}_

- **usePathname**: 현재 URL의 경로를 읽을수 있음 URL이 _/dashboard/invoices_ 라면 -> _/dashboard/invoices_ 반환

- **useRouter**: 클라이언트 컴포넌트 내에서 프로그래밍 방식으로 경로 탐색가능 (push,replace...)

### **input 태그 defaultValue 와 value 의 차이**

state를 사용해 입력값을 관리하는 경우 value 어트리뷰트를 사용해 제어되는 컴포넌트로 만들 수 있다.

하지만 검색시 쿼리스트링으로 검색값을 관리하는 경우 defaultValue를 사용 한다.
