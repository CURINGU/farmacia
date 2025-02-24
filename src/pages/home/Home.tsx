const products = [
    {
      id: 1,
      name: 'Fralda Huggies Supreme Care XG 58 unidades',
      href: '#',
      imageSrc: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F5961146.webp&w=256&q=75',
      imageAlt: "Fralda Huggies Supreme Care Disney Baby XG 58 unidades.",
      price: 'R$96,99',
    },
    {
        id: 2,
        name: 'Protetor Solar Facial FPS 50 Needs Firmeza & Antissinais com Cor Bastão 12g',
        href: '#',
        imageSrc: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F5018971.webp&w=256&q=75',
        imageAlt: "Protetor Solar Facial.",
        price: 'R$67,92',
      },
      {
        id: 3,
        name: 'Carga para Aparelho de Barbear Gillette Mach3 Sensitive 8 unidades',
        href: '#',
        imageSrc: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3446774.webp&w=256&q=75',
        imageAlt: "Carga para Aparelho de Barbear Gillette Mach3 Sensitive.",
        price: 'R$91,90',
      },
      {
        id: 4,
        name: 'Tinta de Cabelo Permanente Koleston Brilho Infinito - 718 Louro Médio Perolado',
        href: '#',
        imageSrc: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F3832750.webp&w=256&q=75',
        imageAlt: "Tinta de Cabelo Permanente Koleston.",
        price: 'R$26,49',
      },
    // More products...
  ]

function Home() {
    return (
        <>
            <div className="bg-white flex justify-center my-10">
                <div className="flex justify-center gap-10">
                    <div className='rounded text-white font-bold bg-black border-black border-solid border-2 py-2 px-4'>
                        Categoria 1
                    </div>
                    <div className='rounded text-white font-bold bg-black border-black border-solid border-2 py-2 px-4'>
                        Categoria 2
                    </div>
                    <div className='rounded text-white font-bold bg-black border-black border-solid border-2 py-2 px-4'>
                        Categoria 3
                    </div>
                    <div className='rounded text-white font-bold bg-black border-black border-solid border-2 py-2 px-4'>
                        Categoria 4
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Mais vendidos</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square rounded-md bg-gray-200 object-cover group-hover:opacity-75 flex justify-center"
                            />
                            <div className="mt-4 flex justify-between">
                                <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home