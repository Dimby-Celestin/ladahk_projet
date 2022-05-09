#!/bin/bash
rm -rf ../FrontAndApi/public/admin/*
ng build -c prod --base-href=admin
cp -r ./dist/ladakhAdmin/* ../FrontAndApi/public/admin/