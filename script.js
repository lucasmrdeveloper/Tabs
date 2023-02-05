(()=> {

    document.addEventListener('DOMContentLoaded', () => {
        tab()
    })

    const tab = () => {
        const btnHistoria = document.querySelector('.box-tab-tt-historia')
        const btnEstrutura = document.querySelector('.box-tab-tt-estrutura')
        const btnObjetivos = document.querySelector('.box-tab-tt-objetivos')

        const boxHistoria =  document.querySelector('.box-tab-historia')
        const boxEstrutura =  document.querySelector('.box-tab-estrutura')
        const boxObjetivos =  document.querySelector('.box-tab-objetivo')
    
        btnHistoria.addEventListener('click', abrirHistoria)
        btnEstrutura.addEventListener('click', abrirEstrutura)
        btnObjetivos.addEventListener('click', abrirObjetivos)

        btnHistoria.classList.add('tab-ativado')

        function abrirHistoria() {
            boxHistoria.classList.remove('escondido')
            boxEstrutura.classList.add('escondido')
            boxObjetivos.classList.add('escondido')

            btnHistoria.classList.add('tab-ativado')
            btnEstrutura.classList.remove('tab-ativado')
            btnObjetivos.classList.remove('tab-ativado')
        }

        function abrirEstrutura() {
            boxEstrutura.classList.remove('escondido')
            boxHistoria.classList.add('escondido')
            boxObjetivos.classList.add('escondido')

            btnEstrutura.classList.add('tab-ativado')
            btnHistoria.classList.remove('tab-ativado')
            btnObjetivos.classList.remove('tab-ativado')
        }

        function abrirObjetivos() {
            boxObjetivos.classList.remove('escondido')
            boxHistoria.classList.add('escondido')
            boxEstrutura.classList.add('escondido')

            btnObjetivos.classList.add('tab-ativado')
            btnHistoria.classList.remove('tab-ativado')
            btnEstrutura.classList.remove('tab-ativado')
        }
    }
})();





