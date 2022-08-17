/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    document.querySelector('.sidebar-toggle').addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.toggle('sidebar-open');
      document.body.classList.toggle('sidebar-collapse');
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регистрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
   /* код с консультации
    document.querySelector('.menu-item_login > a').onclick = e => {
      e.preventDefault();
      App.getModal('login').open();
    };

    document.querySelector('.menu-item_logout > a').onclick = e => {
      e.preventDefault();
      User.logout((err, resp) => {
        if (resp && resp.success) {
          App.setState('init');
        }
      });
    };
   */

const itemRegister = document.querySelector('.menu-item_register');
    const itemLogin = document.querySelector('.menu-item_login');
    const logout = document.querySelector('.menu-item_logout');

    itemRegister.addEventListener('click', (e) => {
        e.preventDefault();
        App.getModal('register').open();
    });

    itemLogin.addEventListener('click', (e) => {
        e.preventDefault();
        App.getModal('login').open();
    });

    logout.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout({}, (err, response) => {
          if (err === null && response.success) {
            App.setState('init');
          }
      });
   });
  }
}