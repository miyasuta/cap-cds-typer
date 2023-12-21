import cds from '@sap/cds';

module.exports = class CatalogService extends cds.ApplicationService { async init() {
    const { Book, Books, Order } = await import('#cds-models/CatalogService')

    this.after('READ', Books, async (results) => {       
    })

    this.before('CREATE', Order, async(req) => {
        console.log('Create Order called')
        //calculate amount
        const { price } = await SELECT .one (Books, b => {b.price}) .where `ID = ${req.data.book_ID}`
        console.log('price: ', price)
        req.data.amount = req.data.quantity * price
    })

    return super.init()
}}