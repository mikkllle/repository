window.onload = () => {

    /*
    * Create board
    */

    let createBoard = () => {

        let getBoard = document.querySelector('.board'),
            newElementTable = document.createElement('table'),
            newElementTbody = document.createElement('tbody');

        newElementTable.id = 'enemy';
        getBoard.appendChild(newElementTable);
        newElementTable.appendChild(newElementTbody);

        for(let i = 0; i < 10; i++) {
            let newElementTr = document.createElement('tr');
            
            newElementTbody.appendChild(newElementTr);

            for(let k = 0; k < 10; k++) {
                let newElementTd = document.createElement('td');
            
                newElementTr.appendChild(newElementTd);
            }
        }
        
        for(let i = 0; i < 100; i++) {
            let getTd = document.getElementsByTagName('td');

            getTd[i].id = i;
            getTd[i].classList.add('cell');
        }
    }
    createBoard();
    

    /*
    * Chapter 1
    */

    const record  = document.getElementById('record');
    const shot  = document.getElementById('shot');
    const hit  = document.getElementById('hit');
    const dead  = document.getElementById('dead');
    const enemy  = document.getElementById('enemy');
    const again  = document.getElementById('again');

    const play = {
        record: 0,
        shot: 0,
        hit: 0,
        dead: 0,
        
        set updateData(data) {
            this[data] += 1;
            play.render();
        },

        render() {
            record.textContent = this.record;
            shot.textContent = this.shot;
            hit.textContent = this.hit;
            dead.textContent = this.dead;
        }
    };

    const show = {
        hit() {

        },
        miss(elem) {
            this.changeClass(elem, 'miss');
        },
        dead() {

        },
        changeClass(elem, value) {
            elem.classList.add(value);
        }
    }


    const fire = (e) => {
        const target = e.target;

        if(target.classList.contains('cell') && !target.classList.contains('miss')) {
            show.miss(target);
        } else if(target.classList.contains('miss')) {
            return false;
        }

        play.updateData = 'shot';
    };

    const init = () => {
        enemy.addEventListener('click', fire);
    };

    init();
}