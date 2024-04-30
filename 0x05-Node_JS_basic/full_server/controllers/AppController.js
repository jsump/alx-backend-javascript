class AppController {
    static getHomepage(request, response) {
        response.status(200). send("Hello holberton School!");
    }
}
export default AppController;