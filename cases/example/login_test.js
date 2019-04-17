import main from '../../steps/main';
import layout from '../../steps/layout';
import letters from '../../steps/letters';
import folders from '../../steps/sidebar/folders';

// пример теста
describe('test 2', () => {
	it('Авторизоваться и открыть первое письмо на странице', () => {
		main.open('https://mail.ru');
		main.login(process.env.QALOGIN, process.env.QAPASS);
		layout.setPaneAndSize(3);
		folders.clickFolderByNum(1);
        letters.openBySubject('Добро пожаловать в бета-сообщество Почты!');
	});
});