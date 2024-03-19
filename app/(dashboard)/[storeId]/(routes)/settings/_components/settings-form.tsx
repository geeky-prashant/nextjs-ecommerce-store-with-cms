"use client";

import { Store } from "@prisma/client";
import Heading from "@/components/heading";
import { Button } from "@/components/ui/button";

interface SettingFormProps {
  initialData: Store;
}

export const SettingsForm = ({ initialData }: SettingFormProps) => {
  return (
    <div className="flex items-center justify-between">
      <Heading
        title="Settings"
        description="Manage store preferences"
      />
      <Button
        variant="destructive"
        size="sm"
        onClick={() => {}}
      ></Button>
    </div>
  )
};