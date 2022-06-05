import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export default class AppController {
    @Get('/hi')
    getRootRoute() {
        return 'hi there!';
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there!';
    }
}