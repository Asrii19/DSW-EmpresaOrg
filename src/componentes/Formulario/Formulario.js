import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    //estados que guardan datos de un nuevo colaborador
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    //estados que guardan datos de un nuevo equipo
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    //se pasan las funciones del elemento padre
    const { registrarColaborador, crearEquipo } = props

    //se envían los datos a la función del elemento padre
    const manejarEnvio = (e) => {
        e.preventDefault() //se evita la recarga de la página
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos} // se pasa como prop los titulos de los equipos
            />
            <Boton> 
                Crear 
            </Boton> {/*se pasa como props.children*/}
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>Registrar equipo</Boton>
        </form>
    </section>
}

export default Formulario