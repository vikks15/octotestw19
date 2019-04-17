import main from '../../steps/main';
import layout from '../../steps/layout';
import letters from '../../steps/letters';
import folders from '../../steps/sidebar/folders';
import letter from '../../steps/letterView/letter';
import attach from '../../steps/attach/attach';

describe('test 1', () => {
	it('Открыть просмотр аттачей и перелистывать аттачи стрелками на экране', () => {
		main.open('https://mail.ru');
		main.login(process.env.QALOGIN, process.env.QAPASS);
		layout.setPaneAndSize(3);
		folders.clickFolderByNum(1);

		letters.openBySubject('test');
		letter.openAttachViewer();
		attach.clickForwardArrow();
		attach.checkFile('nature', '.jpg', 'nature.jpg - Почта Mail.ru');
		attach.clickBackArrow();
		attach.checkFile('letterr (1)', '.png', 'letterr (1).png - Почта Mail.ru');
	});
});