import { FormsLibraryHeader } from "@/components/forms-library/header";
import { FormsLibraryDocuments } from "@/components/forms-library/documents";
import { LoginGate } from "@/components/forms-library/LoginGate";

export const metadata = {
  title: "Forms Library",
  description:
    "SWMS templates, safety certificates, risk assessments, and compliance documents for O'Neill Scaffolding Group staff.",
};

export default function Page() {
  return (
    <LoginGate>
      <main>
        <FormsLibraryHeader />
        <FormsLibraryDocuments />
      </main>
    </LoginGate>
  );
}
