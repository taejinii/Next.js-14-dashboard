# _Next.js 14 App Router Guide / Chapter-11_

[Next.js 14 guide chapter-14](https://nextjs.org/learn/dashboard-app/improving-accessibility)

# **Improving Accessibility**

## **Accessibility(접근성) 이란?**

접근성이란 장애인을 포함한 모든 사람이 사용할 수 있는 웹 애플레케이션을 설계,구현하는 것을 말합니다. 키보드 탐색, semantic HTML, 이미지, 색상, 동영상 등 다양한 영역을 포함하는 주제입니다.

---

## **Form Validation (폼 데이터 유효성 검증)**

### _Client-Side validation_

클라이언트에서 form양식의 유효성을 검사하는 방법에는 몇 가지가 있습니다. 가장 간단한 방법은 `<input>`, `<select>` 등 요소에 `required` 속성을 추가하여 브라우저에 제공하는 양식 유효성 검사에 의존하는 것입니다.

```
<input
  id="amount"
  name="amount"
  type="number"
  placeholder="Enter USD amount"
  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
  style={{ '-moz-appearance': 'textfield' } as React.CSSProperties}
  required
/>
```

양식을 빈값으로 제출하려고 할 때 브라우저에 경고 메시지가 표시됩니다.

### _Server-Side validation_

서버에서 form양식의 유효성을 검사하면 다음과 같은 이점이 있습니다.

- 데이터를 데이터베이스로 보내기 전에 데이터가 예상되는 형식인지 확인합니다.
- 클라이언트 측 유효성 검사를 우회하는 악의적인 사용자의 위험을 줄입니다.
- 유효한 데이터로 간주되는 데이터에 대한 신뢰할 수 있는 단일 소스를 확보합니다.
