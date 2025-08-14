const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // ✅ Needed for JSON body parsing

// Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: err });
        }
        return res.json({ status: "success", user: body });
    });
});

app.patch("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
