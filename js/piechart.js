google.charts.load('current', {'packages':['corechart']});  // No tocar
google.charts.setOnLoadCallback(drawChart); // Nombre de la función a invocar

function drawChart() {

    var data = google.visualization.arrayToDataTable([  // 1.   Datos para graficar
        ['Task', 'Hours per Day'],  // Encabezado
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);

    var options = {     //  2. Las opciones de visualización de Chart
        title: 'My Daily Activities',
        is3D: true
    };

    // 3. Se crea el objeto chart con el constructor PieChart de google,
    //  donde se pasa como parametro el elemento con id 'piechart' donde se cargara el PieChart.
    //
    var chart = new google.visualization.PieChart(document.getElementById('carlitos'));

    // 4. El objeto chart llama al metodos Dibujar (Draw) el PieChart, pasando como parametro
    //  los datos a visulaizar y las opciones de visualización.
    chart.draw(data, options);
}