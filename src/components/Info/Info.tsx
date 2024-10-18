

export const Info = () => {
    return (
        <div className="row align-items-md-stretch">
            <div className="col-md-12">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Datatable</h2>
                <p>
                Este proyecto ha sido desarrollado con código propio, sin necesidad de instalar bibliotecas externas. La idea es construir una biblioteca personalizada que permita comprender su funcionamiento y reutilizar sus componentes de manera sencilla, sin complicaciones.
                </p>
                <button className="btn btn-outline-light" type="button"  onClick={() => window.location.href = 'https://github.com/felipe-murcia'}>
                  Ver mas proyectos
                </button>
              </div>
            </div>
        </div>
    );
}