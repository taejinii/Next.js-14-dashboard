# _Next.js 14 App Router Guide / Chapter-11_

[Next.js 14 guide chapter-12](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination)

# **Mutating Data**

## _Server Action 이란?_

Server Action을 사용하면 데이터를 변경하기위해 API 엔드포인트를 만들 필요 없이 서버에서 실행되는 비동기 함수를 작성하고 클라이언트 또는 서버 컴포넌트에서 호출 가능하다.

Next.js는 각 경로 브라우저에 일정 시간 동안 저장하는 클라이언트 측 라우터 캐시가 존재한다. 이 캐시는 prefetching과 함께 사용자가 서버에 대한 요청 횟수를 줄이면서 경로를 빠르게 탐색할수 있도록 한다.

**Server Action**을 통해 데이터를 업데이트하고 업데이트된 페이지가 최신화 되길 원하면 위의 라우터 캐시를 지워야한다.
이때 사용되는것 이 **revalidatePath** 이다

**revalidatePath(url)** 를 사용하면 매개변수로 넘긴 url의 라우터 캐시는 삭제된다. 그러므로 해당 경로의 유효성이 다시 검사되고 서버에서 새로운 데이터를 가져올 수 있게 된다.
**revalidatePath**는 특정 경로의 라우터 캐시를 다 지워버리기 때문에 만약 특정 요청에 대한 캐시만 지우고싶다면 revalidateTag를 사용하면 된다.

[revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)

[revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag)
