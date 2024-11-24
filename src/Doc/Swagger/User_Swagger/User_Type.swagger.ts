const BaseUrlVersion = "api/v1";

const userTypeSwagger = {
    paths: {
        [`/${BaseUrlVersion}/user_type/newUserType`]: {
            post: {
                tags: ['User Type'],
                summary: 'Add New User Type',
                description: 'Create a new user type in the system.',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    name: {
                                        type: 'string',
                                        example: 'admin',
                                        description: 'Name of the new user type (e.g. admin, user, manager, etc.)',
                                    },
                                },
                                required: ['name'],
                            },
                            example: {
                                name: 'admin',
                            },
                        },
                    },
                },
                responses: {
                    '201': {
                        description: 'User type created successfully',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        success: { type: 'boolean', example: true },
                                        message: { type: 'string', example: 'New user type created successfully.' },
                                        data: {
                                            type: 'object',
                                            properties: {
                                                _id: { type: 'string', example: '60d1be054f8e5c001f1a10f5' },
                                                name: { type: 'string', example: 'admin' },
                                                createdAt: { type: 'string', example: '2023-06-23T08:52:45.307Z' },
                                                updatedAt: { type: 'string', example: '2023-06-23T08:52:45.307Z' },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    '400': {
                        description: 'Bad Request - Validation errors',
                        content: {
                            'application/json': {
                                example: {
                                    success: false,
                                    message: 'Invalid input: "name" is required and must be a string.',
                                },
                            },
                        },
                    },
                    '409': {
                        description: 'Conflict - User type already exists',
                        content: {
                            'application/json': {
                                example: {
                                    success: false,
                                    message: 'User type "admin" already exists.',
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'Server Error',
                        content: {
                            'application/json': {
                                example: {
                                    success: false,
                                    message: 'Internal Server Error',
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    tags: [
        {
            name: 'User Type',
            description: 'Manage user types in the system (CRUD operations).',
        },
    ],
};

export default userTypeSwagger;
