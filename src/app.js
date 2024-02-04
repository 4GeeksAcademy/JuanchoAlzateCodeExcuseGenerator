var imagen = document.getElementById("imagen");
var Sound = document.getElementById("SoundButtom");
window.onload = () => {
  document.querySelector("#btn_excusas").addEventListener("click", () => {
    Sound.play();
    imagen.classList.add("active");
    setTimeout(function() {
      imagen.classList.remove("active");
    }, 3000);

    document.querySelector("#excuse").innerHTML = generadorExcusas();
  });

  console.log("Hello Juancho from the console!");
};

const generadorExcusas = () => {
  const pronoun = ["Un", "El"];
  const subject = ["cartero", "gato", "perro", "conductor", "portero"];
  const action = ["tomo", "lanzo", "escondió", "me robó", "mordió"];
  const possession = ["la tarea", "el zapato", "las llaves", "la bicicleta"];
  const where = ["en la calle", "en mi casa", "en el camino a casa"];

  const proIndex = Math.floor(Math.random() * pronoun.length);
  const subjIndex = Math.floor(Math.random() * subject.length);
  const actionIndex = Math.floor(Math.random() * action.length);
  const possessionIndex = Math.floor(Math.random() * possession.length);
  const whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
