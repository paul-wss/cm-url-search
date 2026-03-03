# URL in Google suchen – Chrome-Extension

Fügt im Kontextmenü bei **markierten URLs** (z. B. `wikipedia.org`) den Eintrag  
**„Nach „wikipedia.org" in Google suchen"** hinzu – genau wie Chrome es bei gewöhnlichem  
Text ohnehin anzeigt. Ein Klick öffnet ein neues Tab mit der entsprechenden Google-Suche.

## Installation (Entwicklermodus)

1. Chrome öffnen und `chrome://extensions` aufrufen.
2. Oben rechts **„Entwicklermodus"** aktivieren.
3. **„Entpackte Erweiterung laden"** klicken.
4. Diesen Ordner (`cm-url-search`) auswählen.

Die Extension ist sofort aktiv – kein Neustart nötig.

## Verwendung

1. Eine URL auf einer beliebigen Seite markieren (z. B. `wikipedia.org`).
2. Rechtsklick → **„Nach „wikipedia.org" in Google suchen"** auswählen.
3. Ein neues Tab öffnet sich mit `https://www.google.com/search?q=wikipedia.org`.

## Dateien

| Datei | Beschreibung |
|---|---|
| `manifest.json` | Extension-Metadaten (Manifest V3) |
| `background.js` | Service Worker: erstellt und verwaltet den Kontextmenü-Eintrag |
