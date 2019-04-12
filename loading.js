class Loading {
    constructor(option = {}) {
        this.options = {
            type: option.type || 0,
            size: option.size || 1,
            shade: option.shade || true,
            top: option.top || '50%', //'50%' or '50px'
            left: option.left || '50%',
        }
        this.loaders = [
            '<div class="loader loading_item" data-idx="0"><div class="face"><div class="circle"></div></div><div class="face"><div class="circle"></div></div></div>',
            '<div class="loading_item" data-idx="1"><div class="container animation-1"><div class="shape shape1"></div><div class="shape shape2"></div><div class="shape shape3"></div><div class="shape shape4"></div></div></div>',
            '<div class="loading_item" data-idx="2"><div class="container animation-2"><div class="shape shape1"></div><div class="shape shape2"></div><div class="shape shape3"></div><div class="shape shape4"></div></div></div>',
            '<div class="loading_item" data-idx="3"><div class="container animation-3"><div class="shape shape1"></div><div class="shape shape2"></div><div class="shape shape3"></div><div class="shape shape4"></div></div></div>',
            '<div class="loading_item" data-idx="4"><div class="container animation-4"><div class="shape shape1"></div><div class="shape shape2"></div><div class="shape shape3"></div><div class="shape shape4"></div></div></div>',
            '<div class="loading_item" data-idx="5"><div class="container animation-5"><div class="shape shape1"></div><div class="shape shape2"></div><div class="shape shape3"></div><div class="shape shape4"></div></div></div>',
            '<div class="loading_item" data-idx="6"><div class="container animation-6"><div class="shape shape1"></div><div class="shape shape2"></div><div class="shape shape3"></div><div class="shape shape4"></div></div></div>',
        ]
    }

    hasClass(e, clsName) {
        var clsList = e.className.split(' ');
        if (clsList.indexOf(clsName) != -1) {
            return true;
        }
        return false;
    }

    show() {
        document.querySelector('.loading_item[data-idx="' + this.options.type + '"]').classList.remove('off');
        document.querySelector('.loading_shade').classList.remove('off');
    }

    hide() {
        document.querySelector('.loading_item[data-idx="' + this.options.type + '"]').classList.add('off');
        const LOADER = document.querySelectorAll('.loading_item'),
            CLOSEFLAG = true;
        for (let i = 0; i < LOADER.length; i++) {
            if (!hasClass(LOADER[i].classList, 'off')) {
                CLOSEFLAG = false;
            }
        }

        if (CLOSEFLAG) {
            document.querySelector('.loading_shade').classList.add('off')
        }

    }

    createShade() {
        const SHADE = '<div class="loading_shade"></div>';
        document.querySelector('body').innerHTML += SHADE;
    }

    init() {
        const LOADERELE = this.loaders[Number(this.options.type)];
        document.querySelector('body').innerHTML += LOADERELE;

        if (this.options.shade && !document.querySelector('.loading_shade')) {
            this.createShade();
        }

        const size = this.options.size,
            ele = document.querySelector('.loading_item[data-idx="' + this.options.type + '"]');
        ele.style.width = this.options.size * 10 + 'rem';
        ele.style.height = this.options.size * 10 + 'rem';
        ele.style.top = this.options.top;
        ele.style.left = this.options.left;
    }

}