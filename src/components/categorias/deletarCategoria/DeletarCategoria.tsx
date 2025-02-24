import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscarCategoria, deletarCategoria } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscarCategoria(`/categorias/${id}`, setCategoria)

        } catch (error: any) {
            if (error.toString().includes('403')) {
                
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletar() {
        setIsLoading(true)

        try {
            await deletarCategoria(`/categorias/${id}`)
            alert('Postagem apagada com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {

            }else {
                alert('Erro ao deletar a postagem.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-black text-white font-bold text-2xl'>
                    Categoria
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{categoria.nome}</p>
                    <p>{categoria.descricao}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-black font-bold bg-[#fff5ea] hover:bg-[#ffead3] w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-white font-bold bg-black hover:bg-gray-900 flex items-center justify-center'
                        onClick={deletar}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria