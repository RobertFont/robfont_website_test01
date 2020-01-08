//OJO que se tiene que instalar npm install mysql
var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'testeos' //la base de datos NO LA TABLA IMBECIL
});

conexion.connect(function (error){
    if (error)
        console.log('Connection problem with mysql'+ error);
    else
        console.log('Success!, connection established');
});


module.exports=conexion;