/**
 * Copyright (c) 2017 Acebusters
 * Use of this source code is governed by an ISC
 * license that can be found in the LICENSE file.
 */

const DEFAULT_REF_CODE = '00000000';

export const MAIN_NET_GENESIS_BLOCK = '0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3';
export const RINKEBY_GENESIS_BLOCK = '0x6341fd3daf94b748c72ced5a5b26028f2474f5f00d824504e4fa37a75767e177';

export function conf() {
  let sub = '';
  if (window && window.location && window.location.host) {
    sub = window.location.host.split('.')[0];
  }
  // ### PRODUCTION ENVIRONMENT CONFIG
  if (sub === 'dapp' || sub === 'staging') {
    return {
      recaptchaKey: '6LcE0RQUAAAAAEf6UWFsHEPedPBmRPAQiaSiWynN',
      defaultRefCode: DEFAULT_REF_CODE,
      etherscanUrl: 'https://rinkeby.etherscan.io/',
      gethUrl: 'wss://rinkeby3.acebusters.com:443',
      firstBlockHash: RINKEBY_GENESIS_BLOCK,
      networkName: 'Rinkeby Testnet',
      oracleUrl: 'https://v83iq1161a.execute-api.eu-west-1.amazonaws.com/v0',
      accountUrl: 'https://vps13t4f7e.execute-api.eu-west-1.amazonaws.com/v0',
      reservationUrl: 'https://uiw0k5puaf.execute-api.eu-west-1.amazonaws.com/v0',
      gasStatUrl: 'https://l70xam4hh9.execute-api.eu-west-1.amazonaws.com/v0',
      contrAddr: '0x93CfE394087dCe0F04B4945f1697d87B1889c0Ef',
      ntzAddr: '0x652d4bd25fd0271bfef3bc9a5e720337d7d6b523',
      pwrAddr: '0xe2a24aec34ad4414bd9e4313cfda5f2e15c9cf0a',
      pullAddr: '0x681Db0fFB70F4509F6cF6217c83b7A817Ea8E7c6',
      tableFactory: '0xd4a32eeda3524a7d7fd68c93cb04b1e824ab645c',
      sentryDSN: 'https://8c3e021848b247ddaf627c8040f94e07@sentry.io/153017',
      gaProperty: 'UA-98848213-1',
      gtmId: 'GTM-T7SBXCK',
      pusherApiKey: 'd4832b88a2a81f296f53',
      shapeshiftKey: '',
    };
  }

  // ### SANDBOX ENVIRONMENT CONFIG
  return {
    recaptchaKey: '6LcE0RQUAAAAAEf6UWFsHEPedPBmRPAQiaSiWynN',
    defaultRefCode: DEFAULT_REF_CODE,
    etherscanUrl: 'https://rinkeby.etherscan.io/',
    gethUrl: 'wss://rinkeby3.acebusters.com:443',
    firstBlockHash: RINKEBY_GENESIS_BLOCK,
    networkName: 'Rinkeby Testnet',
    oracleUrl: 'https://evm4rumeob.execute-api.eu-west-1.amazonaws.com/v0',
    accountUrl: 'https://hsqkzjp3m8.execute-api.eu-west-1.amazonaws.com/v0',
    reservationUrl: 'https://6er5q4s7b0.execute-api.eu-west-1.amazonaws.com/v0',
    gasStatUrl: 'https://4by2hfw9mg.execute-api.eu-west-1.amazonaws.com/v0',
    contrAddr: '0xDE52B22E98C01Cb03cE07839865205386Ae6841D',
    ntzAddr: '0x84e18564498531da0858a36a44f60d24d8e947bd',
    pwrAddr: '0x230a4d30aedb677ecbb571201bc920692d56ecf5',
    pullAddr: '0xE79c15A4be58b8Ec4e0007E348f0EecbaF7d3DD8',
    tableFactory: '0x91c5b35c4aed82c1b5eecb191c418004281ec679',
    sentryDSN: 'https://8c3e021848b247ddaf627c8040f94e07@sentry.io/153017',
    gaProperty: 'UA-XXXXX-Y',
    gtmId: 'GTM-XXXX',
    pusherApiKey: 'd4832b88a2a81f296f53',
    shapeshiftKey: '',
  };
}

