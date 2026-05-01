A simple adventure game by {who?} based on a simple adventure game engine by [Adam Smith](https://github.com/rndmcnlly).

Code requirements:
- **4+ scenes based on `AdventureScene`**: satisfied (name at least 4 of the classes).
Demo1: The main Basement center.
Demo2: The Red tool box in the corner.
Demo3: The work Bench area.
Demo4: The ven escape route.

- **2+ scenes *not* based on `AdventureScene`**: satisfied (name the classes).
Intro: Handles the title screen and asset preloading
Outro: Displays the final message upon escaping the basement.
- **2+ methods or other enhancement added to the adventure game engine to simplify my scenes**:
    - Enhancement 1: unsatisfied (name the method and explain the use of it).
    - Enhancement 2: unsatisfied (name the method and explain the use of it).

Experience requirements:
- **4+ locations in the game world**: satisfied (name at least 4 of the classes).
Demo1(Basement), Demo2(Tool box), Demo3(Work bench), Demo4(vent).
- **2+ interactive objects in most scenes**: satisfied (describe two examples)
In demo1, the user can interact with work bench, tool box, and vent.
In demo3, the user interacts with the Work bench to build the ladder and collect the screwdriver.
- **Many objects have `pointerover` messages**: satisfied (describe two examples)
The tool box displays "Contains nails and hammer."
The work bench displays "Work bench with materials for ladder."
- **Many objects have `pointerdown` effects**: satisfied (describe two examples)
Clicking the Screwdriver triggers a collect event, adding it to the inventory.
Clicking the work bench while having nails and hammer in your inventory triggers a collect event, adding a ladder to your inventory.
- **Some objects are themselves animated**: unsatisfied (describe two examples)
The Screwdriver uses a tween to change its alpha from 1 to 0 when collected.

Asset sources:
- (For each image/audio/video asset used, describe how it was created. What tool did you use to create it? Was it based on another work? If so, how did you change it, and where can we learn more about the original work for comparison? Use [Markdown link syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).)

[Pipes by CHENXIN](https://pngtree.com/freepng/vector-few-iron-pipe_499240.html)
[Red Tool Box](https://clipartpng.com/?2419,toolbox-png-clip-art)
[Work Bench](https://www.pngegg.com/en/png-xjbzv#google_vignette)
[Vent By Fluxtah](https://www.filterforge.com/filters/2139.html)

Images made by me where made in mircosoft designer, using Design from scratch:
Screwdriver
Ladder


Code sources:
- `adventure.js` and `index.html` were created for this project [Adam Smith](https://github.com/rndmcnlly) and edited by me.
- `game.js` was sketched by [Adam Smith](https://github.com/rndmcnlly) and rewritten by me.