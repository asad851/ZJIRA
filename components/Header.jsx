import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";
import { checkUser } from "@/lib/checkUser";
import UserLoading from "./user-loading";

const Header = async () => {
  await checkUser();
  return (
    <header className="container mx-auto">
      <nav className="py-6 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            width={200}
            height={50}
            src="/logo2.png"
            alt="logo"
            className="h-10 w-auto object-center object-contain"
          />
        </Link>
        <div className="flex gap-5 items-center">
          <Link href="/project/create">
            <Button
              className="flex items-center gap-2 "
              variant={"destructive"}
            >
              <PenBox size={18} />
              <span>Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoading />
    </header>
  );
};

export default Header;
