//円オブジェクト
class Elps {
    constructor(x, y, dia) {
        this.dia = dia;
        this.x = x;
        this.y = y;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.dia, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        context.strokeStyle = 'rgba(255, 0, 0, 1)';
        context.lineWidth = 3;
        context.closePath();
        context.stroke();
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    delete() {
        //this.context.save()
        context.clearRect(this.x - this.dia / 2 - 12, this.y - this.dia / 2 - 12, this.dia + 25, this.dia + 25);
    }
}

//ユーザーが描く線のオブジェクト
class DragLines {
    constructor(context) {
        this.context = context
        this.isDrag = false;
    }

    draw(sx, sy, ex, ey) {
        //his.context.save();
        this.context.lineCap = 'round';
        this.context.lineWidth = "3";
        this.context.strokeStyle = "blue";

        this.context.beginPath();
        this.context.moveTo(sx, sy);
        this.context.lineTo(ex, ey);
        this.context.stroke();

        //this.context.restore();
    }

}


//grobal propatyes
const dia = 20;
const start_elps = new Elps(160, 190, dia);
const end_elps = new Elps(300, 190, dia);
const canvas = document.getElementById('draw_area');
const context = canvas.getContext('2d');
const drag_line = new DragLines(context);
const draw_text = document.getElementById('draw_text');
const side_text = document.getElementById('side_text');
const side_img  = document.getElementById('SideImg');
let complete = [false, false, false, false, false,]; //文字の終了状態を示す[あ、い、う、え、お]

//other functions
function dist(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function draw_line() {
    canvas.addEventListener('mouseout', e => {
        drag_line.isDrag = false;
    });

    canvas.addEventListener('mouseup', e => {
        //console.log('mouse released')
        drag_line.isDrag = false;
    });

    canvas.addEventListener('mousedown', e => {
        drag_line.isDrag = true;
    })

    canvas.addEventListener('mousemove', e => {
        const downX = e.offsetX;
        const downY = e.offsetY;

        let prex = downX;
        let prey = downY;
        //drag_line.isDrag = true;
        if (drag_line.isDrag === true) {
            drag_line.draw(prex, prey, downX, downY);
            prex = downX;
            prey = downY;

        } else {
            return;
        }
    });
}

function next_elps(sx, sy, ex, ey) {
    console.log('hit!!');
    start_elps.delete();
    end_elps.delete();
    start_elps.move(sx, sy);
    end_elps.move(ex, ey);
    //start_elps.draw(context);
    //end_elps.draw(context);
}

function next(elp_pos_data, next_text, next_side_text) {
    let count = 0;
    canvas.addEventListener('mousemove', e => {
        //console.log('in the event');
        //console.log(drag_line.isDrag);
        console.log(count);
        if(drag_line.isDrag) {
            for(let i = 0; i < elp_pos_data.length; i++) {
                console.log('for : ' + i);
                if(dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2 && count == i-1) {
                    next_elps(elp_pos_data[i][0], elp_pos_data[i][1], elp_pos_data[i][2], elp_pos_data[i][3]);
                    start_elps.draw(context);
                    end_elps.draw(context);
                    count ++;
                }
            }
            if(count == elp_pos_data.length-1) {
                if(dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    complete[0] = true;
                    count++;
                }
            }
        }
        if(count === elp_pos_data.length) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            draw_text.textContent = next_text;
            side_text.textContent = next_side_text;
        }
    });
}

const a_point = [[160, 190, 300, 190], [210, 180, 210, 300], [250, 200, 210, 340]];
const i_point = [[156, 179, 224, 265], [261, 189, 297, 283]];

function loop() {
    //window.requestAnimationFrame(loop)
    window.requestAnimationFrame(draw_line);
    let count = 0;
    
    canvas.addEventListener('mousemove', e => {
        //console.log('in the event');
        //console.log(drag_line.isDrag);
        console.log(count);
        console.log('mouseX, Y = ' + e.offsetX + ', ' + e.offsetY);
        if(drag_line.isDrag) {
            for(let i = 0; i < a_point.length; i++) {
                console.log('for : ' + i);
                if(dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2 && count == i-1) {
                    next_elps(a_point[i][0], a_point[i][1], a_point[i][2], a_point[i][3]);
                    start_elps.draw(context);
                    end_elps.draw(context);
                    count ++;
                }
            }
            if(count == a_point.length-1) {
                if(dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < dia / 2) {
                    complete[0] = true;
                    count++;
                }
            }
        }
        if(count === a_point.length) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            draw_text.textContent = 'い';
            side_text.textContent = 'いちご';
            side_img.setAttribute('src', 'images/itigo.png');
        }
    });
    next(i_point, 'う', 'うどん');
    console.log('ended');
    //あ
    
    //い
    //う
    //え
    //お
   
    
}
loop();
//window.addEventListener('load', loop, false);