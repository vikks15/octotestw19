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
			folderByNum: (folderNum) => navFolder + ` [class*="nav_hover-support"] :nth-child(${folderNum})`
		}
	}

	/**
	 * Клик по любой папке по ее номеру в списке
	 * @param {string} folderName
	 */
	clickFolderByNum(folderNum) {
		const locator = this.locators.folderByNum(folderNum);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new FoldersPage();
