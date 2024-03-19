## Inhaltsverzeichnis

1. [Problemstellung](#problemstellung)
2. [Anforderungen](#anforderungen)
3. [Art und Vorgehensweise](#art-und-vorgehensweise)
4. [Resultat](#resultat)
5. [Fazit und Reflexion](#fazit-und-reflexion)
6. [Testfälle](#testfälle)

## Problemstellung
Wie kann ein Prüfungskalender entwickelt werden, der von Schüler/innen bearbeitet werden kann um Prüfungsstress zu minimieren und die Prüfungsvorbereitung zu optimieren? 

## Anforderungen
Nummer | Typ | Anforderung | Umsetzung im Prototyp
--- | --- | --- | ---
1 | Funktional | Eintragen von Prüfungsterminen | Ja
2 | Funktional | Setzten von Lernzielen | Ja
3 | Funktional | Setzen von Fächern | Ja
4 | Funktional | Benutzer kann sich in einer Klasse einschreiben | Ja
5 | Funktional | Erhaltung von Erinnerungen für bevorstehende Prüfungen und Hinzufügen von Prüfungsdaten | Ja
6 | Funktional | Verwalten von Prüfungsterminen, einschliesslich Bearbeitung und Löschen | Ja
7 | Randbedingung | Hinzufügen einer Reaktion | Nein
8 | Randbedingung | Hinzufügen von einem Häckchen bei Erfüllung der Prüfungsvorbereitung | Ja
9 | Qualität | Benutzerfreundliche Oberfläche für einfache Navigation | Ja
10 | Qualität | Sicherstellung der Datensicherheit für persönliche Schülerinformationen | Nein
11 | Randbedingung | Plattformkompatibilität auf verschiedenen Geräten und Browsern gewährleisten | Nein
12 | Randbedingung | Benutzer in einer Klasse können den gegenseitigen Prüfungsplaner anschauen | Ja
13 | Randbedingung | Benutzer können sich registrieren/einloggen | Nein

Ich habe hier dabei die Anforderungen vom Modul 421 genommen und geändert, da ich im letzten Modul nicht sehr wusste, wie ich diese Anforderungen schreiben sollte. Deshalb sind es nicht dieselben. 

## Art und Vorgehensweise
### Art
Die gewählte Art des Prototyping für den Prüfungskalender ist das Funktionsprototyping.

Begründung:

- Ein Funktionsprototyp ermöglicht es, entscheidende funktionale Eigenschaften des späteren Produkts zu demonstrieren. In diesem Fall sind dies die Funktionen des Prüfungskalenders, wie das Eintragen von Prüfungsterminen, das Setzen von allfähigen Notizen und möglicherweise die Anmeldung der Benutzer (?).
- Da der Fokus auf der Demonstration der Funktionalität liegt, ist diese Art des Prototyping besonders geeignet, um die Effektivität und Nützlichkeit des Kalenders zu messen.

### Vorgehensweise
Die beiden gewählten Vorgehensweisen für das Prototyping des Prüfungskalenders sind das Vertikale Prototyping (Durchstich) und das Horizontale Prototyping (von der Präsentation PR_245_1762_Prototyping.pptx).

Begründung für die Wahl:

- Vertikales Prototyping (Durchstich): Dieses Vorgehen ermöglicht es, einen funktionalen Ausschnitt des Systems durch alle Ebenen zu implementieren. Für den Prüfungskalender bedeutet dies, einen ausgewählten Teil des Kalenders von der Benutzeroberfläche bis zur Datenbankimplementierung umzusetzen. Dies ist besonders nützlich, um bereits abgeschlossene Teile zu implementieren, während noch Funktionalitäts- oder Implementierungsanforderungen noch nicht in Frage kommen.
- Horizontales Prototyping: Hierbei wird eine ausgewählte Ebene des Gesamtsystems fertiggestellt. Dies könnte bedeuten, eine funktionsfähige Ebene des Kalenders zu entwickeln, die vorgestellt werden kann oder an der sich andere Ebenen orientieren können. Dieses Vorgehen ermöglicht es, frühzeitig eine Vorstellung von der Funktionsweise des Kalenders zu erhalten und die Benutzerfreundlichkeit zu testen. 

Auswahl der Vorgehensweise:

Ich habe das Vertikale Prototyping (Durchstich) gewählt, da es mir ermöglicht, einen wichtigen und funktionalen Bereich des Kalenders zu implementieren, also wie z.B. das Eintragen der Prüfungen, ohne mir zu viel Gedanken an die anderen Anforderungen zu machen.

## Resultat
Die Umsetzung des Prototyps erfolgte mithilfe von React.js und entsprechenden Komponenten für die Funktionalitäten des Prüfungskalenders. Den Code ist hier auf Github abgelegt.

## Fazit und Reflexion
Der Prototyp wurde erfolgreich umgesetzt und erfüllt die grundlegenden Anforderungen für den Prüfungskalender. Die gewählte Vorgehensweise des vertikalen Prototypings ermöglichte es, einen funktionalen Ausschnitt des Systems zu implementieren und dabei die wichtigsten Funktionen zu demonstrieren. Der Einsatz von React.js ermöglichte eine effiziente Entwicklung und eine benutzerfreundliche Benutzeroberfläche. In Zukunft könnten weitere Funktionen hinzugefügt und das System auf Basis des Feedbacks der Nutzer weiterentwickelt werden. 


## Testfälle
Nummer | Vorraussetzung | Eingabe | Erwartete Ausgabe
--- | --- | --- | ---
1 | www | www| www
