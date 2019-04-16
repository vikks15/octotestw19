import DefaultPage from '../default';

class FoldersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '[class^="sidebar"]';
		const navFolder = container + ' .nav-folders';
		return {
			container,
			navFolder,
			folderByName: (folderName) => navFolder + ` [class^="nav__item"][title="${folderName}"]`
		}
	}

	/**
	 * Клик по любой папке, если сайдбар не узкий
	 * @param {string} folderName
	 */
	clickFolderByName(folderName) {
		const locator = this.locators.folderByName(folderName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new FoldersPage();
