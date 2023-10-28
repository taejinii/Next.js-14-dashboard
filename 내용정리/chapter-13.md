# _Next.js 14 App Router Guide / Chapter-11_

[Next.js 14 guide chapter-13](https://nextjs.org/learn/dashboard-app/error-handling)

# **Handling Errors**

## **error.tsx**

error.tsx 서버컴포넌트 와 클라이언트 컴포넌트에서 발생하는 예기치 않은 런타임 오류를 포착하고 fallback UI를 표시하여 에러를 우아하게 처리할 수 있습니다.

error.tsx 는 중첩된 자식 세그먼트 또는 page.tsx 컴포넌트를 감싸는 React Error Boundary를 자동으로 생성합니다.
error.tsx 파일에서 내보낸 React 컴포넌트가 fallback UI로써 사용됩니다.
![error](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ferror-overview.png&w=3840&q=75&dpl=dpl_H32Q1xf9hCyumsybjgFTTf6zn49i)

## Recovering From Errors

---

에러의 원인은 "일시적"인 것일 수도 있습니다. 이러한 경우 유저가 다시 시도하기만 한다면 문제가 해결될 수 있습니다.
**reset()** 함수를 사용하여 에러 경계의 내용을 다시 렌더링 하려고 시도할 수 있습니다. 만약 성공한다면 fallback 컴포넌트가 다시 본래 랜더링 되어야할 컴포넌트로 대체 됩니다.

error.tsx 는 클라이언트 컴포넌트여야 합니다. 또한 같은 경로 세그먼트의 layout.tsx 에서 발생한 오류는 처리하지 못합니다.
특정 layout에 대한 오류 처리를 하려면 상위 세그먼트에 error.tsx 파일을 배치해야합니다.

## Nested Routes

---

![error](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnested-error-component-hierarchy.png&w=3840&q=75&dpl=dpl_H32Q1xf9hCyumsybjgFTTf6zn49i)

루트 레이아웃 또는 template 내에서 오류를 처리하려면 app/global-error.tsx 에서 처리해야합니다.

## **notFound**

notFound 함수와 not-found.tsx 파일 을 통해 유효하지않은 페이지 접근시 페이지를 구현할 수 있습니다.
notFound 함수를 요청하면 NEXT_NOT_FOUND 에러가 발생하고 에러가 발행한 경로의 세그먼트의 렌더링이 종료됩니다. 더 나아가 not-found.tsx를 만들어 둔다면 해당 파일이 렌더링 되게 더;ㅂㄴ;다
