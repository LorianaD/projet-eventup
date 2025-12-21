function ImageUpload() {
    return(
        <form className="fieldset bg-base-200 border-base-300 rounded-box w-xl border form-components">
            <legend className="text-4xl font-bold text-primary">Ajouter une image</legend>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="title" className="label w-full my-[10px]">Titre</label>
                <input type="text" name="title" id="title" className="input input-primary w-full" />                
            </div>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="video" className="label w-full my-[10px]">Vidéo</label>
                <input type="file" name="video" id="video" className="file-input file-input-primary w-full" />
            </div>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="theme" className="label w-full my-[10px]">Théme de la vidéo</label>
                <select name="theme" id="theme" className="select select-primary w-full">
                    <option value="">Choigisez le théme</option>
                </select>
            </div>
            <div className="my-[10px] w-[70%]">
                <label htmlFor="description" className="label w-full my-[10px]">Déscription</label>
                <textarea name="description" id="description" className="input input-primary w-full"></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
                Ajouter
            </button>
            {/* <p>{message}</p> */}
        </form>
    )
}

export default ImageUpload