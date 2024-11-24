import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

class MongoDBConnection {
    private static instance: MongoDBConnection;
    private isConnected: boolean = false;

    private constructor() {} // Singleton Pattern to ensure a single connection instance

    /**
     * Connect to MongoDB.
     * @returns {Promise<void>}
     */
    public async connect(): Promise<void> {
        if (this.isConnected) {
            console.log(chalk.blueBright('MongoDB is already connected.'));
            return;
        }

        const MONGODB_URI: string = process.env.MONGODB_URI || 'mongodb://localhost:27017/Online_Food_Delivery';
        const environment = process.env.NODE_ENV || 'development';
        console.log(environment,'environment')

        const options: ConnectOptions = {
            autoIndex: true, // Auto-build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
            socketTimeoutMS: 45000, // Close inactive sockets after 45 seconds
        };

        try {
            console.log(chalk.yellowBright('Connecting to MongoDB...'));
            await mongoose.connect(MONGODB_URI, options);
            this.isConnected = true;

            const dbType = environment === 'production' ? 'Live DB (Production)' : 'Local DB (Development)';
            const dbTypeColor = environment === 'production' ? chalk.greenBright : chalk.cyanBright;

            console.log(dbTypeColor(`MongoDB connection established successfully: ${dbType}`));
        } catch (error) {
            console.error(chalk.redBright('Error connecting to MongoDB:'), error);
            process.exit(1); // Exit the process if MongoDB fails to connect
        }

        this.setupEventListeners();
    }

    /**
     * Setup MongoDB connection event listeners.
     */
    private setupEventListeners(): void {
        mongoose.connection.on('connected', () => {
            console.log(chalk.greenBright('MongoDB event: Connected'));
        });

        mongoose.connection.on('disconnected', () => {
            console.log(chalk.redBright('MongoDB event: Disconnected'));
        });

        mongoose.connection.on('error', (err) => {
            console.error(chalk.redBright('MongoDB event: Error'), err);
        });

        // Handle termination signals
        process.on('SIGINT', async () => {
            await this.disconnect();
            console.log(chalk.magentaBright('MongoDB connection closed due to app termination.'));
            process.exit(0);
        });
    }

    /**
     * Disconnect from MongoDB.
     * @returns {Promise<void>}
     */
    public async disconnect(): Promise<void> {
        if (this.isConnected) {
            await mongoose.disconnect();
            this.isConnected = false;
            console.log(chalk.magentaBright('MongoDB connection closed.'));
        }
    }

    /**
     * Get the singleton instance of MongoDBConnection.
     * @returns {MongoDBConnection}
     */
    public static getInstance(): MongoDBConnection {
        if (!MongoDBConnection.instance) {
            MongoDBConnection.instance = new MongoDBConnection();
        }
        return MongoDBConnection.instance;
    }
}

export default MongoDBConnection;
