A. Set Up Project Environment
    1. Initialize a node.js project using npm init -y
    2. Install dependencies
    Breakdown of these dependencies
    1. express – A fast and minimal Node.js framework for handling HTTP requests, defining routes, middleware and APIs.  
    2. mongoose – A MongoDB ODM (Object Data Modeling) library that simplifies database interactions, schema creation and validation.  
    3. dotenv – Loads environment variables from a `.env` file, keeping sensitive data (like API keys) secure.  
    4. cors – Enables Cross-Origin Resource Sharing (CORS), allowing your server to handle requests from different origins (useful for APIs).  
    5. body-parser – Middleware to parse incoming request bodies as JSON, making it easier to work with POST requests.  
    6. nodemon (dev dependency) – Monitors file changes and automatically restarts the server during development, improving workflow efficiency.

B. Set Up Express Server
    1. Create the Main Server File - Create a file (`server.js`) to serve as the entry point of the server.  
    2. Require Necessary Packages - Import essential modules like `express`, `mongoose`, `dotenv`, and `cors`.  
    3. Configure Middleware - Use `express.json()` to parse JSON request bodies and enable `cors()` to allow requests from different origins.  
    4. Connect to MongoDB - Use `mongoose.connect()` with the database URI from the `.env` file and handle connection success and error messages.  
    5. Define a Basic Route - Create a simple GET route (`/`) to check if the server is running.  
    6. Start the Server - Listen on the specified port (from `.env` or default) and gog a message confirming that the server is running.

C. Create MongoDB Connection
    1. Create a MongoDB database (use MongoDB Atlas for a cloud database or install MongoDB locally).
    2. Get the MongoDB connection URI with mongoose.
    3. Store the URI in an .env file for security.
    4. Use mongoose.connect() in the server file to establish a connection.

D. Create a Product Model
    1. Create a `models` Folder - Inside the project directory, create a folder named `models` to store database models.  
    2. Define a Product Schema - Use `mongoose.Schema` to define the structure of the Product model.  
    3. Define Necessary Fields  
        - `name` (String, required)  
        - `price` (Number, required)  
        - `category` (String, required)  
        - `stock` (Number, required)
        - `description` (String, optional)  
        - `createdAt` (Date, default)
    4. Export the Model - Use `module.exports` to export the Product model so it can be used in controllers, routes, and other parts of the project.  

E. Set up product routes using Express
    1. Create a Routes Folder - In your project, create a new folder named `routes` to organize all your route files.
    2. Create `productRoutes.js` - Inside the `routes` folder, create a new file called `productRoutes.js`. This file will handle all product-related routes.
    3. Define CRUD Routes
        - POST /api/products: This route will be used to create a new product.
        - GET /api/products: This route will retrieve all products.
        - GET /api/products/:id: This route will retrieve a specific product based on its ID.
        - PUT /api/products/:id: This route will update a specific product by its ID.
        - DELETE /api/products/:id: This route will delete a product by its ID.
    4. Use Express Router - Inside `productRoutes.js`, import `express.Router()` and use it to handle each of the routes.
    5. Import and Use Router in `server.js` - In your main `server.js` file, import the `productRoutes.js` and tell Express to use it for the `/api/products` endpoint.
