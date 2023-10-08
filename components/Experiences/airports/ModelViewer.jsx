const ModelViewer = ({changeModel}) => {
    return (
        <div className="bg-gradient-radial-a h-[100vh] text-right pr-40 pb-30 w-[100%] left-0 relative" id="model-viewer">
            <div className="z-[200] bg-red-900 absolute cursor-pointer" onClick={changeModel}>Cambiar Modelo</div>
        </div>

    )
}

export default ModelViewer;