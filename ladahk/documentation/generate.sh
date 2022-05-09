#!/bin/bash
multi-file-swagger index.yaml > index.json

# Generate lumen
java -jar $HOME/.swagger/swagger-codegen-cli.jar generate -l lumen -i index.json

#copy
for file in lib/app/Http/Controllers/*.php; do
    sed -i '/namespace\ \App\\Http\\Controllers;/c\namespace App\\Http\\Controllers\\Api\\V1;' "$file"
done
cp -rf lib/app/Http/Controllers/* ../app/Http/Controllers/Api/V1
sed '15,23d' lib/app/Http/routes.php > ../routes/api-placeholder.php
cp index.json ../public/doc/

# update web.php to call Impl files instead of base

#sed '15,23d' ../routes/api-placeholder.php > tmp.php
sed 's/\/ladakh//g' ../routes/api-placeholder.php > tmp.php
sed 's/Api@/ApiImpl@/g' tmp.php > ../routes/api.php



rm -rf tmp.php

