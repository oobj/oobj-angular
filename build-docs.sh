npx ng build --prod --aot=false --build-optimizer=false --base-href /oobj-angular --deploy-url '/oobj-angular/'
mv dist/demo-docs/index.html dist/demo-docs/404.html
cd projects/oobj/angular
npm run doc
cp -r documentation/* ../../../dist/demo-docs/

