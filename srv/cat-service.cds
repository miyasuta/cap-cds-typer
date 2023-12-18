using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly entity Books as projection on my.Books;
    @odata.draft.enabled
    entity Orders as projection on my.Orders;
}

annotate CatalogService.Orders with @(
    UI: {
        LineItem  : [
            {
                $Type : 'UI.DataField',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Value : book_ID,
            },
            {
                $Type : 'UI.DataField',
                Value : quantity,
            },
            {
                $Type : 'UI.DataField',
                Value : amount,
            }
        ],
        HeaderInfo  : {
            $Type : 'UI.HeaderInfoType',
            TypeName : 'Order',
            TypeNamePlural : 'Orders',
        },
        Identification  : [
            {
                $Type : 'UI.DataField',
                Value : book_ID,
            },
            {
                $Type : 'UI.DataField',
                Value : quantity,
            },
            {
                $Type : 'UI.DataField',
                Value : amount,
            }            
        ],
        Facets  : [
            {
                $Type : 'UI.ReferenceFacet',
                Target : '@UI.Identification',
            },
        ],
    }

)
