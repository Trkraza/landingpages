import Link from "next/link";
import {
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div className="flex w-[150px]">
        <Link className="mr-6 hidden lg:flex" href="#">
          <img src="/logo.png" alt="img" className="h-8" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/logo.png"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Analytics
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Upgrade your reporting with advanced analytics.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Developer Tools
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Extend your application with our developer tools.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/logo.png"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Security & Compliance
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Keep your data secure with our security features.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/logo.png"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Scalability
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Scale your application with our infrastructure.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[550px] grid-cols-2 p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/logo.png"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Blog Posts
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Case Studies
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Read our customer case studies.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Documentation
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Learn how to use our product.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                    >
                      <img
                        className="h-12 w-12 mr-4"
                        height="50"
                        src="/logo.png"
                        style={{
                          aspectRatio: "50/50",
                          objectFit: "cover",
                        }}
                        width="50"
                      />
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Help Center
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        Get help with our product.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto">
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
