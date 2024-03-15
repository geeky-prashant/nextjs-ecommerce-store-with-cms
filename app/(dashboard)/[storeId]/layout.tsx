import { auth } from "@clerk/nextjs"
import { prismadb } from "@/lib/prismadb";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";

interface DahboardLayoutProps {
  children: React.ReactNode,
  params: {
    storeId: string
  }
}

export default async function DashboardLayout({ children, params }: DahboardLayoutProps) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in")
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    }
  })

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}