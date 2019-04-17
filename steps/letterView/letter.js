import DefaultSteps from '../default';
import page from '../../pages/letterView/letter';

class LetterViewSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openAttachViewer() {
        this.page.hasAttach();
		this.page.openAttach();
		this.page.switchToTab(1);
	}

	checkSubject(expected) {
		this.page.hasLetterContent();
		this.page.checkSubject(expected);
	}
}

export default new LetterViewSteps();