import DefaultPage from './default';

class Layout extends DefaultPage {
	constructor() {
		super('layout')
	}

	get locators() {
		const container = '.application';
		const sideBar = container + ' [class^="sidebar"]';
		const dropDown = sideBar + ' [class^="settings"]';
		const dropDownButton = dropDown + ' [class^="button"]';
		const dropDownList = dropDown + ' [class*="list_hover"]';
		const layoutSwitch = dropDownList + ' :nth-child(3)';
		const paneCheckbox = layoutSwitch + ' .b-checkbox';
		
		return {
			container,
			sideBar,
			dropDown,
			dropDownButton,
			dropDownList,
			layoutSwitch,
			paneCheckbox
		}
	}

	toggleDropdownButton() {
		const button = this.locators.dropDownButton;
		this.page.waitForVisible(button);
		this.page.click(button);
	}

	setPane(pane) {
		this.toggleDropdownButton();
		this.page.waitForVisible(this.locators.dropDownList);
		
		const is3pane = this.hasClass(this.locators.paneCheckbox, 'b-checkbox_checked');

		switch (pane) {
			case 2:
				if (is3pane) {
					this.page.click(this.locators.layoutSwitch);
				} else {
					// закрываем за собой меню
					this.toggleDropdownButton();
				}
				break;
			case 3:
				if (!is3pane) {
					this.page.click(this.locators.layoutSwitch);

				} else {
					// закрываем за собой меню
					this.toggleDropdownButton();
				}
				break;
		}
	}

	setLayout (width) {
		this.currentSize = width;
		const aspect_ratio = 1.3;
		let height = width / aspect_ratio;
		if (width < Layout.sizeXS) {
			height = width * aspect_ratio;
		}

		this.page.setViewportSize({width, height});
	}

}

export default new Layout();
