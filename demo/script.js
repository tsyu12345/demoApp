window.addEventListener('load', () => {
    const canvas = document.querySelector('#draw_area');
    const context = canvas.getContext('2d');
    const lastPositsion = {x:null, y:null};
    let is_drag = false;
    
    function StarteElps(ex, ey, dia) { //なぞり初めの円を描画
        context.arc(ex, ey, dia, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        context.strokeStyle = "red";
        context.lineWidth = 3;
        context.stroke();
        if(dist(ex, ey, lastPositsion.x, lastPositsion.y) < dia) {
            is_drag = true;
        } else {
            is_drag = false;
        }
    }

    function dist(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
    }

    function draw(x, y) {
        elps = StarteElps(160, 190, 40);
        if(is_drag==false) {
            return ;
        } 

        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = 5;
        context.strokeStyle = 'blue';

        if(lastPositsion.x === null || lastPositsion.y === null) {
            context.moveTo(x,  y);
        } else {
            context.moveTo(lastPositsion.x, lastPositsion.y);
        }

        context.lineTo(x, y);
        context.stroke();

        lastPositsion.x = x;
        lastPositsion.y = y;
    }

    function delete_lines() {
        context.clearRect(0, 0, canvas.width, canvas.heigth);
    }

    function dragStart(event) {
        context.beginPath();
        is_drag = true;
    }

    function dragEnd(event) {
        context.closePath();
        is_drag = false;
        lastPositsion.x = null;
        lastPositsion.y = null;
    }



    function change_img(path) {　//１文字終わった後にお題の画像を切り替える
        document.getElementById("SideImg").src = path;
    }
    
    function change_text(text, id) {　
        let display_text = document.getElementById(id);
        display_text.innerHTML(text);
    };
    
    function initEventHandler() {
        canvas.addEventListener('mousedown', dragStart);
        canvas.addEventListener('mouseup', dragEnd);
        canvas.addEventListener('mouseout', dragEnd);
        canvas.addEventListener('mousemove', (event) => {
            draw(event.layerX, event.layerY);
        });
    };
    initEventHandler();
});
  
