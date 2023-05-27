import "./MiOrg.css"

const MiOrg = (props) => {
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg