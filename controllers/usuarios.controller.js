const { response, request } = require('express');

const getUsers = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit = 10 } = req.query;

    res.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const postUsers = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - Controller',
        nombre,
        edad
    });
}

const putUsers = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - Controller',
        id
    });
}

const deleteUsers = (req, res) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const patchUsers = (req, res) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
}