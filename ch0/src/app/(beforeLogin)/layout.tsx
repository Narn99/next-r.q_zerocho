import { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };
export default function Layout({ children, modal }: Props) {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
}

// 주소가 localhost:3001일 때는 children->page.tsx, modal->@modal/default.tsx
// 주소가 localhost:3001/i/flow/login 때는 chldren->i/flow/login/page.tsx, modal->@modal/i/flow/login/page.tsx

// 패러렐 라우트 - 같은 그룹 내의 @를 붙인 라우트를 한 화면에서 같이 띄울 수 있음 (주소는 바뀌는데 페이지 이동 안 하고 모달 띄우기 가능)
