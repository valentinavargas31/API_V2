import roleModel from '../models/role.model.js';

export const createRole = async (req, res) => {
    try {
        await roleModel.sync();
        const dataRole = req.body;
        const createUser = await roleModel.create({
            role_name: dataRole.role_name,
            role_descriptions: dataRole.role_descriptions,
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Create Role',
            id: createUser.role_id
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            message: 'Something went wrong in the consultation',
            status: 500,
            error: error.message 
        });
    }
};

export const showRole = async (req, res) => {
    try {
        const users = await roleModel.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Role',
            body: users,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong in the consultation',
            status: 500,
        });
    }
};

export const showIdRole = async (req, res) => {
    try {
        const idRole = req.params.id;
        const user = await roleModel.findOne({
            where: {
                role_id: idRole,
            },
        });
        res.status(200).json({
            ok: true,
            status: 200,
            maessage: 'Show Role Id',
            body: user,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong in the consultation',
            status: 500,
        });
    }
};

export const updateRole = async (req, res) => {
    try {
        await roleModel.sync();
        const idRole = req.params.id;
        const dataRole = req.body;
        const updateUser = await roleModel.update({
            role_name: dataRole.role_name,
            role_descriptions: dataRole.role_descriptions,
        }, {
            where: {
                role_id: idRole,
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Update Role',
            body: updateUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong in the consultation',
            status: 500,
        });
    }
};

export  const deleteRole = async (req, res) => {
    try {
        await roleModel.sync();
        const idRole = req.params.id;
        const deleteUser = await roleModel.destroy({
            where: {
                role_id: idRole,
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete Role',
            body: deleteUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong in the consultation',
            status: 500,
    });
 }
};