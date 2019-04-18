import DefaultPage from '../default';

class AttachPage extends DefaultPage {
    constructor() {
        super('attach');
    }

    get locators() {
        const container = '.b-viewer';
        const slider = container + ' [class^="b-slider"]';        
        const toolbar = container + ' [class*="b-toolbar"]';
        const layerExplorerToCloud = '.layer-explorer-to-cloud';

        return {
            container,
            toolbar,
            slider,
            layerExplorerToCloud,
            forwardArrow: slider + ' [class*="arrow_forward"]',
            backArrow: slider + ' [class*="arrow_back"]',
            fileName: toolbar + ' .b-filename__name',
            fileExtension: toolbar + ' .b-filename__extension',
            title: container + ' [class*="viewport"] [href*="message"]',
            downloadBtn: toolbar + ' [data-name="download"]',
            saveToCloudBtn: toolbar + ' [data-name="saveToCloud"]',

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

    clickDownloadBtn() {
        this.page.click(this.locators.downloadBtn);
    }

    saveToCloud() {
        this.page.click(this.locators.saveToCloudBtn);
    }
    
    hasSaveToCloudWindow() {
        try {
            this.page.getTagName(this.locators.layerExplorerToCloud);
			return true;
		} catch (err) {
			throw new Error('No save to cloud window');
		}
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