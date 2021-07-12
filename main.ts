import "./styles/style";
import "./images/baby"; 
import "./images/ehon";
import "./images/itigo";
import "./images/owan";
import "./images/udon";

//円オブジェクト
class Elps {

    dia:number;
    x:number;
    y:number;
    context: CanvasRenderingContext2D;
    constructor(x:number, y:number, elp_dia:number, canvas:HTMLCanvasElement) {
        this.dia = elp_dia;
        this.x = x;
        this.y = y;
        this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
    }

    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.dia, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        this.context.strokeStyle = 'rgba(255, 0, 0, 1)';
        this.context.lineWidth = 3;
        this.context.closePath();
        this.context.stroke();
    }

    move(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    delete() {
        //this.context.save()
        this.context.clearRect(this.x - this.dia / 2 - 12, this.y - this.dia / 2 - 12, this.dia + 25, this.dia + 25);
    }
}

//線のオブジェクト
class DragLines {
    context:CanvasRenderingContext2D;
    isDrag:boolean;
    constructor(canvas:HTMLCanvasElement) {
        this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
        this.isDrag = false;
    }
    /*
    judge_draw() :boolean {
    }
    */
    draw(sx:number, sy:number, ex:number, ey:number):void {
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
    }

}

class Text {
    draw_txt_id:string;
    side_txt_id:string;
    side_img_id:string;
    constructor(dt_id:string, st_id:string, simg_id:string) {
        this.draw_txt_id = dt_id;
        this.side_txt_id = st_id;
        this.side_img_id = simg_id;
    }

    text_init(main_text:string, side_text:string, img_path:string): void {
        const draw_txt_elm = <HTMLElement>document.getElementById(this.draw_txt_id);
        const side_txt_elm = <HTMLElement>document.getElementById(this.side_txt_id)
        const side_img = <HTMLElement>document.getElementById(this.side_img_id);
        draw_txt_elm.textContent = main_text;
        side_txt_elm.textContent = side_text;
        side_img.setAttribute('src', img_path);
    }
}

class GamePlay { 
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    dia:number = 20;
    constructor(canvas_in:HTMLCanvasElement) {
        this.canvas = <HTMLCanvasElement>canvas_in;
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    }
    play(point_data:Array<Array<number>>/*円の座標配列(len = 4)*/, mouse_point:Array<number>/*マウス座標配列*/, ):boolean {
        let st_elps = new Elps(point_data[0][0], point_data[0][1], this.dia, this.canvas);
        let ed_elps = new Elps(point_data[0][2], point_data[0][3], this.dia, this.canvas);

        for(let i: number; i < point_data.length-1; i++) {
            if(dist(ed_elps.x, ed_elps.y, mouse_point[0], mouse_point[1]) <= this.dia / 2) {
                st_elps.delete();
                ed_elps.delete();
                st_elps.move(point_data[i+1][0], point_data[i+1][1]);
                ed_elps.move(point_data[i+1][2], point_data[i+1][3]);
            }
        }
        if(dist(ed_elps.x, ed_elps.y, mouse_point[0], mouse_point[1]) <= this.dia / 2) { //最終画の判定
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); //canvasクリア
            return true;
        }
    }
}


//other functions
function dist(x1:number, y1:number, x2:number, y2:number):number{
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function draw_line(canvas:HTMLCanvasElement):void {
    const drag_line = new DragLines(canvas);
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
        const downX :number= e.offsetX;
        const downY :number= e.offsetY;
        let prex :number= downX;
        let prey :number= downY;
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

//main function
function main() :void {
    const a_point:Array<Array<number>> = [[160, 190, 300, 190], [210, 180, 210, 300], [250, 200, 230, 330]];
    const i_point:Array<Array<number>> = [[156, 179, 224, 265], [261, 189, 297, 283]];
    const u_point:Array<Array<number>> = [[199, 137, 278, 150], [166, 201, 202, 288]];
    const e_point:Array<Array<number>> = [[189, 142, 269, 147], [169, 195, 319, 290]];
    const o_point:Array<Array<number>> = [[162, 176, 256, 171], [207, 132, 247, 252], [281, 150, 320, 191]];
    let complete:Array<boolean> = [false, false, false, false, false,]; //文字の終了状態を示す[あ、い、う、え、お]
    const main_text_id:string = 'draw_text';
    const side_text_id:string = 'side_text';
    const side_img_id:string = 'side_img';
    const text_obj = new Text(main_text_id, side_text_id, side_img_id);
    const canvas = <HTMLCanvasElement>document.getElementById('draw_area');
    //const context = <CanvasRenderingContext2D> canvas.getContext('2d');
    draw_line(canvas);
    const game = new GamePlay(canvas);
    let judge:boolean = false;
    canvas.addEventListener('mousemove', e => {
        if(complete[0] === false) {//あ
            judge = game.play(a_point, [e.offsetX, e.offsetY]);
            complete.splice(0, 1, judge);
        } else if(complete[1] === false) {//い
            text_obj.text_init('い', 'いちご', 'images./itigo.png');
            judge = game.play(i_point, [e.offsetX, e.offsetY]);
            complete.splice(1, 1, judge);
        } else if(complete[2] === false) {//う
            text_obj.text_init('う', 'うどん', 'images./udon.png');
            judge = game.play(u_point, [e.offsetX, e.offsetY]);
            complete.splice(1, 1, judge);
        } else if(complete[3] === false) {//え
            text_obj.text_init('え', 'えほん', 'images./ehon.png');
            judge = game.play(e_point, [e.offsetX, e.offsetY]);
            complete.splice(1, 1, judge);
        } else if(complete[4] === false) {//お
            text_obj.text_init('お', 'おわん', 'images./owan.png')
            judge = game.play(o_point, [e.offsetX, e.offsetY]);
            complete.splice(1, 1, judge);
        } else if(complete[4] === true) {
            /* end animation here */
        }
    })
}

main();


