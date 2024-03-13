import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function Page() {
  const categories = [
    { 
      id: 1,
      name: 'Draw', 
    },
    { 
      id: 2,
      name: 'Code', 
    },
    { 
      id: 3,
      name: 'Paint', 
    }
  ]

  return (
    <main>
      <div className="flex h-screen flex-col">
        <div className="flex-grow p-6">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            What interest you?
        </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ name, id})  => (
              <div key={id} className="rounded-xl bg-gray-50 p-2 shadow-sm">
                <div className="flex p-4">
                  <Link href={`/categories/${name}`}><h3 className="ml-2 text-sm font-medium">{name}</h3></Link>
                </div>
              </div>          
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
