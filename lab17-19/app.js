const express = require("express");
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

const session = require("express-session");

app.use(
  session({
    secret: "wasaaaa",
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const csrf = require("csurf");
const csrfProtection = csrf();
app.use(csrfProtection);

const userRoutes = require("./routes/user.routes");
app.use("/user", userRoutes);

const checkRoutes = require("./routes/check.routes");
app.use("/check", checkRoutes);

app.listen(3000);
