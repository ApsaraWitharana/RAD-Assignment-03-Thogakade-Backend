import express from 'express';
import CustomerRoutes from "./routes/Customer-routes";
import ItemRoutes from "./routes/Item-routes";
import OrderRouters from "./routes/OrderRouters";

const app = express();

app.use(express.json());


app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})
app.use('/customer',CustomerRoutes);
app.use('/item',ItemRoutes);
app.use('/order',OrderRouters);

app.listen(3000, () => {
    console.log(`Server running on port`);
});
