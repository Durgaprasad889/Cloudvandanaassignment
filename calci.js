document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            switch (value) {
                case 'AC':
                    display.value = '';
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                default:
                    display.value += value;
                    break;
            }
        });
    });
});
