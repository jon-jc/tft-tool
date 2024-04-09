import React from "react";
import Link from "next/link";
import { Package } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center h-14 px-4 border-b lg:px-6">
      <Link className="flex items-center gap-2 font-semibold" href="#">
        <Package className="h-6 w-6" />
        <span className="">Teamfight Tactics</span>
      </Link>
      <nav className="hidden ml-auto space-x-4 lg:flex">
        <Link className="font-medium" href="#">
          Home
        </Link>
        <Link className="font-medium" href="#">
          Comps
        </Link>
        <Link className="font-medium" href="#">
          Items
        </Link>
        <Link className="font-medium" href="#">
          Champions
        </Link>
      </nav>
      <Button className="ml-auto lg:hidden" size="sm" variant="outline">
        Menu
      </Button>
    </header>
  );
};

export default Header;
