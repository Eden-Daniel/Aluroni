import React from "react";
import  style from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({ busca, setBusca}: Props){
    return (
        <div className={style.buscador}>
            <input 
                value={busca}
                onChange={evento => setBusca(evento.target.value)}
                placeholder="Buscar"
            />
                <CgSearch size={20} color="#4d4c5e" />
        </div>
    )
}

export default Buscador;