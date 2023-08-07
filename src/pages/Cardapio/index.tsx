import style from "./Cardapio.module.scss"
import { useState } from "react";
import Buscador from "./Buscador";
import Filtros from "./Filtros";
import Ordenador, {OpcoesOrdenador} from "./Ordernador";
import Itens from "./Itens";
import stylesTema from 'styles/Tema.module.scss'

function Cardapio(){
    const [busca, setBusca] = useState('')
    const [filtro, setFilto] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('')

    return(
       <section className={style.cardapio}>
            <h3 className={stylesTema.titulo}>Cardapio</h3>
            <Buscador busca={busca} setBusca={setBusca} />
            <div className={style.cardapio__filtros}>
                <Filtros filtro={filtro} setFiltro={setFilto} />
                <Ordenador ordenador={ordenador}  setOrdenador={setOrdenador} />
            </div>
            <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
        </section>
    )
}

export default Cardapio;