import "./styles/style";
import "./images/baby";
import "./images/ehon";
import "./images/itigo";
import "./images/owan";
import "./images/udon";
import "./images/yokudekistp";
import p5 from 'p5';


//grobal propaty(仮置き)
let complete: Array<boolean> = [false, false, false, false, false,]; //文字の終了状態を示す[あ、い、う、え、お]
let count: number = 0;

//円オブジェクト
class Elps {
    dia: number;
    x: number;
    y: number;
    context: CanvasRenderingContext2D;
    constructor(x: number, y: number, elp_dia: number, canvas: HTMLCanvasElement) {
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

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    delete() {
        //this.context.save()
        this.context.clearRect(this.x - this.dia / 2 - 12, this.y - this.dia / 2 - 12, this.dia + 25, this.dia + 25);
    }
}

class Game extends p5{ //p5.jsのline(), clear()を使用した、main()で使用する追加のメソッド定義
    draw_line(weight:number, color:number):void {
        this.fill(color);
        this.strokeWeight(weight);
        if(this.mouseIsPressed) {
            this.line(this.mouseX, this.mouseY, this.pmouseX, this.pmouseY);
        }
    }

    clear_line() {
        this.clear();
        this.line(this.mouseX, this.mouseY, this.pmouseX, this.pmouseY);
    }
}
/*
//線のオブジェクト
class DragLines {
    context:CanvasRenderingContext2D;
    isDrag:boolean;
    constructor(canvas:HTMLCanvasElement) {
        this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
        this.isDrag = false;
    }
    
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

}*/
class Text {
    draw_txt_id: string;
    side_txt_id: string;
    side_img_id: string;
    constructor(dt_id: string, st_id: string, simg_id: string) {
        this.draw_txt_id = dt_id;
        this.side_txt_id = st_id;
        this.side_img_id = simg_id;
    }

    text_init(main_text: string, side_text: string, img_path: string): void {
        const draw_txt_elm = <HTMLElement>document.getElementById(this.draw_txt_id);
        const side_txt_elm = <HTMLElement>document.getElementById(this.side_txt_id)
        const side_img = <HTMLElement>document.getElementById(this.side_img_id);
        draw_txt_elm.textContent = main_text;
        side_txt_elm.textContent = side_text;
        side_img.setAttribute('src', img_path);
    }
}

class ElpAnimation {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    dia: number = 20;
    st_elps: any;
    ed_elps: any;
    constructor(canvas_in: HTMLCanvasElement, init_point_data: Array<Array<number>>) {
        this.canvas = <HTMLCanvasElement>canvas_in;
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
        this.st_elps = new Elps(init_point_data[0][0], init_point_data[0][1], this.dia, this.canvas);
        this.ed_elps = new Elps(init_point_data[0][2], init_point_data[0][3], this.dia, this.canvas);
        this.st_elps.draw()
        this.ed_elps.draw()
    }

    init(point_data: Array<Array<number>>) {
        this.st_elps.move(point_data[0][0], point_data[0][1]);
        this.ed_elps.move(point_data[0][2], point_data[0][3]);
    }

    play(point_data: Array<Array<number>>/*円の座標配列(column len = 4)*/, mouse_point: Array<number>/*マウス座標配列*/, comp_index: number, end_count: number): boolean {
        //let last_kaku:boolean = false;
        console.log(this.st_elps.x);
        this.st_elps.draw();
        this.ed_elps.draw();
        for (let i: number = 0; i < point_data.length - 1; i++) {
            console.log(count);
            if (dist(this.ed_elps.x, this.ed_elps.y, mouse_point[0], mouse_point[1]) <= this.dia / 2) {
                this.st_elps.delete();
                this.ed_elps.delete();
                this.st_elps.move(point_data[i + 1][0], point_data[i + 1][1]);
                this.ed_elps.move(point_data[i + 1][2], point_data[i + 1][3]);
                count++;
                this.st_elps.draw();
                this.ed_elps.draw();
            }
        }
        if (count === end_count) { //最終画の判定
            console.log('clear canvas');
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); //clear canvas
            complete.splice(comp_index, 1, true);
            count = 0;
            return true;
        } else {
            complete.splice(comp_index, 1, false);
            return false;
        }
    }
}


//other functions

function dist(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


//main function
function main(p:Game) {
    //各円の描画座標を格納した２次元配列:Array[画数][始点x, 始点y, 終点x, 終点y]
    const a_point: Array<Array<number>> = [[160, 190, 315, 183], [215, 174, 217, 305], [271, 200, 240, 330]];
    const i_point: Array<Array<number>> = [[170, 173, 230, 260], [270, 189, 307, 283]];
    const u_point: Array<Array<number>> = [[199, 154, 285, 170], [166, 240, 202, 310]];
    const e_point: Array<Array<number>> = [[189, 158, 276, 160], [169, 205, 329, 310]];
    const o_point: Array<Array<number>> = [[162, 186, 265, 181], [210, 142, 247, 272], [281, 160, 334, 220]];

    //dom elements id
    const main_text_id: string = 'draw_text';
    const side_text_id: string = 'side_text';
    const side_img_id: string = 'side_img';
    const text_obj = new Text(main_text_id, side_text_id, side_img_id);
    const elp_canvas = <HTMLCanvasElement>document.getElementById('draw_area');
    //init animation class
    const animation = new ElpAnimation(elp_canvas, a_point);
    //１文字分の終了判定
    let one_text_comp: boolean = false;
    
    p.setup = ()=> {
        p.createCanvas(elp_canvas.width, elp_canvas.height);
    }
    p.draw = ()=> {
        p.draw_line(5, 0);
        if(p.mouseIsPressed) {
            if(complete[0] === false) {//あ
                one_text_comp= animation.play(a_point, [p.mouseX, p.mouseY], 0, 4);
                if(one_text_comp===true) {
                    p.clear_line();
                    one_text_comp = false;
                }
            } else if(complete[1] === false) {//い
                text_obj.text_init('い', 'いちご', 'images/itigo.png');
                if(one_text_comp===false) {
                    animation.init(i_point);
                }
                one_text_comp= animation.play(i_point, [p.mouseX, p.mouseY], 1, 2);
                if(one_text_comp===true) {
                    p.clear_line();
                    one_text_comp = false;
                }
            } else if(complete[2] === false) {//う
                text_obj.text_init('う', 'うどん', 'images/udon.png');
                if(one_text_comp===false) {
                    animation.init(u_point);
                }
                one_text_comp= animation.play(u_point, [p.mouseX, p.mouseY], 2, 2);
                if(one_text_comp===true) {
                    p.clear_line();
                    one_text_comp = false;
                }
            } else if(complete[3] === false) {//え
                text_obj.text_init('え', 'えほん', 'images/ehon.png');
                if(one_text_comp===false) {
                    animation.init(e_point);
                }
                one_text_comp= animation.play(e_point, [p.mouseX, p.mouseY], 3, 2);
                if(one_text_comp===true) {
                    p.clear_line();
                    one_text_comp = false;
                }
            } else if(complete[4] === false) {//お
                text_obj.text_init('お', 'おわん', 'images/owan.png');
                if(one_text_comp===false) {
                    animation.init(o_point);
                }
                one_text_comp= animation.play(o_point, [p.mouseX, p.mouseY], 4, 4);
                if(one_text_comp===true) {
                    p.clear_line();
                    one_text_comp = false;
                }
            } else if(complete[4] === true) {
                // end animation here 
                text_obj.text_init('終', 'おしまい', 'images/yokudekistp.png');
            }
        }
    }
}

new Game(main);









