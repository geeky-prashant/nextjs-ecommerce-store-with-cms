"use client";

import { Store } from "@prisma/client";

interface SettingFormProps {
  initialData: Store;
}

export const SettingsForm = ({ initialData }: SettingFormProps) => {
  return (
    <div>SettingsForm</div>
  )
};