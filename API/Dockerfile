FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app
EXPOSE 5000

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

#build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT [ "dotnet", "API.dll", "--urls", "http://*:5000"]