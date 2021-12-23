go();

function go() {
    var polygon = activeDocument.pathItems.getByName("polygon");
    polygon.selected = true;

    var points = polygon.pathPoints;

    var arr = '[';
    for (var i = 0; i < points.length; i++){
        var point = points[i];
        //arr.push({x: point.anchor[0], y: point.anchor[1]});
        arr += '{x: ' + point.anchor[0] + ', y: ' + -point.anchor[1] + '}';
        if (i < points.length - 1) {
            arr += ', ';
        }
    }

    arr += ']';

    var fname = "points.json";
    var shortcut = new File(Folder.desktop + '/' + fname);
    shortcut.open('w');
    shortcut.writeln(arr);
    shortcut.close();
}

