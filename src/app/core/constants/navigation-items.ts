export const MENU = [
  {
    label: 'Market',
    icon: 'assets/icons/market.svg',
    link: '/market'
  },
  {
    label: 'Accounts',
    icon: 'assets/icons/accounts.svg',
    link: '/accounts',
    decentralized: [
      {
        label: 'Main',
        link: '/decentralized',
        icon: 'assets/icons/wallet.svg',
        amount: 45204
      },
      {
        label: 'name',
        link: '/decentralized',
        icon: 'assets/icons/wallet.svg',
        amount: 45204
      }
    ],
    centralized: [
      {
        label: 'Binance',
        link: '/centralized',
        icon: 'assets/icons/exchange.svg',
        amount: 45204
      }
    ]
  },
  {
    label: 'Tax Hub',
    icon: 'assets/icons/taxes.svg',
    link: '/taxes'
  }
]

export const MARKET_TABS = [
  {
    label: 'Tokens',
    link: 'tokens'
  },
  {
    label: 'NFTs',
    link: 'nfts'
  }
]