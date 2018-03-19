import React from "react";
import { Link } from "react-router-dom";
import Color from "../utils/Color";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  background-color: ${Color.sidebar.BACKGROUND_COLOR};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
`;

const SidebarDiv = styled.div`
  width: 100%;
`;
const SidebarUl = styled.ul`
  outline: none;
  padding: 0px;
  margin-left: 24px;
`;
const SidebarLi = styled.li`
  height: 26px;
  font-size: 1rem;
  line-height: 1.5rem;
  height: 1.5rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  list-style: none;
  cursor: poiner;
  align-items: center;
  margin: 4px auto;
  &:hover {
    color: ${Color.sidebar.HOVER_FONT_COLOR};
    font-weight: bold;
  }
`;

const SidebarButton = styled.button`
  font-size: 14px;
  padding: 5px 18px;
  background: #f9f9f9;
  color: #2c2d30 !important;
  font-weight: 700;
  text-shadow: none;
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  white-space: nowrap;
  margin: 0;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
`;

const SidebarLink = {
  color: Color.sidebar.FONT_COLOR,
  textDecoration: "none"
};

const fileSelectedHandler = () => {
  console.log("selected file");
};

const Sidebar = () => (
  <SidebarWrapper>
    <SidebarButton onClick={fileSelectedHandler}>Upload files</SidebarButton>

    <SidebarDiv>
      <SidebarUl>
        <Link to="/" style={SidebarLink}>
          <SidebarLi>New</SidebarLi>
        </Link>
        <Link to="/edit" style={SidebarLink}>
          <SidebarLi>Edit</SidebarLi>
        </Link>
        <Link to="/use" style={SidebarLink}>
          <SidebarLi>Use</SidebarLi>
        </Link>
      </SidebarUl>
    </SidebarDiv>
  </SidebarWrapper>
);

export default Sidebar;