import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function LeftMenu() {
  const activeClassName = "active";

  useEffect(function () {
    const firstDepth = document.querySelectorAll(".leftmenu .first-depth");
    firstDepth.forEach(function (item) {
      item.addEventListener("click", function () {
        firstDepth.forEach(function (item2) {
          item2.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
  }, []);

  return (
    <div className="leftmenu">
      <NavLink to="/" className="top-title p-3">
        Check Up
      </NavLink>
      <ul>
        <li>
          <p className="first-depth">회원관리</p>
          <ul>
            <li>
              <NavLink to="/1" activeClassName={activeClassName}>
                기업회원 관리
              </NavLink>
            </li>
            <li>
              <NavLink to="/1_2" activeClassName={activeClassName}>
                일반회원 관리
              </NavLink>
            </li>
            <li>
              <NavLink to="/1_3" activeClassName={activeClassName}>
                제휴사 관리
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <p className="first-depth">진단요청현황</p>
        </li>
        <li>
          <p className="first-depth">진단관리</p>
          <ul>
            <li>
              <NavLink to="/3" activeClassName={activeClassName}>
                내부진단
              </NavLink>
            </li>
            <li>
              <NavLink to="/3_2" activeClassName={activeClassName}>
                외부진단
              </NavLink>
            </li>
            <li>
              <NavLink to="/3_3" activeClassName={activeClassName}>
                진단결과설정
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <p className="first-depth">콘텐츠관리</p>
          <ul>
            <li>
              <NavLink to="/4" activeClassName={activeClassName}>
                콘텐츠 조회
              </NavLink>
            </li>
            <li>
              <NavLink to="/4_2" activeClassName={activeClassName}>
                콘텐츠 매핑
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <p className="first-depth">전문가관리</p>
          <ul>
            <li>
              <NavLink to="/5" activeClassName={activeClassName}>
                전문가 조회
              </NavLink>
            </li>
            <li>
              <NavLink to="/5_2" activeClassName={activeClassName}>
                전문가 매핑
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <p className="first-depth">운영관리</p>
          <ul>
            <li>
              <NavLink to="/6" activeClassName={activeClassName}>
                운영자 관리
              </NavLink>
            </li>
            <li>
              <NavLink to="/6_2" activeClassName={activeClassName}>
                코드 관리
              </NavLink>
            </li>
            <li>
              <NavLink to="/6_3" activeClassName={activeClassName}>
                권한 관리
              </NavLink>
            </li>
            <li>
              <NavLink to="/6_4" activeClassName={activeClassName}>
                게이트 관리
              </NavLink>
            </li>
            <li>
              <NavLink to="/6_5" activeClassName={activeClassName}>
                배너 관리
              </NavLink>
            </li>
            <li>
              <NavLink to="/6_6" activeClassName={activeClassName}>
                공지사항
              </NavLink>
            </li>
            <li>
              <NavLink to="/6_7" activeClassName={activeClassName}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/6_8" activeClassName={activeClassName}>
                상담관리
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <p className="first-depth">데이터관리</p>
          <ul>
            <li>
              <NavLink to="/7" activeClassName={activeClassName}>
                보고
              </NavLink>
            </li>
            <li>
              <NavLink to="/7_2" activeClassName={activeClassName}>
                사용자
              </NavLink>
            </li>
            <li>
              <NavLink to="/7_3" activeClassName={activeClassName}>
                진단서비스
              </NavLink>
            </li>
            <li>
              <NavLink to="/7_4" activeClassName={activeClassName}>
                콘텐츠
              </NavLink>
            </li>
            <li>
              <NavLink to="/7_5" activeClassName={activeClassName}>
                전문가
              </NavLink>
            </li>
            <li>
              <NavLink to="/7_6" activeClassName={activeClassName}>
                결제내역
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