export const signerAddr = '0xdb2fdaf5b80c6a4c408e51b36ce7bbdd0c0852c4';
export const blocky = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADqklEQVR4Xu3d4XUTMRBFYbkFSkgtaQFKgBZSglsIJUAL1EIJaSHU4P10jpjk8pun1b65fjPryPbt7fXX+4J/P3+/gNql37/efRFYYfr93wIAqr/WCoASwAhCtSZgCYAFKAFKAETI5CVAQyARVAsg+xoCx0/BWP/x918CIAENgQ2BiJDJGwIbAomgWgDZ1xA4fgjC+o+//xIACWgIbAhEhEzeENgQSARxC6Cr/wd/TtX9q15fwXr9AFAHUR8Ah2cIrB/LAyAAGCJZoBYg7m3QlgAlwAaMri9RAlz3bouyBCgBtoB0dZES4Kpzm3QlQAmwCaVry5QA13zbpioBSoBtMF1ZqAS44tpGTQlQAmzE6fGlSoDHPduqKAFKgK1APbrY7f78RN8PcJrgR2/4o/1/PZIWAMOJCIDhBdTtB4A6OFwfAMMLqNsPAHVwuD4AhhdQtx8A6uBwfQAML6BuPwDUweH6ABheQN1+AKiDw/UBMLyAuv0AUAeH6wNgeAF1+wGgDg7XjwdAb+D0eYTT+9frHz8PoDcQAPaDHQGALeA0wHr9AAiAs2cCleBaQC0AX8MmPw2wXr8WYPXnbwrVBAuA4d8TGAD4wRA1EAOgBNACaITp9QPg8CeDAsB++VT9awjECNACaILp9QMgAHojSBjQV2AJ0FOA8MdPIbUAst9/M+jTJwD6/+nl2oKOJ8CnryAaEABo4HR5AEyvIO4/ANDA6fIAmF5B3H8AoIHT5QEwvYK4/wBAA6fLA2B6BXH/AYAGTpcHwPQK4v4DAA2cLg+A6RXE/QcAGjhdHgDTK4j7Pw4A7p/leqBCN6AF0Ourns8D6AZUHwDmYACYf3wmDy/P8gBAC2sBaKDKawHmYAlg/tUC0D+WlwBmYQlg/pUA6B/LSwCzsAQw/0oA9I/lJYBZWAKYfyUA+sfyEsAsLAHMvxIA/WN5CWAWlgDm3/wEWGu9iwf35yeRr5c/f0n/9vqL9Cr+8uMbLXHav1sAUP1WAJQARFAJUAsggLSF1gLI/lULOB1hDYE2RJcAJUCPgcJATwE9BQg/63QLrQVQ+RoCjxPcENgQiK9hkzcDNAMQQc0AvRNIAPVOYH8NJIB6CiD7PsBTwB1/NQz9Y3kngszCTgSZf/NPBJUARkAfDzf/WF0LMAtrAeZfLQD9Y3kJYBaWAOZfCYD+sbwEMAtLAPOvBED/WF4CmIUlgPlXAqB/LC8BzMISwPwrAdA/lpcAZmEJYP6VAOgfy0sAs/Af1PKArkvqmhoAAAAASUVORK5CYII=';
export const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
export const valuesShort = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
export const suits = ['c', 'd', 'h', 's'];
export const timeoutSeconds = 60;

// showStatus messages ***commented out means they are not implemented yet***
export const STATUS_MSG = {
  active: {
    type: 'seat',
    style: 'info',
    msg: 'active',
  },
  allIn: {
    type: 'action',
    style: 'warning',
    msg: 'all-in',
  },
  bet: {
    type: 'action',
    style: 'danger',
    msg: 'bet',
  },
  blindSmall: {
    type: 'action',
    style: 'info',
    msg: 'posted SB',
  },
  blindBig: {
    type: 'action',
    style: 'info',
    msg: 'posted BB',
  },
  call: {
    type: 'action',
    style: 'success',
    msg: 'call',
  },
  check: {
    type: 'action',
    style: 'success',
    msg: 'check',
  },
  fold: {
    type: 'action',
    style: 'info',
    msg: 'fold',
  },
  raise: {
    type: 'action',
    style: 'danger',
    msg: 'raise',
  },
  sitOut: {
    type: 'seat',
    style: 'info',
    msg: 'sit-out',
  },
  sittingIn: {
    type: 'seat',
    style: 'info',
    msg: 'sitting-in',
  },
  standingUp: {
    type: 'seat',
    style: 'info',
    msg: 'standing-up',
  },
  waiting: {
    type: 'seat',
    style: 'info',
    msg: 'waiting',
  },
};

