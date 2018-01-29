# MEAN Stack Template 
Use this repo as a starting point to get started with a MEAN full-stack application using Mongoose to connect to your database, use Angular for views, and Angular Material for styles.

## To customize your app
Update the following names to match your app
1. In modules/schema.module.js, update the `SCHEMANAMEHERE` to a relevant name like, `favoritesSchema`
    a. `favoritesSchema` will match the router file 
2. In scripts/controllers, update the `CONTROLLERNAME` to a relevant name like, `FavoritesController`
    a. `FavoritesController` will match the client.js file `CONTROLLERNAME`
3. In same file as above, update the `SERVICENAME` to a relevant name like, `FavoritesService`
    a. `FavoritesService` will match the name.service.js `SERVICENAME`
4. In the client.js file, update `URLHERE` to match the #!URL like, `favorites`
5. In the same file as above, update `templateUrl` to match the views needed like, `/views/favorites.html`
6. In the same file as #4, update `controller` to match controllers defined in #2 like, `FavoritesController as vm`
7. In the same file as #4, update any Angular Material theming you would like
8. In views/templates, update the nav.template `VIEWNAME` to match the views created in #5 like, `#!/favorites`
9. In views, update the html file with relevant html for the content
10. In index.html, match the template files in the ng-include with the views files
11. In routes, update `SCHEMANAMEHEREMODULE` to a relevant name like, `favoritesSchemaModule`
12. In the same file as above, update `SCHEMANAMEHERE` to a relevant name like, `favoritesSchema`
13. In the same file as #11, update `NAMEHERE` to a relevant name like, `favoritesSchema`
14. In the server.js file, update `NAMEROUTER` to a relevant name like, `favoritesRouter`
15. In the server.js file, update `NAME` to a releveant name like `favorites`
16. In the same file as above, update `DATABASE-NAME` to a relevant name like `favorites-app`
17. Change all the file names to match the naming convention like, switch all files using `name` to `favorites`