
import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

export default async function Header() {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent tracking-tight">
            CareerAI
          </div>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
    <Link href="/dashboard">
  <Button
    variant="outline"
    className="hidden md:inline-flex items-center gap-2 border border-purple-200 text-purple-600 bg-white hover:bg-purple-50 hover:text-purple-700 transition-all"
  >
    <LayoutDashboard className="h-4 w-4" />
    Industry Insights
  </Button>

  <Button
    variant="ghost"
    className="md:hidden w-10 h-10 p-0 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-all"
  >
    <LayoutDashboard className="h-4 w-4" />
  </Button>
</Link>


            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-400 hover:from-purple-600 hover:to-pink-500 text-white shadow-sm">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-white text-black  shadow-lg border border-gray-200"
              >
                <DropdownMenuItem asChild > 
                  <Link href="/resume" className="flex items-center gap-2 cursor-pointer">
                    <FileText className="h-4 w-4 text-purple-500" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <PenBox className="h-4 w-4 text-purple-500" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2 cursor-pointer">
                    <GraduationCap className="h-4 w-4 text-purple-500" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="" className="border-gray-300  bg-[#ca94e1] hover:scale-[110%]">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-md border border-gray-100",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
