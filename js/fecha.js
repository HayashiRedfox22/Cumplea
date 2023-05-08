function tiempoRestante() {
    const fechaFinal = new Date('May 29, 2023 23:59:59').getTime();
    const ahora = new Date().getTime();
    const tiempoRestante = fechaFinal - ahora;
    return tiempoRestante;
}
function convertirTiempo(tiempo) {
    const dias = Math.floor(tiempo / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempo % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempo % (1000 * 60)) / 1000);
    return { dias, horas, minutos, segundos };
}
function actualizarContador() {
    const tiempo = tiempoRestante();
    const { dias, horas, minutos, segundos } = convertirTiempo(tiempo);
    document.getElementById('contador').innerHTML = `Vaya... aun faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} `;
    document.getElementById('mensaje').innerHTML = `jsksjkj Annie y Matthi estan ansiosos para tu cumple`;
}
setInterval(actualizarContador, 1000);

  