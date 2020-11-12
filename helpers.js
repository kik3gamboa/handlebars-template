let handlebars = require('handlebars');
let fs = require('fs');

//obtengo el código de nuestro template, mediante el sistema de ficheros
let source = fs.readFileSync('./test-helper.json', 'utf-8');
//compilo la plantilla mediante handlebars
let template = handlebars.compile(source);

let base = {
  credentialId: "123e4567-e89b-12d3-a456-426614174000",
  issuerRef: "https://opencerta.org/certificate/v1",
  issuanceDate: "2020-11-05T00:00:00Z",
  expirationDate: "2022-11-05T23:59:59Z"
}

let subject = {
  id: "test-id-123KJHKJDHSFI324IUWYR87-YI873Y4UIH",
  givenName: "Pedro",
  additionalName: "Pablo 13241 ",
  familyName: "Perez",
  gender: "M",
  honorificPrefix: "mr",
  honorificSuffix: "master",
  photograph: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAElCAYAAADJBi9OAAAK0/IYbwoB1al7+Px5wnxwyZuwuAAAAAElFTkSuQmCC",
}

let fhir = {
  version: "01.23.42D",
  payload: '{}'
}

handlebars.registerHelper('uppercase', function (context) {
  return context.toUpperCase();
});

handlebars.registerHelper('lowercase', function (context) {
  return context.toLowerCase();
});

handlebars.registerHelper('onlyString', function (context) {
  return context.replace(/\d+/g, '');
});

handlebars.registerHelper('capitalize', function (context) {
  if (typeof context !== 'string') return ''
    return context.charAt(0).toUpperCase() + context.slice(1)
});

let out = template({ base, subject, fhir });
console.log(out)
