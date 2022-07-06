class Produto {

    constructor() {
        this.id = 1
        this.arrayProdutos = []

    }

    capturaProduto() {


        let produto = {}
        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.valorProduto = document.getElementById('valor').value
        let lista = this.arrayProdutos.push(produto)
        this.id++
        this.cancelar()
        
   
        this.listaProduto()


        console.log(produto)
        console.log(lista)

        if(produto.nomeProduto == '' || produto.valorProduto == 0) {
            alert('Revise os dados e tente novamente!')
            
        } else {
            return produto

        }
        
    }


    listaProduto() {
        
        var tbody = document.getElementById('tbody')
        tbody.innerText = ''
    

        for (let i=0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell()

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto
            td_valor.innerText = this.arrayProdutos[i].valorProduto;

            let iconEdit = document.createElement('i')
            iconEdit.className = 'fa-solid fa-pen-to-square'

            let iconDel = document.createElement('i')
            iconDel.className = 'fa-solid fa-ban'
            iconDel.setAttribute("onclick",  "produto.deletar("+ this.arrayProdutos[i].id+")")
            

            td_acoes.appendChild(iconEdit) 
            td_acoes.appendChild(iconDel)

        }
    }

    cancelar() {
        produto.nomeProduto = document.getElementById('produto').value = ''
        produto.valorProduto = document.getElementById('valor').value = ''
    }

    deletar(id) {

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)

            }
        }
        alert('deletar o item de ID: ' + id)
    }

  

}
var produto = new Produto();
