const CarroService = require('../services/CarroService');

app.get('/carros', (req, res) => {
    res.send('Hello World!');
    console.log('Hello World!');
})




module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] };


        let carros = await CarroService.buscarTodos();

        for (let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                deescricao: carros[i].modelo
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = { error: '', result: {} };

        let codigo = req.params.id;


        let carro = await CarroService.buscarUm(codigo);

        if (carro) {
            json.result = carro;
        } else {
            json.error = 'Carro não encontrado';
        }

        res.json(json);
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };

        let modelo = req.body.modelo;
        let placa = req.body.placa;


        if (modelo && placa) {
            let carroInserido = await CarroService.inserir(modelo, placa);

            json.result = {
                codigo: carroInserido,
                modelo,
                placa
            }
        } else {
            json.error = 'Campos não enviados';
            res.status(400);
        }

        res.json(json);
    },

    alterar: async (req, res) => {
        let json = { error: '', result: {} }

        let codigo = req.params.id;

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa && codigo) {
            let carroAlterado = await CarroService.alterar(codigo, modelo, placa);

            if (carroAlterado) {
                json.result = {
                    codigo,
                    modelo,
                    placa
                }

                res.status(200);
            }
        } else {
            json.error = 'Campos não enviados, Por favor envie todos os campos';
            res.status(400);
        }

        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: '', result: {} };

        let codigo = req.params.id;

        let carroExluido = await CarroService.excluir(codigo);

        if (carroExluido) {
            json.result = carroExluido;
            res.status(204);
        } else {
            json.error = 'Carro não encontrado';
        }

        res.json(json);
    }
}