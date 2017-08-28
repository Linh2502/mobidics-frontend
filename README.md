# Mobidics

Anleitung zum Bauen des Projekts:

1. Zunächst muss Node.js und der dazugehörige Package Manager npm installiert werden

2. `npm install -g @angular/cli` ausführen

3. zum Ordner des Projects navigieren

4. `npm install` ausführen

5. in der Datei "/src/app/services/http/http.service.ts" die Variable "baseUri" anpassen, das Java Backend hat die Struktur `<server-host>/mobidics/api/`

6. `ng build -prod` ausführen

7. Dateien im "dist"-Ordner auf den Webserver laden

8. Der Webserver muss alle unbekannten Requests auf die index.html Datei redirecten, da das Routing innerhalb der Angular Applikation geschieht
