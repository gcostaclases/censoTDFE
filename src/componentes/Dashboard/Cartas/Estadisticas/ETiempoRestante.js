const ETiempoRestante = () => {
  const fechaActual = new Date();
  const fechaFin = new Date("2023-08-31");

  const diferenciaEnMilisegundos = fechaFin - fechaActual;
  const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

  console.log(`tiempo restante: ${diferenciaEnDias}`);

  return (
    <div className="col-2 card">
      <div className="row card-header text-center">
        <h5 className="card-title col">Tiempo Restante</h5>
      </div>
      <div className="row card-body text-center">
        <p>{diferenciaEnDias.toFixed(0)} días</p>
      </div>
    </div>
  );
};

export default ETiempoRestante;
