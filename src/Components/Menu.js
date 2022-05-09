import React from "react";

function Menu({ title, menuObject }) {
  //prop.title
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li>
              <a href="#">
                <span>{menu.icon}</span>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };
