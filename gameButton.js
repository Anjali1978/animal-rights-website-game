class Button {
    
    constructor(){

        this.startButton = createButton('START GAME');
        this.startButton.position(displayWidth/2 -100, displayHeight/2 + 400);
        this.startButton.style('background', 'lightgreen');
        this.startButton.style('font-size', '25px');

        this.heading = createElement("No Way Home")
        this.heading.position(displayWidth/2 - 100, displayHeight/2 - 400)
        this.heading.style('font-color', 'lightblue')
        this.heading.style('font-size', '30px')
        
    }

    display(){

        this.startButton.mousePressed(()=>{

            gameState = 1;
            bg_sound.loop();
            this.startButton.hide()
        })

    
    }

    
}