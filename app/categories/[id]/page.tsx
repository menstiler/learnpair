import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Category',
};

export default function Page({ params}: { params: { id: string }}) {
    const id = params.id;
    return <div>{id}</div>
}