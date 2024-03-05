// Implementación del Patrón Módulo mediante IIFE
const reproductor = (() => {
    // Función privada para insertar videos en el documento HTML
    const mostrarVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url);
    };

    // Función pública para insertar los elementos recibidos
    return {
        reproducir: (url, id) => mostrarVideo(url, id)
    };
})();

// Clase padre Multimedia
class Multimedia {
    constructor(url) {
        this._url = url;
    }

    // Getter para acceder a la propiedad url
    get url() {
        return this._url;
    }

    // Setter para modificar la propiedad url
    set url(nueva_url) {
        this._url = nueva_url;
    }

    // Método setInicio, que no recibe ningún parámetro y simplemente imprime un mensaje en la consola
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    // Método para reproducir multimedia
    playMultimedia() {
        reproductor.reproducir(this.url, this.id);
    }

    // Método para establecer el tiempo de inicio
    setInicio(tiempo) {
        const nuevaUrl = `${this.url}?start=${tiempo}`;
        reproductor.reproducir(nuevaUrl, this.id); //Reproduce con el nuevo tiempo de inicio
        return nuevaUrl;
    }
}

// Creación de instancias para música, película y serie
const musica = new Reproductor("https://www.youtube.com/embed/VMk6i7Q0k54", "musica"); //el segundo parametro que se entrega hace referencia al id asignado en el HTML a la etiqueta iFrame
const pelicula = new Reproductor("https://www.youtube.com/embed/gCcx85zbxz4", "peliculas"); //el segundo parametro que se entrega hace referencia al id asignado en el HTML a la etiqueta iFrame
const serie = new Reproductor("https://www.youtube.com/embed/HhesaQXLuRY", "series"); //el segundo parametro que se entrega hace referencia al id asignado en el HTML a la etiqueta iFrame

// Invocación del método playMultimedia para mostrar los videos
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificación del tiempo de inicio para la instancia de música
musica.setInicio(30); // Iniciar en el segundo 30