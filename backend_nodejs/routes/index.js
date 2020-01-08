const express = require('express');
const db = require('./db');
const router = express.Router();

//JWT (JSON WEB TOKEN)
const jwt = require('jsonwebtoken');
const SECRET = 'whoisyourdaddy';

//gives access to the server
var app = express();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("something")
    
    // res.render('index', { title: 'Express' });
    // res.render('index', {title: 'Express with node js', name: 'Robert'})
    res.send({ obj: 1, name: 'Robert' })
});

//================================== LOGIN CON PROTECCION ( PETICION POST ) ==================================

/*router.post('/login', function(req, res, next) {
    console.log("llega a login")
	//variables declared for ease of use
    const DBname = req.query.name;
    const DBpassword = req.query.password; 

    console.log('name:' + DBname);
    console.log('pass:' + DBpassword); 

    sql = db.query('SELECT * FROM robfont_nav3_table WHERE ? AND ?', [{ name: DBname }, { password: DBpassword }], function (error, filas) {

        if (error) {
            console.log(sql.sql)
            console.log('ALERT! Error description here: ' + error);
            return;
        }
        console.log(filas)
        if (filas.length > 0) { //si alguna fila coincide con los datos introducidos, salta Login succesful, pues comprueba todas las filas

            console.log('Login successful!');
            const idRecuperadaDeLaBaseDeDatos = 1;
            const token = jwt.sign({ idRecuperadaDeLaBaseDeDatos }, SECRET);
            res.send({token:token, respuesta:'ok'});
        } else {
            console.log('NOT LOGIN')
            res.send({ respuesta: 'error login' })
            //res.send(403)
        }
        //Los registros son los libros
        //Los campos son id, precio, etc
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(filas);
          res.end();
    });
});*/


/*router.get('/user-data', function(req, res, next) {
	const tokenData = jwt.verify(req.header('accessToken'), SECRET);
	res.send(tokenData);
});*/


//================================== LOGIN SIN PROTECCION ( PETICION GET ) ==================================

//================ QUERY (checking database) ================
router.get('/query', function (req, res, next) {

    //variables declared for ease of use
    const DBname = req.query.name;
    const DBpassword = req.query.password;

    console.log('name:' + DBname);
    console.log('pass:' + DBpassword);

    console.log('==================== QUERY EXECUTED ====================')
    // aqui es donde se lee todas las filas de la base de datos que cumplen estas condiciones
    db.query('SELECT * FROM robfont_nav3_table WHERE ? AND ?', [{ name: DBname }, { password: DBpassword }], function (error, filas) {

        if (error) {
            //console.log(sql.sql)

            console.log('ALERT! Error description here: ' + error);
            return;
        }
        //filas = JSON.stringify(filas);  //Fila Es un array con el resultado de la consulta 
        console.log(filas)
        if (filas.length > 0) { //si alguna fila coincide con los datos introducidos, salta Login succesful, pues comprueba todas las filas
            console.log('Login successful!');
            res.send({ respuesta: 'ok' })
        } else {
            console.log('NOT LOGIN')
            res.send({ respuesta: 'error login' })
        }
        //Los registros son los libros
        //Los campos son id, precio, etc
        /*  res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(filas);
          res.end();*/

    });
});

//================================== REGISTER ==================================

//================ PUSH (adds a new user to the database) ================
router.get('/new_user', function (req, res, next) {

    //variables declared for ease of use
    const DBname = req.query.name;
    const DBpassword = req.query.password;
    const DBemail = req.query.email;

    console.log('==================== PUSH EXECUTED ====================')

    db.query('INSERT INTO robfont_nav3_table SET ?,?,?', [{ name: DBname }, { password: DBpassword },{email: DBemail}], function(error, filas){
        console.log('Inserting...');
        if(error){
            console.log(`An error has occurred: ${error}`);
            return;
        }
        else{
            console.log(`Data inserted: \n Name - ${DBname} \n Password - ${DBpassword}  \n Email - ${DBemail}`)
        }
        //res.writeHead(200);
        //res.end();

    });
    res.send('OK');
});

module.exports = router;


/*
Crear un nuevo proyecto con nodejs que implemente los siguientes enrutamientos:

/ -> Muestra una traza en la terminal
/init -> Carga una vista llamada inicio que muestra el texto "página de inicio"
/user-init -> Carga una vista llamada inicio-usuario que muestra el texto "hola [usuario]", donde [usuario] es un valor que recibimos del router]
/libro -> Muestra el código HTML
<h1>Carga libro</h1>
, pero sin cargar ningún fichero de vista. La palabra libro será un nuevo fichero enrutador definido dentro de la carpeta routes
/libro/alta -> Muestra la traza "formulario alta". La palabra libro será un nuevo fichero enrutador definido dentro de la carpeta routes.

*/

module.exports = router;


