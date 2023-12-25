import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ObjectPage/ExtensionAPI';
import Dialog from 'sap/m/Dialog';
import DialogType from 'sap/fe/test/api/DialogType';
import Button from 'sap/m/Button';
import ButtonType from 'sap/m/ButtonType';

/**
 * @namespace miyasuta.ordersui.ext.controller.ObjectPageExt
 * @controller
 */
export default class ObjectPageExt extends ControllerExtension<ExtensionAPI> {
	static overrides = {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf miyasuta.ordersui.ext.controller.ObjectPageExt
		 */
		onInit(this: ObjectPageExt) {
			// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			const model = this.base.getExtensionAPI().getModel();
		},

		editFlow: {
			onBeforeDelete(mParameters: object) {
				
			}
		}
	}

	private async createDialog(message: string): Promise <void> {
		return new Promise((resoleve, reject)=> {
			// const approveDialog = new Dialog({
			// 	type: DialogType.Message,
			// 	title: "Confirm",
			// 	content: new Text({text: message}),
			// 	beginButton: new Button({
			// 		type: ButtonType.
			// 	})
			// })
		})
	}
}