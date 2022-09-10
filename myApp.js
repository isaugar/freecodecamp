let express = require('express');
let app = express();
//comando para mostrar información útil de depuración
//console.log("Hello World");

//__dirname = variable global del almacenamiento de Node
//console.log(__dirname);

//En Express, las rutas toman la siguiente estructura: app.METHOD(PATH, HANDLER). METHOD es un método http en minúsculas. PATH es una ruta relativa en el servidor (puede ser una cadena, o incluso una expresión regular). HANDLER es una función que Express llama cuando la ruta coincide. Los Handlers toman la forma function(req, res) {...}, donde req es el objeto de la solicitud, y res es el objeto de respuesta
app.get("/", (req, res) => {
  //res.send("Hello Express");
  path = __dirname + '/views/index.html'
  res.sendFile(path)
});

//Monta el middleware express.static() a la ruta /public con app.use(). La ruta absoluta a la carpeta de recursos es __dirname + /public
pathStatic = __dirname + '/public';
app.use("/public", express.static(pathStatic));

app.get("/json", (req, res) => {
  res.json({"message": process.env.MESSAGE_STYLE="Hello json"})
});

//El archivo .env es un archivo oculto que se utiliza para pasar variables de entorno a la aplicación. Las variables de entorno son accesibles desde la aplicación como process.env.VAR_NAME






























 module.exports = app;
