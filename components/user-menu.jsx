"use client"
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";

function UserMenu() {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    >
        <UserButton.MenuItems>
            <UserButton.Link label="My Organisations" size={15} labelIcon={<ChartNoAxesGantt/>} href="/onboarding" /> 
            <UserButton.Action label="manageAccount"/>
        </UserButton.MenuItems>
    </UserButton>
  );
}

export default UserMenu;
