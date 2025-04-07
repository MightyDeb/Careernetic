import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Logo from '../../public/Careernetic.png'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Bot, ChevronDown, FileText, GraduationCap, LayoutDashboard, NotebookPen, PenBox, Settings, SlidersHorizontal, StarsIcon, Store, Target } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async() => {
  await checkUser()
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href='/'>
          <Image src={Logo} className='h-10 w-10'/>
        </Link>
        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link href={'/dashboard'}>
              <Button variant="outline">
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'>Industry Insights</span>
              </Button>
            </Link>
            <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <Settings className='h-4 w-4'/>
                <span className='hidden md:block'>Utilities</span>
                <ChevronDown className='h-4 w-4'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/onboarding"} className='flex items-center gap-2'>
                <Target className='h-4 w-4'/>
                <span>Change Career</span>
                </Link>
              </DropdownMenuItem>
              
              <DropdownMenuItem>
                <Link href={"/news"} className='flex items-center gap-2'>
                <Store className='h-4 w-4'/>
                <span>Market Vacancies</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/careers"} className='flex items-center gap-2'>
                <SlidersHorizontal className='h-4 w-4'/>
                <span>Other Careers</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/assistant"} className='flex items-center gap-2'>
                <Bot className='h-4 w-4'/>
                <span>Career Assistant</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/courses"} className='flex items-center gap-2'>
                <NotebookPen className='h-4 w-4'/>
                <span>View Courses</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>
                <StarsIcon className='h-4 w-4'/>
                <span className='hidden md:block'>Growth Tools</span>
                <ChevronDown className='h-4 w-4'/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/resume"} className='flex items-center gap-2'>
                <FileText className='h-4 w-4'/>
                <span>Build Resume</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
               <Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                <PenBox className='h-4 w-4'/>
                <span>Cover Letter</span>
               </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/interview"} className='flex items-center gap-2'>
                <GraduationCap className='h-4 w-4'/>
                <span>Interview Prep</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
            appearance={{
              elements:{
                avatarBox: "w-10 h-10",
                userButtonPopoverCard:"shadow-xl",
                userPreviewMainIdentifier:"font-semibold",
              }
            }}/>
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header