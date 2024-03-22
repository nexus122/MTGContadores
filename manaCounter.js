// manaCounter.js
class ManaCounter {
    constructor(id, icon) {
        this.id = id;
        this.icon = icon;
        this.number = 0;
        this.manaCounter = `
            <div class="card contador border p-2" id="${this.id}">
                <span class="w-full flex justify-center">
                    <span class="icon"><i class="ms ${this.icon}"></i></span>
                    <input type="number" class="text-5xl w-full" type="text" value="0">
                </span>
                <span class="w-full flex justify-center">
                    <button class="incrementar bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+1</button>
                    <button class="decrementar bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">-1</button>
                    <button class="multiplicar bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">x2</button>
                    <button class=" reset bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">0</button>
                </span>           
            </div>
        `;
        this.init();
    }    

    init() {
        const general = document.querySelector('.general');
        general.appendChild(document.createRange().createContextualFragment(this.manaCounter));

        const contador = document.querySelector(`#${this.id} input`);
        const incrementar = document.querySelector(`#${this.id} .incrementar`);
        const decrementar = document.querySelector(`#${this.id} .decrementar`);
        const multiplicar = document.querySelector(`#${this.id} .multiplicar`);
        const reset = document.querySelector(`#${this.id} .reset`);
        
        contador.addEventListener('change', () => {
            this.number = parseInt(contador.value);
        });
        reset.addEventListener('click', () => {
            this.number = 0;
            contador.value = this.number;
        });
        multiplicar.addEventListener('click', () => {
            this.number = this.number * 2;
            contador.value = this.number;
        });
        incrementar.addEventListener('click', () => {
            this.number++;
            contador.value = this.number;
        });
        decrementar.addEventListener('click', () => {
            this.number--;
            contador.value = this.number;
        });
    }
}

new ManaCounter('blue', 'ms-u');
new ManaCounter('black', 'ms-b');
new ManaCounter('green', 'ms-g');
new ManaCounter('colorless', 'ms-c');

function resetGeneral(){
    const general = document.querySelector('.general');
    general.querySelectorAll('input').forEach(input => input.value = 0);
}

function multiplyGeneral(){
    const general = document.querySelector('.general');
    general.querySelectorAll('input').forEach(input => input.value = input.value * 2);
}