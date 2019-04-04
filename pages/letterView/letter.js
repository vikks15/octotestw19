import DefaultPage from '../default';

class LetterView extends DefaultPage {
    constructor() {
        super('letter');
    }

    get locators() {
        const container = '[data-qa-id="letter-content"]';

        return {
            container,
            attachBlock: container + ` [data-qa-id="attach-list"]`
        }
    }

    hasAttach (reverse = false) {
		try {
			this.page.waitForVisible(this.locators.attachBlock, null, reverse);
			return true;
		} catch (err) {
			return false;
		}
	}

    openAttach() {
        this.page.click(this.locators.attachBlock);
    }
}

export default new LetterView();