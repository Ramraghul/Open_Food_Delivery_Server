const BaseUrlVersion = "api/v1";


const palindromeSwagger = {
    paths: {
        [`/${BaseUrlVersion}/user_auth/signUp`]: {
            post: {
                tags: ['User Auth'],
                summary: 'User Sign Up',
                description: 'New User Registration API Part',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    value: {
                                        type: 'string',
                                        example: 'eye',
                                        description: 'Word or string to check',
                                    },
                                },
                                required: ['value'],
                            },
                            example: {
                                value: 'eye',
                            },
                        },
                    },
                },
                responses: {
                    '200': {
                        description: 'Success',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        status: { type: 'boolean', example: true },
                                        message: { type: 'string', example: 'Palindrome check successful' },
                                        data: {
                                            type: 'object',
                                            properties: {
                                                input: { type: 'string', example: 'eye' },
                                                isPalindrome: { type: 'boolean', example: true },
                                                solvedTime: { type: 'string', example: '0.0401 ms' },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    '500': {
                        description: 'Server Error',
                        content: {
                            'application/json': {
                                example: {
                                    status: false,
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
            name: 'User Auth',
            description: 'This Section For User Auth Like Sign Up, Sign In, OTP Validation, Forgot Password ',
        },
    ],
};

export default palindromeSwagger;
