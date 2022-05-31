const express = require('express');
const { v4 } = require('uuid');
const app = express();

const customers = [];

app.use(express.json());

app.post("/account", (request, response) => {
    const { cpf, name} = request.body;

    const customerAlreadyExists = customers.some((customer)=>customer.cpf === cpf);

    if(customerAlreadyExists){
        return response.status(400).json({message: "Customer already exists!"});
    }

    const customer = {
        cpf,
        name,
        id: v4(),
        statement: [],
    }
    customers.push(customer);
    return response.status(201).send(customer)
});

app.get("/account/:cpf", (request, response) => {
    const { cpf } = request.params;

    const account = customers.find(customer => customer.cpf === cpf)

    return response.json(account.statement);

})

app.listen(3333);