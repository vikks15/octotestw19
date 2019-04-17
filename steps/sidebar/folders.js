import DefaultSteps from '../default';
import page from '../../pages/sidebar/folders';

class FoldersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	clickFolderByNum(folderNum) {
		this.page.clickFolderByNum(folderNum);
	}

}

export default new FoldersSteps();
