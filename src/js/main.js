document.addEventListener('DOMContentLoaded', () => {
  const vkSwitchWidth = () => {
    const vk_groups = document.querySelector('.buy__vk-groups');
    if (vk_groups) {
      if (window.innerWidth < 370) {
        VK.Widgets.Group(
          'vk_groups',
          {
            mode: 3,
            width: 270,
            height: 204,
            color1: 'FFFFFF',
            color2: '000000',
            color3: '5181B8',
          },
          171493284
        );
      } else if (window.innerWidth < 420) {
        VK.Widgets.Group(
          'vk_groups',
          {
            mode: 3,
            width: 320,
            height: 204,
            color1: 'FFFFFF',
            color2: '000000',
            color3: '5181B8',
          },
          171493284
        );
      } else if (window.innerWidth < 600) {
        VK.Widgets.Group(
          'vk_groups',
          {
            mode: 3,
            width: 370,
            height: 204,
            color1: 'FFFFFF',
            color2: '000000',
            color3: '5181B8',
          },
          171493284
        );
      } else {
        VK.Widgets.Group(
          'vk_groups',
          {
            mode: 3,
            width: 541,
            height: 204,
            color1: 'FFFFFF',
            color2: '000000',
            color3: '5181B8',
          },
          171493284
        );
      }
    }
  };

  const selectSwitch = () => {
    const selectWrapper = document.querySelector('.buy__select-wrapper');
    const select = document.querySelector('.buy__select');

    if (select) {
      select.addEventListener('click', () => {
        if (selectWrapper.classList.contains('_open')) {
          selectWrapper.classList.remove('_open');
        } else {
          selectWrapper.classList.add('_open');
        }
      });
      select.addEventListener('blur', () => {
        selectWrapper.classList.remove('_open');
      });
      select.addEventListener('changed', () => {
        selectWrapper.classList.remove('_open');
      });
    }
  };

  const popupsScript = () => {
    const openPopupsBtns = document.querySelectorAll('[data-open-popup]');
    const popups = document.querySelectorAll('[data-popup]');
    const html = document.querySelector('html');
    if (popups) {
      openPopupsBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          event.preventDefault();
          popups.forEach((popup) => {
            if (popup.dataset.popup === btn.dataset.openPopup) {
              popup.classList.add('active');
              const closeBtn = popup.querySelector('.popup__inner-close');
              const back = popup.querySelector('.popup__bg');
              html.classList.add('lock');

              closeBtn.addEventListener('click', () => {
                popup.classList.remove('active');
                html.classList.remove('lock');
              });

              back.addEventListener('click', () => {
                popup.classList.remove('active');
                html.classList.remove('lock');
              });

              const popupBody = popup.querySelector('.popup__body');
              const popupInner = popup.querySelector('.popup__inner');
              popupBody.addEventListener('click', (e) => {
                if (e.target === popupInner || e.target === popupBody) {
                  popup.classList.remove('active');
                  html.classList.remove('lock');
                }
              });
            }
          });
        });
      });
      popups.forEach((popup) => {
        const popupBody = popup.querySelector('.popup__body');
        const popupInner = popup.querySelector('.popup__inner');
        popupBody.style.minHeight = popupInner.offsetHeight + 20 + 'px';
      });
    }
  };

  const wows = () => {
    if (window.innerWidth < 700) {
      const infoListBtns = document.querySelectorAll('.buy__info-btn-wrapper');
      const companyText = document.querySelector('.buy__company-wrapper');

      companyText.dataset.wowDelay = '0s';
      infoListBtns[0].dataset.wowDelay = '0s';
      infoListBtns[1].dataset.wowDelay = '.2s';
      infoListBtns[2].dataset.wowDelay = '.4s';
      infoListBtns[3].dataset.wowDelay = '.6s';
    }
  };

  new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
  }).init();

  const validator = () => {
    const form = document.querySelector('.buy__form');
    const formBtn = document.querySelector('.buy__btn');
    const textInput = document.querySelector('.buy__text-input');
    const select = document.querySelector('.buy__select');

    const textInputSpan = document.querySelector('.buy__input-span');
    const selectSpan = document.querySelector('.buy__select-span');

    const re = new RegExp('^[0-9]+$');

    formBtn.addEventListener('click', () => {
      event.preventDefault();

      if (!textInput.value) {
        textInputSpan.innerHTML = 'Заполните поле!';
      } else {
        textInputSpan.innerHTML = '';
      }

      if (select.value === 'Выберите товар для покупки') {
        selectSpan.innerHTML = 'Вы не выбрали товар для покупки!';
      } else {
        selectSpan.innerHTML = '';
      }

      if (textInput.value && select.value !== 'Выберите товар для покупки') {
        form.submit();
      }
    });
  };

  validator();
  wows();
  vkSwitchWidth();
  selectSwitch();
  popupsScript();
});
