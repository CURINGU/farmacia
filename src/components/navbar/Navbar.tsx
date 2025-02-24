import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-[#fff5ea] text-black'>
            
                <div className="container flex justify-between text-lg ">
                    <h2 className='font-bold'>
                        <Link to='/home' className="text-2xl font-bold">Farmácia PG</Link>
                    </h2>

                    <div className='flex gap-4'>
                        Categorias
                        Cadastrar Categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar