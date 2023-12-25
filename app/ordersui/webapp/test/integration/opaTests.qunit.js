sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'miyasuta/ordersui/test/integration/FirstJourney',
		'miyasuta/ordersui/test/integration/pages/OrdersList',
		'miyasuta/ordersui/test/integration/pages/OrdersObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrdersList, OrdersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('miyasuta/ordersui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrdersList: OrdersList,
					onTheOrdersObjectPage: OrdersObjectPage
                }
            },
            opaJourney.run
        );
    }
);