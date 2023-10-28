# _Next.js 14 App Router Guide / Chapter-11_

[Next.js 14 guide chapter-13](https://nextjs.org/learn/dashboard-app/error-handling)

# **Handling Errors**

## **error.tsx**

error.tsx 서버컴포넌트 와 클라이언트 컴포넌트에서 발생하는 예기치 않은 오류를 포착하고 fallback UI를 표시하는데 쓰인다.

error.tsx 는 클라이언트 컴포넌트여야 한다. 또한 같은 경로 세그먼트의 layout.tsx 에서 발생한 오류는 처리하지 못한다.
특정 layout에 대한 오류 처리를 하려면 상위 세그먼트에 error.tsx 파일을 배치해야한다.

루트 레이아웃 또는 template 내에서 오류를 처리하려면 app/global-error.tsx 에서 처리해야한다.

error.tsx 에서는 reset() 함수를 사용할 수 있는데 오류가 발생한 경로 세그먼트를 리 렌더링 하려고 시도하는 함수이다.

## **notFound**

notFound 함수와 not-found.tsx 파일 을 통해 유효하지않은 페이지 접근시 페이지를 구현할 수 있다.
notFound 함수를 요청하면 NEXT_NOT_FOUND 에러가 발생하고 에러가 발행한 경로의 세그먼트의 렌더링이 종료된다. 더 나아가 not-found.tsx를 만들어 둔다면 해당 파일이 렌더링 되게 된다
