import DefaultSteps from '../default';
import page from '../../pages/attach/attach';


class AttachSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    clickForwardArrow() {
        this.page.hasViewer();
        this.page.clickForwardArrow();
    }

    clickBackArrow() {
        this.page.hasViewer();
        this.page.clickBackArrow();
    }

    checkFile(fileName, fileExtension, tabName) {
        this.page.checkFileName(fileName, fileExtension);
        this.page.checkTabName(tabName);
    }
}

export default new AttachSteps();