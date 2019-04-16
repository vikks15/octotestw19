import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators () {
		const container = '.dataset-letters';
		const items = container + ' .dataset__items';
		const subj = items + ' .llct__subject';

		return {
			container,
			items,
			subj,
			letterBySubject: (subject) => subj + `[title="${subject}"]`
		}
	}

	/**
	 * Проверяет есть ли письмо с темой
	 *
	 * @param {string} subject
	 * @param {boolean} reverse
	 * @returns {boolean}
	 */
	hasLetterBySubject (subject, reverse = false) {
		try {
			this.page.waitForVisible(this.locators.letterBySubject(subject), null, reverse);

			return true;
		} catch (err) {
			return false;
		}
	}

	/**
	 * Открыть письмо по теме
	 * @param  {string} subject
	 */
	openBySubject (subject) {
		this.page.click(this.locators.letterBySubject(subject));
	}

}

export default new LettersPage();
