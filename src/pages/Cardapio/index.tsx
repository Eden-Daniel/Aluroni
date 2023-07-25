import style from "./Cardapio.module.scss"
import {ReactComponent as Logo} from "../../assets/logo.svg"
import { useState } from "react";
import Buscador from "./Buscador";
import Filtros from "./Filtros";
import Ordenador, {OpcoesOrdenador} from "./Ordernador";
import Itens from "./Itens";


function Cardapio(){
    const [busca, setBusca] = useState('')
    const [filtro, setFilto] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState<OpcoesOrdenador>('')

    return(
        <main>
            <nav className={style.menu}>
                <Logo />
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>Cardapio</h3>
                <Buscador busca={busca} setBusca={setBusca} />
                <div className={style.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFilto} />
                    <Ordenador ordenador={ordenador}  setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
            </section>
        </main>
    )
}

export default Cardapio;