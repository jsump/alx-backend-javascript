class AppController {
    static getHomePage(request, response) {
        response.status(200). send("Hello holberton School!");
    }
}
export default AppController;