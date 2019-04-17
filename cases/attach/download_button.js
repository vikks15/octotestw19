import main from '../../steps/main';
import layout from '../../steps/layout';
import letters from '../../steps/letters';
import folders from '../../steps/sidebar/folders';
import letter from '../../steps/letterView/letter';
import attach from '../../steps/attach/attach';

describe('test 4', () => {
	it('Скачивание аттача при нажатии на кнопку скачать', () => {
		main.open('https://mail.ru');
		main.login(process.env.QALOGIN, process.env.QAPASS);
        layout.setPaneAndSize(3);
        folders.clickFolderByNum(1);
        letters.openBySubject('test');
        letter.openAttachViewer();
        attach.clickDownloadButton();
        attach.checkDownload();
	});
});