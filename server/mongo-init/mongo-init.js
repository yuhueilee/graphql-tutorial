db.auth("root", "password");

db = db.getSiblingDB("products-db");

db.createUser({
    user: "admin-user",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "products-db",
        },
    ],
});
