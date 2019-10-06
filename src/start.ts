import app from "@app";

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${port}` );
});
