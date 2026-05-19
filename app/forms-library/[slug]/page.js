import { DocumentPage } from "@/components/forms-library/document-page";
import { getDocumentBySlug, documents } from "@/components/forms-library/document-data";

export function generateStaticParams() {
  return documents.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);
  return {
    title: doc ? doc.title : "Document Not Found",
    description: doc ? doc.overview?.split("\n\n")[0]?.slice(0, 160) : "",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const doc = getDocumentBySlug(slug);
  return <DocumentPage doc={doc} />;
}
