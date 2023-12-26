import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ObjectPage/ExtensionAPI';
import Dialog from 'sap/m/Dialog';
import Button from 'sap/m/Button';
import Text from 'sap/m/Text';
import { ButtonType, DialogType } from 'sap/m/library';

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
				return createDialog("Do you wan to delete this object?")
			}
		}
	}
}

async function createDialog(sText: string): Promise<void> {
	return new Promise<void>((resolve, reject)=> {
		const oApproveDialog = new Dialog({
			type: DialogType.Message,
			title: "Confirm",
			content: new Text({text: sText}),
			beginButton: new Button({
				type: ButtonType.Emphasized,
				text: "Continue",
				press: () => {
					oApproveDialog.close()
					resolve()
				}
			}),
			endButton: new Button({
				text: "Cancel",
				press: () => {
					oApproveDialog.close()
					reject()
				}
			}),
			escapeHandler: (pCloseDialog) => {
				pCloseDialog.resolve()
				reject()
			}
		})
		oApproveDialog.open()
	})
}