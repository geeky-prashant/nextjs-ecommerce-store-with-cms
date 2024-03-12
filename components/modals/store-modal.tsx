"use client";

import { z } from "zod";

import { Modal } from "../modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const formSchema = z.object({
  name: z.string().min(1),
})

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={() => { storeModal.onClose }}
    >
      Create Store Form
    </Modal>
  )
}