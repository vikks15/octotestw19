import DefaultSteps from '../default';
import page from '../../pages/letterView/letter';

class LetterViewSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openAttachViewer() {
        this.page.hasAttach();
		this.page.openAttach();
		this.page.switchTab();
	}
}

export default new LetterViewSteps();