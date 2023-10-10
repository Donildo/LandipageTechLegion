

function Questoes() {
   
    return(
        <div className="questoes">
            <ul className="questoes_lista">
                <li className="questoes_item">
                    <QuestoesItem $id="1"
                        $questao="Você já ouviu falar da tech ligion?"
                        $responder="Sim, tech ligion"
                    
                    />
                </li>
                <li className="questoes_item">
                    <QuestoesItem $id="2"
                        $questao="Você já ouviu falar da tech ligion?"
                        $responder="Sim, tech ligion"
                    
                    />
                </li>
                <li className="questoes_item">
                    <QuestoesItem $id="3"
                        $questao="Você já ouviu falar da tech ligion?"
                        $responder="Sim, tech ligion"
                    
                    />
                </li>
                <li className="questoes_item">
                    <QuestoesItem $id="4"
                        $questao="Você já ouviu falar da tech ligion?"
                        $responder="Sim, tech ligion"
                    
                    />
                </li>
                <li className="questoes_item">
                    <QuestoesItem $id="5"
                        $questao="Você já ouviu falar da tech ligion?"
                        $responder="Sim, tech ligion"
                    
                    />
                </li>
                
            </ul>
        </div>
    )
}

function QuestoesItem({$id,$questao, $responder}) {
    const inputId = `questaoIntem-${id}`;
    return(
        <div className="questao questao_mover">
            <input id={inputId} type="checkbox" className="ckeckbox_hide"/>
            <label htmlFor={inputId} className="questao_label">
                <div className="questao_topico">{$questao}</div>
                <div className="questao_foto">

                </div>
            </label>
            <div className="questao_responder"><span>{$responder}</span></div>
            <div className="dividi"></div>
        </div>
    )
}

export default Questoes