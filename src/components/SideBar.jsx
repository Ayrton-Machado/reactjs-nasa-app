export default function SideBar(props) {
    const { handleToggleModal } = props

    return (
        <div className="sidebar">
            <div className="bgOverlay" onClick={handleToggleModal}></div>
            <div className="sidebarContents">
                <h2>sadsda</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">32132113</p>
                    <p>dsadadsadadsda</p>
                </div>
                <button onClick={() => {
                    handleToggleModal()
                }}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}