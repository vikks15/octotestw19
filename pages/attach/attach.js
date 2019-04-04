import DefaultPage from '../default';

class AttachPage extends DefaultPage {
    constructor() {
        super('attach');
    }

    get locators() {
        const container = '[class="b-viewer"]';

        return {
            container,
            fileName: '.b-filename__name',
            fileExtension: '.b-filename__extension',
            attachView: '[class*="b-view__image "]',
            forwardArrow: '[class*="arrow_forward"]',
            backArrow: '[class*="arrow_back"]',
        }
    }

    hasViewer (reverse = false) {
		try {
			this.page.waitForVisible(this.locators.attachView, null, reverse);
			return true;
		} catch (err) {
			return false;
		}
	}

    clickForwardArrow() {
        this.page.click(this.locators.forwardArrow);        
    }

    clickBackArrow() {
        this.page.click(this.locators.backArrow);     
    }

    checkFileName(expectedFileName, expectedExtension) {
        let fName = this.page.getText(this.locators.fileName);
        let fExtension = this.page.getText(this.locators.fileExtension);

        if (fName != expectedFileName || fExtension != expectedExtension) {
            throw new Error('Incorrect attach file name');
        }
    }
}

export default new AttachPage();