FROM denoland/deno:debian

WORKDIR /bot_server

COPY . .

EXPOSE 8443

RUN deno install --entrypoint src/main.ts
RUN deno compile --permission-set -o bot_server.exe src/main.ts
ENTRYPOINT ["/bot_server/bot_server.exe"]