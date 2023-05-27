import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from "./componentes/Header/Header"
import Formulario from './componentes/Formulario/Formulario'; //se usa index.js para evitar esto
import MiOrg from './componentes/MiOrg';// index.js es tipo (__init__.py)
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  //---ESTADO PARA VER LOS FORMULARIOS---
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  // función para cambiar el estado
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //---ESTADO CON COLABORADORES---
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Desarrollo web",
    foto: "https://github.com/Asrii19.png",
    nombre: "Arnold Camacho",
    puesto: "Estudiante",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Estudiantes",
    foto: "https://github.com/Asrii19.png",
    nombre: "Arnold Camacho",
    puesto: "Estudiante",
    fav: false
  }])
  // función para agregar los colaboradores (desde el elemento hijo - formulario)
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator, expandir elementos del iterable (coaboradores)
    actualizarColaboradores([...colaboradores, colaborador])
  }
  // función para eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  // función para dar el efecto de like a los colaboradores
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  //---ESTADO CON EQUIPOS--- 
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Estudiantes",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Desarrollo web",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])
  // función para crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }
  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  return (
    <div>
      <Header />
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {/*Ternario --> condicion ? seMuestra : noSeMuestra
         condicion && seMuestra                        */}
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)} //estoy devolviendo un array con los títulos de los equipos
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }


      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
