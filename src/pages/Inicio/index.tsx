import cardapio from 'data/cardapio.json'
import styles from './Inicio.module.scss'
import stylesTema from 'styles/Tema.module.scss'
import nossaCasa from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'
import { Prato } from 'types/Pratos'

function Inicio() {
    let pratosRecomandados = [...cardapio]
    pratosRecomandados = pratosRecomandados.sort(() => 0.5 - Math.random()).splice(0, 3)

    const navigate = useNavigate()

    function redirecionarParaDetalhe(prato: Prato){
        navigate(`/prato/${prato.id}`, { state: { prato }, replace: true})
    }

    return ( 
        <section>
            <h3 className={stylesTema.titulo}> Recomandações da Cozinha </h3>
            <div className={styles.recomendados}>
                {pratosRecomandados.map(item => (
                    <div className={styles.recomendado} key={item.id}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhe(item)}
                            
                        >
                            Ver mias
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                    <img src={nossaCasa} alt="Casa do Aluroni" />
                    <div className={styles.nossaCasa__endereco}>
                        Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
                    </div>
            </div>
        </section>
    )
}

export default Inicio;