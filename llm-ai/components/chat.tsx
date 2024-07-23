/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JDWCDsWsvnx
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"

export function Chat() {
  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-background rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-muted border-b">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="font-medium">John Doe</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted/50">
            <SearchIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted/50">
            <MoveHorizontalIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[75%]">
              <p>Hey there! How's it going?</p>
              <div className="text-xs text-muted-foreground mt-1">3:45 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
              <p>I'm doing great, thanks for asking!</p>
              <div className="text-xs text-primary-foreground/80 mt-1">3:46 PM</div>
            </div>
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[75%]">
              <p>That's great to hear! I have some exciting news to share with you.</p>
              <div className="text-xs text-muted-foreground mt-1">3:47 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[75%] text-primary-foreground">
              <p>Oh, I can't wait to hear about it!</p>
              <div className="text-xs text-primary-foreground/80 mt-1">3:48 PM</div>
            </div>
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>YO</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </ScrollArea>
      <div className="flex items-center px-4 py-3 border-t bg-muted">
        <Textarea
          placeholder="Type your message..."
          className="flex-1 rounded-lg bg-background border border-input px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
          rows={1}
        />
        <Button className="ml-4">
          <SendIcon className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
