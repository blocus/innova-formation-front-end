class Panier {
    constructor() {
        this.cart = []
        if (localStorage.getItem('cart') !== null){
            let tmp = localStorage.getItem('cart').split('||')
            tmp.map(e => {
                if (e === ''){
                    return ''
                }
                let item = e.split('|')
                let name = item[0]
                let qte = parseInt(item[1])
                let price = parseInt(item[2])
                this.cart.push(new Item(name, qte, price))
            })
        }
        this.panierShowElements()
    }

    addToPanier(name, price, idInput) {
        let qte = parseInt(document.getElementById(idInput).value)
        document.getElementById(idInput).value = 0
        if (qte > 0) {
            this.cart.push(new Item(name, qte, price))
        }
        this.updateStorage()
        this.panierShowElements()
    }

    updateStorage() {
        let storage = ''
        this.cart.map(e => {
            storage += e.name + '|'
            storage += e.qte + '|'
            storage += e.price + '||'

        })
        localStorage.setItem('cart', storage)
    }

    elementsInPanier() {
        let tmp = 0
        this.cart.map(e => {
            tmp += e.qte
        })
        return tmp
    }

    vider(){
        this.cart = []
        this.panierShowElements()
        localStorage.removeItem('cart')
    }

    panierShowElements() {
        document.getElementById("nbElelemntsInPanier").innerHTML = this.elementsInPanier()
        let total = 0
        let totalQte = 0
        let html = ''
        if (this.elementsInPanier() > 0) {
            html += "<table class='table'><tr><th>name</th><th>qte</th><th>price</th></tr>"
            this.cart.map((e) => {
                total +=  e.qte * e.price
                totalQte +=  e.qte
                html += '<tr><td>'
                html += e.name
                html += '</td><td>'
                html += e.qte
                html += '</td><td>'
                html += e.price
                html += '</td></tr>'
            })
            html += '<tr><td>TOTAL</td><td>'
            html += totalQte
            html += '</td><td>'
            html += total
            html += '</td></tr></table>'
            html += "<button class='btn-success' onclick='alert()'>Passer commande</button>"
            html += "<button class='btn-danger' onclick='panier.vider()'>Vider panier</button>"
        }else{
            html = 'Votre Panier est vide'
        }
        document.getElementById("showCart").innerHTML = html
    }
}
