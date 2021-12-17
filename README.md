# sorenjd.github.io
Github Pages Project

    /* index.css */
    * {
        margin: 0.2em;
        padding: 0.2em;
        color: blue;
        background-color: lightgrey;
    }
    h1 span {color:blue; font-weight:normal;} /* schachtelung */
    body {font: 1em Verdana; width:50%;} /*tag*/
    h1 {font-size:1.5em;} /*tag*/
    .centerClass {text-align: center;} /*class attribut*/
    #inhalt {border: 0.1em solid white;} /*id attribut*/
    p.Hinweis{color:red;} /*class in tag*/
    a:link{color:blue;}
    a:visited{color:purple;}
    [target]{font-size:1em;} /*alle tags mit attribut target*/
    [target=xyz]{font-size:2em;}
    p:nth-child(2) {color:wheat;} /*wählt alle p-tags die das 2te kind von irgendeinem tag sind*/

    /*für gestreifte tabellen:*/
    /*
    tr:nth-child(even){background-color:wheat;}
    tr:nth-child(odd){background-color:white;}
    */
    #myParagraph{display:inline;} /*element wird im laufenden textfluss angezeigt*/
    #myParagraph2{display:block;}/*rechteckiger block steht allein in zeile*/
    #myParagraph3{display:inline-block;} /*rechteckiger block, nicht allein in zeile*/
    /*
    auch: display none, element wird nicht angezeigt, als existiere es nicht
    nicht zu verwechseln mit visibility:hidden, element ist unsichtbarer platzhalter,
    umschalten mit visibility:visible
    */
    .leftSection{float:left;} /*block an linke seite kleben (auch 'right', 'none')*/
    .clearSection{clear:left;} /*löscht linkseinrückung von leftsections, 'right' analog, mit 'both' beiden*/
    .content2 {background-image:url(mein_bild.jpg); background-position: center center;}
    /*oder auch background-repeat:repeat-x; (oder repeat-y oder repeat)*/
    .content3 {background-color:transparent} /*macht nur element transparent*/
    .content4 {opacity:0.5;} /*element mit rahmen und hintergrund transparent*/

           <form action="/cgi-bin/Echo.pl" id="form_id" method="get" accept-charset="UTF-8">
            
            <input type="text" name="zuname" value="Muster" size="30" maxlength="30" placeholder="Ihre Eingabe"/>
                        
            <fieldset id="radiobuttonabschnitt" tabindex="1">
            <legend> Radiobuttons gruppiert durch namen: </legend>
            <input type="radio" name="group" value="1" />
            <input type="radio" name="group" value="2" />
            <input type="radio" name="group" value="3" checked />
            </fieldset>

            <input type="checkbox" name="zutat" value="salami" />

            <input type="button" name="Start" value="Startseite" onclick="self.location.href='http://www.xyz.de/'" />
            <input type="hidden" name="sessionID" value="4711" />
            <input type="submit"/>
            <label>Zuname:
            <input type="text" id="nachname" name="Zuname"/>
            </label>
            <label for="nachname"> Nachname hier: </label>   
            </form>