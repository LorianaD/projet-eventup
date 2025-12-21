function HomeImageList() {
    
    return(
        <section>
            <h2>Derniere images</h2>
            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                    alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                    alt="Burger" />
                </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </section>
    )
}

export default HomeImageList