export const ABI_CONTROLLER_CONTRACT = [{ constant: true, inputs: [], name: 'completeSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'minimumPowerUpSizeBabz', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'paused', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }];
export const ABI_TOKEN_CONTRACT = [{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_amountBabz', type: 'uint256' }], name: 'approve', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'powerPool', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_amountBabz', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'floor', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amountBabz', type: 'uint256' }, { name: '_data', type: 'bytes' }], name: 'transData', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'ceiling', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_holder', type: 'address' }, { name: '_amountBabz', type: 'uint256' }], name: 'powerDown', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_amountBabz', type: 'uint256' }], name: 'powerUp', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amountBabz', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_amountBabz', type: 'uint256' }, { name: '_data', type: 'bytes' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'activeSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amountBabz', type: 'uint256' }, { name: '_data', type: 'bytes' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_price', type: 'uint256' }, { name: '_amountBabz', type: 'uint256' }], name: 'sell', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_price', type: 'uint256' }], name: 'purchase', outputs: [], payable: true, stateMutability: 'payable', type: 'function' }, { constant: false, inputs: [{ name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { anonymous: false, inputs: [{ indexed: true, name: 'purchaser', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Purchase', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'seller', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Sell', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'owner', type: 'address' }, { indexed: true, name: 'spender', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'from', type: 'address' }, { indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }];
export const ABI_TABLE = [{"constant":true,"inputs":[],"name":"active","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"seats","outputs":[{"name":"senderAddr","type":"address"},{"name":"amount","type":"uint256"},{"name":"signerAddr","type":"address"},{"name":"exitHand","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastNettingRequestTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastHandNetted","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"hands","outputs":[{"name":"claimCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"blindStructure","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastNettingRequestHandId","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"blindLevelDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_token","type":"address"},{"name":"_oracle","type":"address"},{"name":"_seats","type":"uint256"},{"name":"_disputeTime","type":"uint256"},{"name":"_blindStructure","type":"uint16[]"},{"name":"_blindLevelDuration","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Join","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"hand","type":"uint256"}],"name":"NettingRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"hand","type":"uint256"}],"name":"Netted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"}],"name":"Leave","type":"event"},{"constant":true,"inputs":[{"name":"secsFromStart","type":"uint256"}],"name":"blindLevel","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"secsFromStart","type":"uint256"}],"name":"smallBlind","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLineup","outputs":[{"name":"","type":"uint256"},{"name":"addresses","type":"address[]"},{"name":"amounts","type":"uint256[]"},{"name":"exitHands","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_handId","type":"uint256"},{"name":"_addr","type":"address"}],"name":"getIn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_handId","type":"uint256"},{"name":"_addr","type":"address"}],"name":"getOut","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"inLineup","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_toggleReceipt","type":"bytes"}],"name":"toggleActive","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"tokenFallback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_r","type":"bytes32"},{"name":"_s","type":"bytes32"},{"name":"_pl","type":"bytes32"}],"name":"leave","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_sigs","type":"bytes"},{"name":"_newBal1","type":"bytes32"},{"name":"_newBal2","type":"bytes32"}],"name":"settle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_data","type":"bytes32[]"}],"name":"submit","outputs":[{"name":"writeCount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"net","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]; // eslint-disable-line
export const ABI_TABLE_FACTORY = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"admins","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"disputeTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_admin","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tables","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oracleAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTables","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_oracle","type":"address"},{"name":"_disputeTime","type":"uint256"}],"name":"configure","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blindStructure","type":"uint16[]"},{"name":"_blindLevelDuration","type":"uint256"},{"name":"_seats","type":"uint256"}],"name":"create","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]; // eslint-disable-line

export const TIMEOUT_PERIOD = (state) => (state === 'waiting' || state === 'dealing') ? 10 : 40;

function bn(num) {
  return num * 1000000000000;
}

// chip values and colors
export const chipValues = [
  [bn(25000), '#53353f'],
  [bn(5000), '#f056c5'],
  [bn(1000), '#e7e401'],
  [bn(500), '#774ac1'],
  [bn(100), '#000000'],
  [bn(50), '#328eee'],
  [bn(25), '#027707'],
  [bn(5), '#d48b30'],
  [bn(1), '#FFFFFF'],
];

export const seatChipColor = '#E01E40';

export const SEAT_COORDS = [
  [10, 40, 0],
  [90, 40, 0],
  [40, 12.5, 0],
  [60, 12.5, 0],
  [40, 71, 0],
  [60, 71, 0],
  [21, 21, 0],
  [79, 21, 0],
  [21, 60, 0],
  [79, 60, 0],
];


export const AMOUNT_COORDS = [
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
  [1.5, 4, 0],
];
