import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../static/img/logo.png";
import { Button, Stack } from "@mui/material";

function NavBar() {
  return (
    <nav className="h-20 flex justify-between">
      <ul>
        <li>
          <Link to="/">
            <div className="flex">
              <img className="h-20 w-20 ml-5" src={logoImg} alt="Medipedia" />
              <div className="my-auto ml-5">
                <p className="text-5xl font-serif font-bold">Medipedia</p>
                <p className="text-s font-mono font-black">The Healing Ocean</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      <div className="flex my-auto mx-4">
        <Stack direction="row" spacing={2}>
          <Link to='/contact'><Button variant="outlined">Contact Us</Button></Link>
          <Link to='/about'><Button variant="outlined">About Us</Button></Link>
        </Stack>
      </div>
    </nav>
  );
}

export default NavBar;
