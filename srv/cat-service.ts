import cds from '@sap/cds';

module.exports = class CatalogService extends cds.ApplicationService { init() {
    const { Book, Books } = require('#cds-models/CatalogService')

    this.after('READ', Books, async (results) => {
        console.log('read handler called')
        const books = await SELECT(Books, b => {b.ID})
        console.log(books)
        
    })

    this.before('CREATE', Book, req => {

    })

    return super.init()
}}