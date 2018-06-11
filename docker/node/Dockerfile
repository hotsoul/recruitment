# ベースイメージ 
FROM node:10.1.0-alpine

ENV NODE_ENV=development \
    DOC_ROOT=docs

RUN npm i npm@latest -g && \ 
    npm i gulp-cli@latest -g && \
    npm i http-server@latest -g
# npm i htmltidy2@latest -g #これをinstallしてもダメだった

WORKDIR  /recruitment

RUN npm init -y && \
    npm i gulp \
    gulp-changed \
    gulp-clean \
    gulp-htmlmin \
#    gulp-htmltidy \ # 
    gulp-notify \
    gulp-plumber \
    gulp-postcss \
    gulp-sass \
    gulp-sass-glob \
    gulp-sourcemaps \
    autoprefixer \
    postcss-assets \
    css-declaration-sorter \
    css-mqpacker \
    susy -D

EXPOSE 8080

CMD http-server $DOC_ROOT
