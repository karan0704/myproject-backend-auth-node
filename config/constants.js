/* Application Constants File */

// ==================== HTTP STATUS CODES ====================

const HTTP_STATUS = {
    // 2xx Success responses
    OK: 200,                    // Request successful
    CREATED: 201,               // Resource created successfully

    // 4xx Client error responses
    BAD_REQUEST: 400,           // Invalid request data
    UNAUTHORIZED: 401,          // Authentication required
    FORBIDDEN: 403,             // Access denied
    NOT_FOUND: 404,             // Resource not found
    CONFLICT: 409,              // Resource already exists

    // 5xx Server error responses
    INTERNAL_SERVER_ERROR: 500  // Server error
};

// ==================== VALIDATION RULES ====================

const VALIDATION_RULES = {
    // Username validation rules
    USERNAME: {
        MIN_LENGTH: 3,
        MAX_LENGTH: 30,
        REQUIRED_MESSAGE: 'Username is required',
        MIN_LENGTH_MESSAGE: 'Username must be at least 3 characters long',
        MAX_LENGTH_MESSAGE: 'Username cannot exceed 30 characters',
        UNIQUE_MESSAGE: 'Username already exists'
    },

    // Email validation rules
    EMAIL: {
        REQUIRED_MESSAGE: 'Email is required',
        INVALID_MESSAGE: 'Please enter a valid email address',
        UNIQUE_MESSAGE: 'Email already registered',
        // Regex pattern for email validation
        PATTERN: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },

    // Password validation rules
    PASSWORD: {
        MIN_LENGTH: 6,
        MAX_LENGTH: 100,
        REQUIRED_MESSAGE: 'Password is required',
        MIN_LENGTH_MESSAGE: 'Password must be at least 6 characters long',
        MAX_LENGTH_MESSAGE: 'Password cannot exceed 100 characters'
    }
};

// ==================== APPLICATION MESSAGES ====================

const MESSAGES = {
    // Success messages
    SUCCESS: {
        REGISTRATION_SUCCESS: 'User registered successfully',
        LOGIN_SUCCESS: 'Login successful',
        PROFILE_RETRIEVED: 'Profile retrieved successfully',
        SERVER_RUNNING: 'Server is running successfully'
    },

    // Error messages
    ERROR: {
        // Authentication errors
        USER_ALREADY_EXISTS: 'User with this email or username already exists',
        INVALID_CREDENTIALS: 'Invalid email or password',
        USER_NOT_FOUND: 'User not found',

        // Authorization errors
        NO_TOKEN: 'Access denied. No authentication token provided',
        INVALID_TOKEN: 'Invalid or expired authentication token',
        TOKEN_EXPIRED: 'Authentication token has expired',

        // Server errors
        SERVER_ERROR: 'Internal server error occurred',
        DATABASE_ERROR: 'Database connection error',
        REGISTRATION_FAILED: 'User registration failed',
        LOGIN_FAILED: 'Login process failed',

        // Validation errors
        VALIDATION_FAILED: 'Input validation failed',
        MISSING_REQUIRED_FIELDS: 'Required fields are missing'
    }
};

// ==================== SECURITY CONFIGURATION ====================

const SECURITY = {
    // JWT configuration
    JWT: {
        HEADER_PREFIX: 'Bearer ',
        ALGORITHM: 'HS256'
    },

    // Password hashing configuration
    BCRYPT: {
        DEFAULT_SALT_ROUNDS: 10
    }
};

// ==================== DATABASE CONFIGURATION ====================

const DATABASE = {
    // Collection names
    COLLECTIONS: {
        USERS: 'users'
    },

    // Connection settings
    CONNECTION: {
        TIMEOUT_MS: 10000,         // 10 seconds connection timeout
        SOCKET_TIMEOUT_MS: 45000   // 45 seconds socket timeout
    }
};

// ==================== API CONFIGURATION ====================

const API = {
    // API versions
    VERSION: {
        V1: '/api/v1'
    },

    // Route paths
    ROUTES: {
        AUTH: '/auth',
        USERS: '/users'
    }
};

// Export all constants for use throughout the application
module.exports = {
    HTTP_STATUS,
    VALIDATION_RULES,
    MESSAGES,
    SECURITY,
    DATABASE,
    API
};
