class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "Basment");
    }

    preload(){
        this.load.image('bench', 'assets/workBench.png');
        this.load.image('toolBox', 'assets/redToolBox.png');
        this.load.image('vent', 'assets/vent.jpg');
        this.load.image('pipe', 'assets/singleMetalPipe.PNG');
        this.load.image('curvePipe', 'assets/singleCurvePipe.PNG');
        this.load.image('ladder', 'assets/Designer.png');
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
                this.scene.start('demo3'); 
            })

        let box = this.add.image(1200, 500, 'toolBox')
            .setScale(0.02)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Red tool box."))
            .on('pointerdown', () => {
                this.scene.start('demo2');
            })

        let vent = this.add.image(700, 100, 'vent')
            .setScale(0.3)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A vent I can escape to but its to high."))
            .on('pointerdown', () => {
                this.scene.start('demo4');
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
            this.scene.start('demo1');
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
            this.scene.start('demo1');
        });

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
            this.scene.start('demo1');
        });

    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        //temp
        this.scene.start('demo1');
        this.add.text(50, 50, "The Basement Leak").setFontSize(50);
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
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Demo3, Demo4, Outro],
    title: "Adventure Game",
});

