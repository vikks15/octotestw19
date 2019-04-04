import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';

// пример теста
describe('test 2', () => {
	it('Авторизоваться и открыть первое письмо на странице', () => {
		main.open('https://mail.ru');
		main.login(process.env.QALOGIN, process.env.QAPASS);
        layout.setPaneAndSize(3);
        folders.clickFolderByName('Входящие');
        letters.openBySubject('Добро пожаловать в бета-сообщество Почты!');
	});
});