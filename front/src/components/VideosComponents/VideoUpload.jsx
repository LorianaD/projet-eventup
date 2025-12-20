function VideoUpload() {
    return(
        <form>
            <h2>Ajouter une vidéo</h2>
            <div>
                <label htmlFor="title">Titre</label>
                <input type="text" name="title" id="title" />                
            </div>
            <div>
                <label htmlFor="video">Vidéo</label>
                <input type="file" name="video" id="video" />
            </div>
            <div>
                <label htmlFor="theme">Théme de la vidéo</label>
                <select name="theme" id="theme">
                    <option value="">Choigisez le théme</option>
                </select>
            </div>
            <div>
                <label htmlFor="description">Déscription</label>
                <textarea name="description" id="description"></textarea>
            </div>
        </form>
    )
}

export default VideoUpload