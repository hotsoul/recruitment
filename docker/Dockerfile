# ベースイメージ 
FROM node:10.1.0-alpine

ENV NODE_ENV=development \
    DOC_ROOT=docs

RUN npm i npm@latest -g
RUN npm i gulp@latest -g
RUN npm i http-server@latest -g

WORKDIR  /recruitment

RUN npm init -y
RUN npm i gulp \
    gulp-changed \
    gulp-sass \
    gulp-sass-glob \
    gulp-sourcemaps \
    gulp-plumber \
    gulp-notify \
    gulp-postcss \
    autoprefixer \
    postcss-assets \
    css-declaration-sorter \
    css-mqpacker -D

EXPOSE 8080

CMD http-server $DOC_ROOT
