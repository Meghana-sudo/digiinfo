import React from "react";
import styled from "styled-components";
import { SearchSharp } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppsIcon from "@mui/icons-material/Apps";
import { MenuItem } from "@mui/material";
import { Dropdown, Nav, Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

// import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import "./Navbar.css";
import { color } from "@mui/system";

const Container = styled.div`
  height: 100px;
  width: 100%;
  background: rgb(0, 123, 255); ;
`;

const Wrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.h5`
  font-weight: bold;
  font-size: "5px";
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo style={{ fontSize: "13px" }}>DigiCollect</Logo>
        </Left>
        <Center>
          <Logo style={{ fontFamily: "serif", fontSize: "27px" }}>
            DigiHRMS
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <SearchSharp />
          </MenuItem>
          <MenuItem>
            <NotificationsNoneIcon />
          </MenuItem>
          <MenuItem>
            <AppsIcon />
          </MenuItem>
          <MenuItem>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  <span color="white" fontSize="8px">
                    User
                  </span>
                </Dropdown.Toggle>
              </Dropdown>
            </Nav>
          </MenuItem>
        </Right>
      </Wrapper>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary  px-3">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dashboard
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EmployeeInfo
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="">
                  Calendar
                </a>
                <a class="dropdown-item" href="">
                  Event Type
                </a>
                <a class="dropdown-item" href="">
                  Profile
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CompanyInfo
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                JobPortal
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Payroll
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Benefits
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Policies
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Analytics
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
