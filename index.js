let handlebars = require('handlebars');
let fs = require('fs');

//obtengo el código de nuestro template, mediante el sistema de ficheros
let source = fs.readFileSync('./test.json', 'utf-8');
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
  additionalName: "Pablo",
  familyName: "Perez",
  gender: "M",
  honorificPrefix: "Mr",
  honorificSuffix: "Master",
  photograph: " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAElCAYAAADJBi9OAAAK0/IYbwoB1al7+Px5wnxwyZuwuAAAAAElFTkSuQmCC",
}

let fhir = {
  version: "01.23.42",
  payload: '{}'
}

let out = template({ base, subject, fhir });
console.log(out)
