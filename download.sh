curl -H 'Authorization: bf69486b-4733-4470-a592-f1bfce7af580' https://local.fusionauth.io/api/theme/d0dbb2c1-fbef-421d-8403-514571e6c67b|jq '.theme.templates' > out.json

node splitfiles.js
