npx ng build --prod --aot=false --build-optimizer=false --output-path docs  --base-href /oobj-angular --deploy-url '/oobj-angular'
mv docs/index.html docs/404.html
cd projects/oobj/angular
npm run doc
cp -r documentation/* ../../../docs/
