import "./Disciplina.css"

type DisciplinaProps = {
    codigo: string;
    nome: string;
}

export default function Disciplina({codigo, nome}: DisciplinaProps){
    return (
        <div className="disciplina">
            <h1>{codigo}</h1>
            <h2>{nome}</h2>
        </div>
    )
}