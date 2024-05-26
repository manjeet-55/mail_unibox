// styles.js
export const SideBarStyles = {
    drawerPaper: {
      width: 200,
      boxSizing: 'border-box',
      background: '#f6f8fc',
    },
    addButton: {
      background: '#c2e7fe',
      border: 'none',
      padding: '0.75rem',
      borderRadius: '1rem',
      display: 'flex',
      columnGap: '0.5rem',
      width: '11rem',
      transition: '0.3s ease-in-out',
      alignItems: 'center',
      '&:hover': {
        background: '#c2e7fe',
        transform: 'scale(1.025)',
      },
    },
    addButtonText: {
      color: '#001d35',
    },
    composeButton: {
      background: '#c2e7fe',
      border: 'none',
      padding: '0.5rem',
      borderRadius: '0.75rem',
      display: 'flex',
      columnGap: '0.5rem',
      width: '9rem',
      transition: '0.3s ease-in-out',
      alignItems: 'center',
      '&:hover': {
        background: '#c2e7fe',
      },
    },
    composeButtonText: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#001d35',
    },
    composeIcon: {
      display: 'inline-block',
      paddingLeft: 0,
      marginLeft: 0,
      color: '#5a5a5a',
    },
    navItemText: {
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#001d35',
    },
  };
  