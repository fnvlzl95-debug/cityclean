import { MetroLogo } from "@/components/metro/Primitives";
import { withBasePath } from "@/lib/paths";

export function MetroFooter() {
  return (
    <footer className="metro-footer">
      <div className="metro-footer__inner">
        <MetroLogo invert />
        <nav aria-label="푸터 메뉴">
          <a href={withBasePath("/about")}>회사소개</a>
          <a href="#booking">이용약관</a>
          <a href="#contact">개인정보처리방침</a>
          <a href="#contact">고객센터</a>
        </nav>
        <span>© 2024 CITY CLEAN. All rights reserved.</span>
        <div className="metro-social" aria-label="SNS">
          <strong>SNS</strong>
          <a aria-label="인스타그램" href="#top">IG</a>
          <a aria-label="네이버" href="#top">N</a>
          <a aria-label="블로그" href="#top">B</a>
          <a aria-label="유튜브" href="#top">YT</a>
        </div>
      </div>
    </footer>
  );
}
