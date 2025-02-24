import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{categoria.nome}</h4>
                    <p>{categoria.descricao}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full text-black font-bold bg-[#fff5ea] hover:bg-[#ffead3] 
                    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-white font-bold bg-black hover:bg-gray-900 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria