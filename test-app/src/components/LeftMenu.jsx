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
      </ul>
    </div>
  );
}
