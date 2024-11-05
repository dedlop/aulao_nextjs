import { notFound } from 'next/navigation'

interface Infoparams {
    params: {
        productId: string
    }
}

export default function Info({ params }: Infoparams) {
    if(parseInt(params.productId) >100) {
        notFound()
    }

    return (
        <div>
            <p>Informações do produto {params.productId}</p>
        </div>
    )
}