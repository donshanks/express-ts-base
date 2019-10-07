import app from "@app";

import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "env-files", `${process.env.NODE_ENV || "development"}.env`) });

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${port}` );
});
