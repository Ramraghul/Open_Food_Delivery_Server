const romanNumeralSwagger = {
    paths: {
        '/api/v1/js/romanNumeral': {
            post: {
                tags: ['RomanNumerals'], // Tags categorize this endpoint
                summary: 'Number to Roman Numeral Converter',
                description: 'Convert a number to a Roman numeral.',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    value: {
                                        type: 'number',
                                        example: 3999,
                                        description: 'Number to convert',
                                    },
                                },
                                required: ['value'],
                            },
                            example: {
                                value: 3999,
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
                                        message: { type: 'string', example: 'Conversion successful' },
                                        data: {
                                            type: 'object',
                                            properties: {
                                                input: { type: 'number', example: 3999 },
                                                romanNumeral: { type: 'string', example: 'MMMCMXCIX' },
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
        '/api/v1/js/roman': {
            post: {
                tags: ['AlternativeRomanNumerals'], // Different tags for this endpoint
                summary: 'Roman Numeral API Variant',
                description: 'Alternate API for converting a number to a Roman numeral.',
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    value: {
                                        type: 'number',
                                        example: 2023,
                                        description: 'Number to convert',
                                    },
                                },
                                required: ['value'],
                            },
                            example: {
                                value: 2023,
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
                                        message: { type: 'string', example: 'Conversion successful' },
                                        data: {
                                            type: 'object',
                                            properties: {
                                                input: { type: 'number', example: 2023 },
                                                romanNumeral: { type: 'string', example: 'MMXXIII' },
                                                solvedTime: { type: 'string', example: '0.0201 ms' },
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
            name: 'RomanNumerals',
            description: 'Endpoints specifically for Roman numeral conversions',
        },
        {
            name: 'AlternativeRomanNumerals',
            description: 'Alternate APIs for Roman numeral-related operations',
        },
    ],
};

export default romanNumeralSwagger;
