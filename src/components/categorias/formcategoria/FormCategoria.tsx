import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscarCategoria, atualizarCategoria, cadastrarCategoria } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>()

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscarCategoria(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id)
        }
    }, [id])

    function retornar() {
        navigate('/categorias');
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizarCategoria(`/categorias`, categoria, setCategoria)

                alert('Categoria atualizada com sucesso')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('Erro 403 ao Atualizar')
                } else {
                    alert('Erro ao atualizar a Categoria')
                }
            }

        } else {
            try {
                await cadastrarCategoria(`/categorias`, categoria, setCategoria)
                alert('Categoria cadastrada com sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('Erro 403 ao Criar');
                } else {
                    alert('Erro ao cadastrar a Categoria');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Categoria' : 'Cadastrar Categoria'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 text-white font-bold bg-black hover:bg-gray-900 w-1/2 mx-auto py-2 flex justify-center'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;