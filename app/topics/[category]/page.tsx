import ClientComponent from "./client-component"

export async function generateStaticParams() {
  return [
    { category: 'mathematics' },
    { category: 'physics' },
    { category: 'materials' },
    { category: 'mechanical' },
    { category: 'electrical' },
    { category: 'software' },
    { category: 'industrial' },
  ];
}

interface Params {
  params: {
    category: string
  }
}

export default function TopicCategoryPage({ params }: Params) {
  return <ClientComponent category={params.category} />
}

