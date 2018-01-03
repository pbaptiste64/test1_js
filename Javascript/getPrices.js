const API_ROOT = "https://bitpay.com/api/rates"
const td = document.querySelectorAll('td')
const refresh = document.querySelector('.refresh')
const newPrice = document.querySelector('.newPrice')

class Bitcoin {
    constructor(td){
        this.td = td
        this.getPrices(this.td)
    }
    setPrices(td, prices){
        for(let i = 0; i < td.length; i++){
            td[i].textContent = prices[i]
        }
    }
    getPrices(td){
        $.ajax({
            type: 'GET',
            url: API_ROOT,
            dataType: 'json',
            success: (data)=> {
                this.prices = data
                for(let i = 0; i < td.length; i++) {
                    this.prices[i] = data[i].rate.toFixed(2)              
                }                
                this.setPrices(this.td, this.prices)                
            },
            error: (error)=> {
            console.log(error)
            }
        })
    }
}

refresh.addEventListener('click', function(e){
    money.getPrices(td)
    console.log("Prices Refreshed")
})

let money = new Bitcoin(td)