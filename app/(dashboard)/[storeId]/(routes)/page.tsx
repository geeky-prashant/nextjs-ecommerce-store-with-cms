import { prismadb } from "@/lib/prismadb"

interface DashboardPageProps {
  params: {
    storeId: string
  }
}

const DashboardPage = async ({ params }: DashboardPageProps) => {

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <div>
      <>
        Active Store: <span className="text-slate-600 font-bold">{store?.name}</span>
      </>
    </div>
  )
}

export default DashboardPage