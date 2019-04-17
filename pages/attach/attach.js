import DefaultPage from '../default';

class AttachPage extends DefaultPage {
    constructor() {
        super('attach');
    }

    get locators() {
        const container = '.b-viewer';
        const slider = container + ' [class^="b-slider"]';        
        const toolbar = container + ' [class*="b-toolbar"]';

        return {
            container,
            toolbar,
            slider,
            forwardArrow: slider + ' [class*="arrow_forward"]',
            backArrow: slider + ' [class*="arrow_back"]',
            fileName: toolbar + ' .b-filename__name',
            fileExtension: toolbar + ' .b-filename__extension',
            title: container + ' [class*="viewport"] [href*="message"]',
        }
    }

    hasViewer (reverse = false) {
		try {
			this.page.waitForVisible(this.locators.slider, null, reverse);
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

    clickTitle() {
        this.page.click(this.locators.title);
    }

    checkFileName(expectedFileName, expectedExtension) {
        const fName = this.page.getText(this.locators.fileName);
        const fExtension = this.page.getText(this.locators.fileExtension);

        if (fName != expectedFileName || fExtension != expectedExtension) {
            throw new Error('Incorrect attach file name');
        }
    }
}

export default new AttachPage();