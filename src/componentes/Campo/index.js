import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...`

    //Destructuracion 
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio} //cambia el estado en las variables por cada cambio que se detecte
            type={type}
        />
    </div>
}

export default Campo