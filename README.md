# Vercel:
[Vercel deploy here](https://vercel-test-l75unftka-edgars-projects-46ac412c.vercel.app/items )

# To run in a local environment:
To run this project you need to pull your vercel env (``vercel env pull dev``)
1. Install deps ``yarn install``
2. Run project ``yarn dev --open``
3. Note: ignore the first page, i was experimenting with firebase and that splash screen stayed there

# To run swagger API docummentation:
1. Run ``npm install -g swagger-ui``
2. Run ``swagger project edit``, this will open the following view:

# To run tests:
1. Run ``npm install -g vitest``
2. Run ``yarn test``

   ![](https://github.com/diespeso/vercel-test/blob/master/public/items_swagger.png)

# Views
### Table View, Toggable Edit, Delete Button and Creation Form

**route: /items**
![](https://github.com/diespeso/vercel-test/blob/master/public/items_table_view.png)

### Specific item View
**route /items/:item-id**
![](https://github.com/diespeso/vercel-test/blob/master/public/items_single_view.png)
