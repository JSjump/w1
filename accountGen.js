// 账户生成
let bip39 = require("bip39");
const hdkey = require("ethereumjs-wallet/dist/hdkey").default;
let util = require("ethereumjs-util");
// let fs = require("fs");
console.log("hdkey", hdkey);

async function run() {
  try {
    // 1.生成助记词
    let mnemonic = bip39.generateMnemonic();
    console.log(mnemonic);

    // 2.将助记词转成seed
    let seed = await bip39.mnemonicToSeed(mnemonic);
    console.log("seed：" + util.bufferToHex(seed));

    // 3.通过hdkey将seed生成HD Wallet
    let hdWallet = hdkey.fromMasterSeed(seed);

    for (let i = 0; i < 1; i++) {
      //4.生成钱包中在m/44'/60'/0'/0/i路径的keypair
      let key = hdWallet.derivePath("m/44'/60'/0'/0/" + i);
      //5.从keypair中获取私钥
      console.log("私钥：" + util.bufferToHex(key._hdkey._privateKey));
      //6.从keypair中获取公钥
      console.log("公钥：" + util.bufferToHex(key._hdkey._publicKey));
      //7.使用keypair中的公钥生成地址
      let address = util.pubToAddress(key._hdkey._publicKey, true);
      //编码地址
      address = util.toChecksumAddress("0x" + address.toString("hex"));
      console.log("地址：" + address, "\n");
    }
  } catch (e) {
    console.log("生成失败", e);
  }
}

run();
