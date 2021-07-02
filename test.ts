class StartElips {
    x: number;
    y: number;
    dia: number;
    context:CanvasRenderingContext2D;
    constructor(canvas:HTMLCanvasElement) {
        this.context = canvas.getContext('2d');
        console.log(this.context)
        this.dia = 40;
    }
    
    public draw(dr_x:number, dr_y:number):void {
        console.log('In the Obj:Elps Mtd:draw');
        this.context.arc(this.x, this.y, this.dia, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        this.context.strokeStyle = "red";
        this.context.lineWidth = 3;
        this.context.stroke();
    }
}

class DragLine {
    lastPosition:any;
    is_drag:boolean;
    canvas:HTMLCanvasElement;
    context:CanvasRenderingContext2D;
    constructor(page_canvas:HTMLCanvasElement) {
        this.lastPosition = {x:null, y:null};
        this.is_drag = false;
        this.canvas = page_canvas;   
        this.context = this.canvas.getContext('2d');
    }

    public draw(m_x:number, m_y:number):void {
        if(this.is_drag === false) {
            return ;
        }
        
        this.context.lineCap = 'round';
        this.context.lineJoin = 'round';
        this.context.lineWidth = 5;
        this.context.strokeStyle = 'blue';

        if(this.lastPosition.x === null || this.lastPosition.y === null) {
            this.context.moveTo(m_x, m_y);
        } else {
            this.context.moveTo(this.lastPosition.x, this.lastPosition.y);
        }
        this.context.lineTo(m_x, m_y);
        this.context.stroke();

        this.lastPosition.x = m_x;
        this.lastPosition.y = m_y;
    }

    public drg_strat(event):void {
        this.context.beginPath();
        this.is_drag = true;

    }

    public drg_end(event):void {
        this.context.closePath();
        this.is_drag = false;
        this.lastPosition.x = null;
        this.lastPosition.y = null;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const canvas = <HTMLCanvasElement>document.getElementById('draw_area');
    const elps = new StartElips(canvas);
    elps.draw(160, 190);
    const mouse_drag = new DragLine(canvas);
    canvas.addEventListener('mousedown', mouse_drag.drg_strat);
    canvas.addEventListener('mouseup', mouse_drag.drg_end);
    canvas.addEventListener('mouseout', mouse_drag.drg_end);
    canvas.addEventListener('mousemove', (event) => {
            mouse_drag.draw(event.offsetX, event.offsetY);
    });
}, false);
