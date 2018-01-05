function changeTimeShowing(time) {
    
    var hours = Math.floor(time % 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = Math.floor(time % 60);

    return hours + ' hours ' + minutes + ' min ' + seconds + ' sec';
}

exports.print = changeTimeShowing;


