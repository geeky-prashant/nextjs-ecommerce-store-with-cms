import { prismadb } from "@/lib/prismadb"

const DashboardPage = async ({ params }: { params: { storeId: string } }) => {

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId
    }
  })

  return (
    <div>
      Active Store: <span className="text-slate-600 font-bold">{store?.name}</span>
    </div>
  )
}

export default DashboardPage