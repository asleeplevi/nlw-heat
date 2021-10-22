import { serverHttp } from "./app";

serverHttp.listen(process.env.PORT || 4000, () => '🚀 Server is running')