"use strict";
//円オブジェクト
var Elps = /** @class */ (function () {
    function Elps(x, y, elp_dia) {
        this.dia = elp_dia;
        this.x = x;
        this.y = y;
    }
    Elps.prototype.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.dia, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        context.strokeStyle = 'rgba(255, 0, 0, 1)';
        context.lineWidth = 3;
        context.closePath();
        context.stroke();
    };
    Elps.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Elps.prototype.delete = function () {
        //this.context.save()
        context.clearRect(this.x - this.dia / 2 - 12, this.y - this.dia / 2 - 12, this.dia + 25, this.dia + 25);
    };
    return Elps;
}());
//線のオブジェクト
var DragLines = /** @class */ (function () {
    function DragLines(context) {
        this.context = context;
        this.isDrag = false;
    }
    DragLines.prototype.draw = function (sx, sy, ex, ey) {
        this.context.save();
        this.context.lineCap = 'round';
        this.context.lineWidth = 3;
        this.context.strokeStyle = "blue";
        this.context.beginPath();
        this.context.moveTo(sx, sy);
        this.context.lineTo(ex, ey);
        this.context.closePath();
        this.context.stroke();
        this.context.restore();
    };
    return DragLines;
}());
//grobal propatyes
var dia = 20;
var start_elps = new Elps(160, 190, dia);
var end_elps = new Elps(300, 190, dia);
var canvas = document.getElementById('draw_area');
var context = canvas.getContext('2d');
var drag_line = new DragLines(context);
var draw_text = document.getElementById('draw_text');
var side_text = document.getElementById('side_text');
var side_img = document.getElementById('SideImg');
var a_point = [[160, 190, 300, 190], [210, 180, 210, 300], [250, 200, 230, 330]];
var i_point = [[156, 179, 224, 265], [261, 189, 297, 283]];
var u_point = [[199, 137, 278, 150], [166, 201, 202, 288]];
var e_point = [[189, 142, 269, 147], [169, 195, 319, 290]];
var o_point = [[162, 176, 256, 171], [207, 132, 247, 252], [281, 150, 320, 191]];
var complete = [false, false, false, false, false,]; //文字の終了状態を示す[あ、い、う、え、お]
var count = 0;
var clear = false;
//other functions
function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
function draw_line() {
    canvas.addEventListener('mouseout', function (e) {
        drag_line.isDrag = false;
    });
    canvas.addEventListener('mouseup', function (e) {
        //console.log('mouse released')
        drag_line.isDrag = false;
    });
    canvas.addEventListener('mousedown', function (e) {
        drag_line.isDrag = true;
    });
    canvas.addEventListener('mousemove', function (e) {
        var downX = e.offsetX;
        var downY = e.offsetY;
        var prex = downX;
        var prey = downY;
        //drag_line.isDrag = true;
        if (drag_line.isDrag === true) {
            drag_line.draw(prex, prey, downX, downY);
            prex = downX;
            prey = downY;
        }
        else {
            return;
        }
    });
}
function next_elps(sx, sy, ex, ey) {
    start_elps.delete();
    end_elps.delete();
    start_elps.move(sx, sy);
    end_elps.move(ex, ey);
    //start_elps.draw(context);s
    //end_elps.draw(context);
}
function text_change(text, subtext, img) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //console.log('canvasClear')
    draw_text.textContent = text;
    side_text.textContent = subtext;
    side_img.setAttribute('src', img);
}
function inittialize_text(change_data, point_data) {
    count = 0;
    text_change(change_data[0], change_data[1], change_data[2]);
    clear = false;
    start_elps = new Elps(point_data[0], point_data[1], dia);
    end_elps = new Elps(point_data[2], point_data[3], dia);
    start_elps.draw(context);
    end_elps.draw(context);
}
function itimozi_end(mx, my, index) {
    if (dist(mx, my, end_elps.x, end_elps.y) < dia / 2) {
        if (drag_line.isDrag === true) {
            complete.splice(index, 1, true);
            clear = true;
            count++;
        }
    }
}
function ittkaku_play(mx, my, point_data) {
    if (dist(mx, my, end_elps.x, end_elps.y) < dia / 2) {
        if (drag_line.isDrag === true) {
            next_elps(point_data[0], point_data[1], point_data[2], point_data[3]);
            start_elps.draw(context);
            end_elps.draw(context);
            count++;
        }
    }
}
//main function
function main() {
    draw_line();
    start_elps.draw(context);
    end_elps.draw(context);
    canvas.addEventListener('mousemove', function (e) {
        draw_line();
        if (complete[0] === false) {
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, a_point[count]);
            }
            else if (count === 2) {
                ittkaku_play(e.offsetX, e.offsetY, a_point[count]);
            }
            else if (count === 3) {
                itimozi_end(e.offsetX, e.offsetY, 0);
            }
        }
        else if (complete[1] === false) {
            if (clear === true) {
                inittialize_text(['い', 'いちご', '../src/images/itigo.png'], i_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, i_point[count]);
            }
            else if (count === 2) {
                itimozi_end(e.offsetX, e.offsetY, 1);
            }
        }
        else if (complete[2] === false) {
            if (clear === true) {
                inittialize_text(['う', 'うどん', '../src/images/udon.png'], u_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, u_point[count]);
            }
            else if (count === 2) {
                itimozi_end(e.offsetX, e.offsetY, 2);
            }
        }
        else if (complete[3] === false) {
            if (clear === true) {
                inittialize_text(['え', 'えほん', '../src/images/ehon.png'], e_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, e_point[count]);
            }
            else if (count === 2) {
                itimozi_end(e.offsetX, e.offsetY, 3);
            }
        }
        else if (complete[4] === false) {
            if (clear === true) {
                inittialize_text(['お', 'おわん', '../src/images/owan.png'], o_point[0]);
            }
            if (count === 0) {
                if (dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    if (drag_line.isDrag === true) {
                        count++;
                    }
                }
            }
            else if (count === 1) {
                ittkaku_play(e.offsetX, e.offsetY, o_point[count]);
            }
            else if (count === 2) {
                ittkaku_play(e.offsetX, e.offsetY, o_point[count]);
            }
            else if (count === 3) {
                itimozi_end(e.offsetX, e.offsetY, 4);
            }
        }
        else if (complete[4] === true) {
            text_change('終', 'おわり', '../src/images/owan.png');
        }
    });
}
/*
        if(count === 0) {
            console.log('i 1st');
            next_elps(i_point[0][0], i_point[0][1], i_point[0][2], i_point[0][3])
            start_elps.draw(context);
            end_elps.draw(context);

        } else if(count === 1) {
            console.log('i 2nd');
            next_elps(i_point[1][0], i_point[1][1], i_point[1][2], i_point[1][3]);
            start_elps.draw(context);
            end_elps.draw(context);
        }
        */
//window.requestAnimationFrame(main)
main();
