/**
 * Created by TIMMY on 2016-11-28.
 */

var filterSelect = document.querySelector('select#filter');



filterSelect.onchange = function() {
    localVideo.className = filterSelect.value;

};

