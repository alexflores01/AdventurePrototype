class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Basment");
    }

    onEnter() {

        let textIntro = this.add.text(300, 1000, 
`You just found yourself in a basement,
find a way to escape.`)
            .setFontSize(40)
            .setColor("#F4F00B")

        let table = this.add.image(200, 500, 'bench')
            .setScale(0.4)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Work Bench with materials for ladder."))
            .on('pointerdown', () => {
                this.gotoScene('demo3'); 
            })

        let box = this.add.image(1200, 500, 'toolBox')
            .setScale(0.02)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Red tool box."))
            .on('pointerdown', () => {
                this.gotoScene('demo2');
            })

        let vent = this.add.image(700, 100, 'vent')
            .setScale(0.3)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A vent I can escape to but its to high."))
            .on('pointerdown', () => {
                this.gotoScene('demo4');
            })

        let pipe = this.add.image(1375, 872, 'pipe')
            .setScale(0.6)
            .setAngle(90);
        
        let curveP = this.add.image(1399, 615, 'curvePipe')
            .setScale(0.6)
            .setAngle(-90);

        

        // let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("Metal, bent."))
        //     .on('pointerdown', () => {
        //         this.showMessage("No touching!");
        //         this.tweens.add({
        //             targets: clip,
        //             x: '+=' + this.s,
        //             repeat: 2,
        //             yoyo: true,
        //             ease: 'Sine.inOut',
        //             duration: 100
        //         });
        //     });

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })

        //let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
         //   .setFontSize(this.s * 2)
          //  .setInteractive()
          //  .on('pointerover', () => {
          //      if (this.hasItem("key")) {
          //          this.showMessage("You've got the key for this door.");
          //      } else {
          //          this.showMessage("It's locked. Can you find a key?");
          //      }
          //  })
          //  .on('pointerdown', () => {
          //      if (this.hasItem("key")) {
          //          this.loseItem("key");
          //          this.showMessage("*squeak*");
          //          door.setText("🚪 unlocked door");
          //          this.gotoScene('demo2');
          //      }
          // })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "Red tool box");
    }
    onEnter() {

        this.add.text(50, 1000, "<- Go back to Basement center.")
        .setFontSize(20)
        .setInteractive()
        .on('pointerdown', () => {
            this.gotoScene('demo1');
        });

        let box = this.add.image(650, 500, 'toolBox')
            .setScale(0.05)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Contains nails and hammer."))
            .on('pointerdown', () => {
                this.showMessage("You've got the nails and hammer to build the ladder.")
                this.gainItem("nails")
                this.gainItem("hammer")
            });


            
            

        // this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("You've got no other choice, really.");
        //     })
        //     .on('pointerdown', () => {
        //         this.gotoScene('demo1');
        //     });

        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Demo3 extends AdventureScene {
    constructor(){
        super("demo3", "Work bench")
    }

    onEnter(){

        this.add.text(50, 1000, "<- Go back to Basement center.")
        .setFontSize(20)
        .setInteractive()
        .on('pointerdown', () => {
            this.gotoScene('demo1');
        });

        let table = this.add.image(700, 500, 'bench')
            .setInteractive()
            .on('pointerover', () => {
                if(this.hasItem("nails") && this.hasItem("hammer")) {
                    this.showMessage("You've got the tools to build the ladder.");
                } else {
                    this.showMessage("You need nails and a hammer to build the ladder.");
                }
            })
            .on('pointerdown', () => {
                if(this.hasItem("nails" && "hammer")) {
                    this.loseItem("nails")
                    this.loseItem("hammer")
                    this.gainItem("ladder")
                }
            })
        if(!this.hasItem("screwdriver")){    
        let screwDriver = this.add.image(1200, 900, 'screwdriver')
            .setScale(0.8)
            .setAngle(50)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Screwdriver"))
            .on('pointerdown', () => {
                this.showMessage("You pick up the Screwdriver.")
                this.gainItem("screwdriver")
                this.tweens.add({
                    targets: screwDriver,
                    alpha: {from: 1, to: 0},
                    duration: 500,
                    onComplete: () => screwDriver.destroy()
                })
            });
        }


    }
}

class Demo4 extends AdventureScene {
    constructor(){
        super("demo4", "Vent")
    }

    onEnter(){
        this.add.text(50, 1000, "<- Go back to Basement center.")
        .setFontSize(20)
        .setInteractive()
        .on('pointerdown', () => {
            this.gotoScene('demo1');
        });

        let vent = this.add.image(650, 200, 'vent')
            .setScale(0.5)
            .setInteractive()
            .on('pointerover', () => {
                if(this.hasItem("ladder")) {
                    this.showMessage("Place the ladder")
                } else {
                    this.showMessage("It's to high to reach I need a ladder.")
                }
                if(!this.hasItem("screwdriver") && placedLadder){
                    this.showMessage("I need a screwdriver to open the vent.")
                }
            })
            .on('pointerdown', () => {
                this.add.image(620, 500, 'ladder');
                this.loseItem("ladder");
                if(this.hasItem("screwdriver")){
                    this.gotoScene('outro')
                }
            })


    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload(){
        this.load.image('bench', 'assets/workBench.png');
        this.load.image('toolBox', 'assets/redToolBox.png');
        this.load.image('vent', 'assets/vent.jpg');
        this.load.image('pipe', 'assets/singleMetalPipe.PNG');
        this.load.image('curvePipe', 'assets/singleCurvePipe.PNG');
        this.load.image('ladder', 'assets/Designer.png');
        this.load.image('screwdriver', 'assets/DesignerScrewDriver.png');
    }

    create() {
        this.add.text(50, 50, "The Basement").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "You have escaped the basement!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
        
        this.time.addEvent({
            delay:800,
            loop: true,
            callback: this.launchFirework,
            callbackScope: this
        });

    }
    launchFirework(){
        //random position across the screen
        const x = Phaser.Math.Between(0, 1920);
        const y = Phaser.Math.Between(0, 1080);

        //random color
        const colors = [0xff4444, 0xffaa00, 0x44ff44, 0x4444ff, 0xff44ff, 0x44ffff, 0xffffff];
        const color = Phaser.Utils.Array.GetRandom(colors);

        //shoout out 20 particles in all directions
        for(let i = 0; i < 60; i++){
            const angle = (i / 60) * Math.PI * 2; //spread evenly in a circle
            const speed = Phaser.Math.Between(300, 600);

            const dot = this.add.circle(x, y, 20, color);

            //each particle flies outward then fades
            this.tweens.add({
                targets: dot,
                x: x + Math.cos(angle) * speed,
                y: y + Math.sin(angle) * speed,
                alpha: 0,
                scaleX: 0.2,
                scaleY: 0.2,
                duration: Phaser.Math.Between(600, 1000),
                ease: 'Power2',
                onComplete: () => dot.destroy() //clean up when done
            });
        }
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Outro],
    title: "Adventure Game",
});

