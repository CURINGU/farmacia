
function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#fff5ea] text-black">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmacia PG | Copyright: {data}
                        </p>
                    <p className='text-lg'>Projeto feito para o Performance Go</p>
                    
                </div>
            </div>
        </>
    )
}

export default Footer