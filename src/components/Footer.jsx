export default function Footer(props) {

    const { handleToggleModal } = props

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>sdasdadsa</h2>
            </div>
            <button onClick={() => {
                handleToggleModal()
            }}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}