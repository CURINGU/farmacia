import { useState, useEffect } from "react";
import Categoria from "../../../models/Categoria";
import { buscarCategoria } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardCategoria from "../cardcategoria/CardCategorias";

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarPostagens() {
        try {
            await buscarCategoria('/categorias', setCategorias)

        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Erro');
            }
        }
    }

    useEffect(() => {
        buscarPostagens()
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategorias;