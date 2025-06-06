const router = require('express').Router();
const verifyJWT = require("../services/verifyJWT");
const userController = require('../controllers/userController');
const organizadorController = require('../controllers/organizadorController');
const eventoController = require('../controllers/eventoController');
const IngressoController = require('../controllers/ingressoController');
const compraController = require('../controllers/compraController');

//rotas userController
 router.post('/user', userController.createUser);
 router.get('/user',verifyJWT, userController.getAllUsers);
// router.post('/user/login', userController.postLogin); 
// router.get('/user/:cpf', userController.getUserById);
 router.put('/user/', userController.updateUser);
 router.delete('/user/:id', userController.deleteUser);
 router.post('/login', userController.loginUser);
 //router.post('/cadastro', userController.cadastroUser);

 //rotas organizadorController
router.post('/organizador', organizadorController.createOrganizador);
router.get('/organizador', organizadorController.getAllOrganizadores);
// router.get('/organizador/:id', organizadorController.getOrganizadorById);
router.put('/organizador', organizadorController.updateOrganizador);
router.delete('/organizador/:id', organizadorController.deleteOrganizador);

//rotas eventoController
router.post('/evento', eventoController.createEvento);
router.get('/evento',verifyJWT, eventoController.getAllEventos);
router.put('/evento', eventoController.updateEvento);
router.delete('/evento/:id', eventoController.deleteEvento);
router.get('/evento/data', verifyJWT, eventoController.getEventosPorData); //rota do getEventosPorData

//rotas ingressoController
router.post('/ingresso', IngressoController.createIngresso);
router.get('/ingresso/evento/:id', IngressoController.getByIdEvento);
router.get('/ingresso', IngressoController.getAllIngresso);
router.put('/ingresso', IngressoController.updateIngresso);
router.delete('/ingresso/:id', IngressoController.deleteIngresso);
router.get('/eventos/dia', eventoController.getEventosNosProximos7Dias);

//compraController
router.post('/comprasimples', compraController.registrarCompraSimples);
// http://localhost:5000/api/v1/comprasimples

router.post('/compra', compraController.registrarCompra);
// http://localhost:5000/api/v1/compra

module.exports = router;
