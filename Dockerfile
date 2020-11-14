FROM node:13-alpine AS build
WORKDIR /app
COPY ./package.json ./package.json
RUN yarn set version berry \
    && yarn --version \
    && yarn install
COPY . .

# FROM node:13-alpine AS test
# WORKDIR /app
# COPY --from=build /app /app
# RUN npm install --only=dev
# RUN npm run test-silent

FROM node:13-alpine AS run
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app
COPY --from=build /app /app
RUN yarn run build
ARG version
ENV VERSION=${version}
ENTRYPOINT [ "yarn", "run", "start" ]
EXPOSE 80
