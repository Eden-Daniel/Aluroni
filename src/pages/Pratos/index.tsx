import styles from './Pratos.module.scss'
import { useParams, useNavigate } from 'react-router-dom'
import cardapio from 'data/cardapio.json'
import TagsPrato from 'components/TagsPrato'
import NotFound from 'pages/NotFound'
import PaginaPadrao from 'components/PaginaPadrao'

function Pratos(){
    const { id } = useParams()
    const  prato  = cardapio.find(item => item.id === Number(id))
    const navigate = useNavigate()

    if(!prato){
        return <NotFound />
    }

    return(
        <PaginaPadrao>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Valotar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}> {prato.title} </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <div className={styles.conteudo}>
                    <p className={styles.conteudo__descricao}> 
                        {prato.description} 
                    </p>
                </div>
                <TagsPrato {...prato} />
            </section>
        </PaginaPadrao>
    )
}

export default Pratos;