db.createUser({
    user: "admin",
    pwd: "pass",
    roles: [
        {
            role: "root",
            db: "products-db",
        },
    ],
});
