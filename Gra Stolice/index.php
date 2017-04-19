<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Stolice</title>
    <link rel="stylesheet" href="css/style.css"> </head>

<body>
    <header>
        <div class="title flexBox"><h1>Stolice</div>
    </header>
    <div class="plansza flexBox">
        <div class="poziomTrudnosci">Wybierz poziom trudności: 
   
        </div>
        <form action="...">
            <select name="poziom">
                <option>Łatwy</option>
                <option>Średni</option>
                <option>Trudny</option>
	</select>
</form>
        <div class="helper">Państwo: </div>
        <div class="proby">Liczba błędów: </div>
        <div class="wynik">Odgadnięte stolice:</div>
        
        <ul class="haslo"> </ul>
    </div>
        <ul class="literki">
    <?php
        $alphabet = array('a','ą','b','c','ć','d','e','ę','f','g','h','i','j','k','l','ł','m','n','ń','o','ó','p','q','r','s','ś','t','u','v','w','x','y','z','ź','ż');
        foreach ($alphabet as $letter) {
            echo '<li>'.$letter."</li>\n";
        }
    ?>
</ul>

<input type="button" value="Rozpocznij nową grę :)" id="startGry" />
</body>
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/app.js"></script>

</html>