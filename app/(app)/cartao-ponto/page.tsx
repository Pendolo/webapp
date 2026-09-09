import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Cartão-ponto",
};

export default function TimesheetPage() {
  return (
    <PagePlaceholder
      title="Cartão-ponto"
      description="Visão resumida e completa da jornada, com origem de cada evento."
      icon={CalendarDays}
    />
  );
}
