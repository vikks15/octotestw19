import main from '../../steps/main';
import layout from '../../steps/layout';
import letters from '../../steps/letters';
import letter from '../../steps/letterView/letter';
import attach from '../../steps/attach/attach';

describe('test 3', () => {
	it('Переход на текущее письмо по клику на заголовок аттача', () => {
		main.open('https://mail.ru');
		main.login(process.env.QALOGIN, process.env.QAPASS);
        layout.setPaneAndSize(3);
        letters.openBySubject('test');
        letter.openAttachViewer();
        attach.clickTitle();
        letter.checkSubject('test');
	});
});