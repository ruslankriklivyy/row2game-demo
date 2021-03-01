import scrollTop from './scrollTop';

const onSelectItem = (index, onSelectLink = null) => {
  if (onSelectLink) {
    onSelectLink(index);
  }

  scrollTop();
};

export default onSelectItem;
