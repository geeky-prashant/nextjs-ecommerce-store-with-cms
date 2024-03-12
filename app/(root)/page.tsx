"use client";

import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen])

  return (
    <div className="p-4 flex items-center justify-between">
      Root Page
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: {
              width: "2.3rem",
              height: "2.3rem"
            }
          }
        }}
      />
    </div>
  );
}

export default SetupPage;