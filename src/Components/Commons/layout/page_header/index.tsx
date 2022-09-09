import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function PageHeader() {
  const router = useRouter();

  const pages = [
    {
      path: "/auth/password-reset",
      title: "비밀번호 재설정",
    },
    {
      path: "/auth/signup",
      title: "회원가입",
    },
    {
      path: "/today",
      title: "오늘의 댕댕이",
    },
    {
      path: "/chat",
      title: "메세지",
    },
    {
      path: "/profile",
      title: "마이 댕댕이",
    },
    {
      path: "/profile/edit",
      title: "마이 댕댕이 수정하기",
    },
    {
      path: "/profile/init",
      title: "댕댕이 프로필",
    },
    {
      path: "/settings",
      title: "설정",
    },
  ];

  const pageTitleRef = useRef<HTMLSpanElement | null>(null);

  const [title, setTitle] = useState("");

  useEffect(() => {
    for (let i = 0; i < pages.length; i++) {
      if (router.pathname === pages[i].path) {
        setTitle(pages[i].title);
        if (!pageTitleRef.current) return;
        pageTitleRef.current.innerText = title;
      }
    }
  }, [title]);

  return (
    <Wrapper>
      <ArrowBackIcon />
      <span
        ref={pageTitleRef}
        style={{ fontSize: "1.5rem", fontWeight: "700", marginLeft: "1rem" }}
      ></span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100vw;
  height: 3.1rem;
  padding: 2.5rem;
`;