import MainNav from "./main-nav"
import { UserButton, auth } from "@clerk/nextjs"
import StoreSwitcher from "./store-switcher"
import { redirect } from "next/navigation";
import { prismadb } from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findMany({
    where: {
      userId
    }
  })

  return (
    <div
      className="border-b"
    >
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher
          items={store}
        />
        <MainNav
          className="mx-4"
        />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}

export default Navbar