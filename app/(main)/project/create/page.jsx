"use client";
import React, { useState ,useEffect} from "react";
import OrgSwitcher from "@/components/org-switcher";
import { useOrganization, useUser } from "@clerk/nextjs";

export default function createProjectPage() {
  const { isLoaded: isOrgLoaded, membership } = useOrganization();
  const { isLoaded, isUserLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (isOrgLoaded && isUserLoaded && membership) {
      setIsAdmin(membership.role === "org:admin");
    }
  }, [isOrgLoaded, isUserLoaded, membership]);

  if (!isAdmin) {
    return (
      <div className="flex flex-col gap-2 items-center">
        <span> Oops! Only Admins can create projects</span>
        <OrgSwitcher />
      </div>
    );
  }
}
