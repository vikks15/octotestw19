import main from '../../steps/main';
import layout from '../../steps/layout';
import letters from '../../steps/letters';
import folders from '../../steps/sidebar/folders';
import letter from '../../steps/letterView/letter';
import attach from '../../steps/attach/attach';

describe('test 3', () => {
	it('Проверка работы кнопки редактировать', () => {
		main.open('https://mail.ru');
		main.login(process.env.QALOGIN, process.env.QAPASS);
        layout.setPaneAndSize(3);
        folders.clickFolderByNum(1);
        letters.openBySubject('test2');
        letter.openAttachViewer();
        attach.clickEditBtn();
        attach.checkEditWindow();
	});
});