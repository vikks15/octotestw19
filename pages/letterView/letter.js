import DefaultPage from '../default';

class LetterView extends DefaultPage {
    constructor() {
        super('letter');
    }

    get locators() {
        const container = '[class*="letter-content"]';

        return {
            container,
            attachBlock: container + ' [class*="attach-list"]',
            subject: container + ' [class^="thread__subject"]',
        }
    }

    hasLetterContent(reverse = false) {
		try {
			this.page.waitForVisible(this.locators.container, null, reverse);
			return true;
		} catch (err) {
			return false;
		}
	}

    hasAttach(reverse = false) {
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

    checkSubject(expected) {
        const actual = this.page.getText(this.locators.subject);

        if(expected != actual) {
            throw new Error('Expected letter subject != actual');
        }
        return true;
    }
}

export default new LetterView();