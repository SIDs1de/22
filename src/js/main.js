document.addEventListener('DOMContentLoaded', () => {
  const vkSwitchWidth = () => {
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
  };

  const selectSwitch = () => {
    const selectWrapper = document.querySelector('.buy__select-wrapper');
    const select = document.querySelector('.buy__select');

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
  };

  // window.addEventListener('resize', vkSwitchWidth);
  vkSwitchWidth();
  selectSwitch();
});
