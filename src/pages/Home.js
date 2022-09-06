import React, { useState } from 'react';
import "../pages/Main.css";
import "./img/logo/logo3.png";
import mainLogo from "./img/logo/logo3.png";
import mainAbout from "./img/about/profile.png";
import mainIcon1 from "./img/icon/d1.png";
import mainIcon2 from "./img/icon/d2.png";
import { ethers } from "ethers";

/*
Data
*/

/* const price = 23;
const data=() =>{
    return price
}
 */

const Home = () => {
  const [addr, setAddr] = useState();
  const [deposite, setDeposite] = useState(0);
  const [roi, setRoi] = useState(0);
  const [referralReward, setReferralReward] = useState(0);
  const [claimed, setClaimed] = useState(0);
  const [reward, setReward] = useState(0);
  const [referredCount, setReferredCount] = useState(0);

  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  
  const address = "0x991B86901f9137374BfCb3A4af5937A870aAD47d"; 

  const abi = '[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"address","name":"_treasurer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Invested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"withdrawer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"referral","type":"bytes32"}],"name":"addReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"},{"internalType":"bool","name":"_blacklist","type":"bool"}],"name":"blacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"index","type":"uint16"}],"name":"dailyCollection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"myRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralLink","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setThirtyDayRewardPolicy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasurer","type":"address"}],"name":"setTreasurer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"thirtyDayRewardPolicy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"topup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasurer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"userDetails","outputs":[{"internalType":"uint256","name":"deposited","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"referralReward","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes32","name":"link","type":"bytes32"},{"internalType":"uint256","name":"directCount","type":"uint256"},{"internalType":"uint256","name":"referredCount","type":"uint256"},{"internalType":"bytes32","name":"referred","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
  const tokenAbi = [
    // Send some of your tokens to someone else
  "function approve(address delegate, uint256 numTokens)",
  ]
  // The Contract object
  const contract = new ethers.Contract(address, abi, provider);

  // async function transactionMined(transactionHash) {
  //   const txReceipt = await provider.getTransactionReceipt(transactionHash);
  //   if (txReceipt && txReceipt.blockNumber) {
  //       return txReceipt;
  //   }  
  // }

  async function connectWallet() {

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    console.log(addr);
    setAddr(addr);

    const userDetails = await contract.userDetails(addr); 
    const amount = userDetails.deposited.toNumber()/(10**10);
    setDeposite(amount);
    setRoi(amount*0.005);
    setReferralReward(parseFloat(userDetails.referralReward)/(10**10)*0.005);
    setClaimed(userDetails.claimed.toNumber()/(10**10));
    setReward(parseFloat(userDetails.reward)/(10**10));
    setReferredCount(userDetails.referredCount.toNumber());
    // const reff = await contract.referralLink("0x1d95eAbc614834Bf8Fb64d171D5577432187C436");

    // const signerContract = contract.connect(signer);
    // const ref = signerContract.setTreasurer("0x106aa65493c0096d4a777dCA393A4687eF7E8839");
    // console.log("ref: ", ref);
  }
  

  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async function addRef() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    // const reff = await contract.owner();
    // console.log("lol: ", reff);
    
    // Each DAI has 18 decimal places
    const tokenAddress = await contract.token();
    // const tokens = ethers.utils.parseUnits("100", 10);
    const tokens = 100*10**10;
    console.log(tokens);
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider).connect(signer);
    await tokenContract.approve(address, tokens);

    await sleep(15000);

    // const addr = "0xDC09B74bA5618D969979CF3495Ea3Dd14BC94312";
    let reffAddress = window.location.href.replace(window.location.origin, '');
    reffAddress = reffAddress.replace("/", '');
    if (reffAddress == '') {
      reffAddress = "0x1d95eAbc614834Bf8Fb64d171D5577432187C436";
    }
    const reff = await contract.referralLink(reffAddress);
    const userAddress = await signer.getAddress();
    // console.log(reff);
    const signerContract = contract.connect(signer);
    await signerContract.addReferral(userAddress, 100, reff);

  }

  async function topup() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    // const reff = await contract.owner();
    // console.log("lol: ", reff);
    
    // Each DAI has 18 decimal places
    const tokenAddress = await contract.token();
    // const tokens = ethers.utils.parseUnits("100", 10);
    const tokens = 100*10**10;
    console.log(tokens);
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider).connect(signer);
    await tokenContract.approve(address, tokens);

    await sleep(15000);

    const userAddress = await signer.getAddress();
    const signerContract = contract.connect(signer);
    await signerContract.topup(userAddress, 100);
  }
 
  async function withdraw() {
   // MetaMask requires requesting permission to connect users accounts
   await provider.send("eth_requestAccounts", []);

   // The MetaMask plugin also allows signing transactions to
   // send ether and pay to change state within the blockchain.
   // For this, you need the account signer...
   const signer = provider.getSigner();

   const signerContract = contract.connect(signer);
   await signerContract.claim(); 
  }
  
  return (
    <>
      <header className="header-one">
        <div id="sticker" className="header-menu-area header-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
                <div className="logo">
                  <a href="index-2.html">
                    <img src={imageFunction.mainLogo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-9">
                <div className="header-right ">
                  <button className="top-btn coin-btn"
                    onClick={() => connectWallet()}
                  >
                    CONEECT WALLET
                  </button>
                </div>
                <div className="header_menu f-right">
                  <nav id="mobile-menu">
                    <ul className="main-menu">
                      <li className="menu-item-has-children">
                        <a href="#">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index-2.html">Home 01</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 02</a>
                          </li>
                        </ul>
                      </li>
                      <li className="resulta">
                        <a href="about.html">About us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="user-panel.html">User panel</a>
                          </li>
                          <li>
                            <a href="coin.html">Coin Information</a>
                          </li>
                          <li>
                            <a href="stacking.html">Coin Stacking</a>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="token-ico.html">Token ICO</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="signup.html">Signup</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="contact">
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="notify-overlay"></div>
        <div className="dsahboard-area bg-color area-padding-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4">
                <aside className="sidebar">
                  <div className="dashboard-side">
                    <div className="dashboard-head">
                      <div className="dashboard-profile">
                        <img src={imageFunction.mainAbout} alt="" />
                        <div className="profile-content">
                          {/* <span className="pro-name">Stepen</span> */}
                          <span className="pro-id">ID: {addr}</span>
                          <span className="pro-number">{window.location.origin.toString()}/{addr}</span>
                          <button className="top-btn coin-btn"
                          onClick={() => {
                            const reff = window.location.origin.toString() + "/"+ addr.toString();
                            navigator.clipboard.writeText(reff)
                          }}
                          >
                            Copy Link
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-menu">
                      <ul>
                        <li className="active">
                          <a href="user-panel.html">
                            <i className="ti-dashboard"></i>Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="user-diposit.html">
                            <i className="ti-wallet"></i>MY STAKED
                          </a>
                        </li>
                        <li>
                          <a href="user-stacking.html">
                            <i className="ti-bar-chart"></i>MY NETWORK
                          </a>
                        </li>
                        <li>
                          <a href="user-withdraw.html">
                            <i className="ti-import"></i>MY BONUSES
                          </a>
                        </li>
                        <li>
                          <a href="user-transection.html">
                            <i className="ti-layout-list-thumb"></i>MY WITHDRAW
                          </a>
                        </li>
                        <li>
                          <a href="user-notification.html">
                            <i className="ti-bell"></i>Notifecations
                          </a>
                        </li>
                        <li>
                          <a href="user-info.html">
                            <i className="ti-settings"></i>Settings
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ti-shift-right"></i>Log out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </aside>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-8">
                <div className="row user-dashboard">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="user-top">
                      <div className="user-balance">
                        <span>Your balance</span>
                        <div className="main-bal">${reward}</div>
                      </div>
                      <div className="userboard-btn">
                        <button
                          className="user-btn coin-btn"
                          onClick={() => topup()}
                          >
                            REINVEST
                        </button>

                        <button
                          className="user-btn coin-btn"
                          onClick={() => addRef()}
                          >
                            Make a deposite
                        </button>
                        <button className="user-btn color-btn" href="#"
                        onClick={() => withdraw()}
                        >
                          Withdraw funds
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row dashboard-content">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">DAILY ROI</span>
                          <span className="pro-money">${roi}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src={imageFunction.mainIcon1} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">LEVEL ROI</span>
                          <span className="pro-money">${referralReward}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src={imageFunction.mainIcon2} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">PACKAGE</span>
                          <span className="pro-money">${deposite}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">WITHDRAW</span>
                          <span className="pro-money">${claimed}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">TOTAL INVEST</span>
                          <span className="pro-money">${deposite}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d5.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">TOTAL REFFERALS</span>
                          <span className="pro-money">{referredCount}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d6.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="send-money-form transection-log">
                      <div className="form-text">
                        <h4 className="form-top">Leaderboard</h4>
                        <div className="form-inner table-inner">
                          <table>
                            <tr>
                              <th>Date</th>
                              <th>Transaction ID</th>
                              <th>Amount</th>
                              <th>Details</th>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                            <tr>
                              <td>10/03/2021</td>
                              <td>XE2GB4DF5X</td>
                              <td>$600</td>
                              <td>Payment recieve from Don</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-area-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="copyright">
                  <p>
                    Copyright © 2022
                    <a href="#">PCH PRO</a> All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="services.html">Terms & Condition</a>
                    </li>
                    <li>
                      <a href="coin.html">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script src="js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/owl.carousel.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/jquery.nice-select.min.js"></script>
      <script src="js/jquery.meanmenu.js"></script>
      <script src="js/wow.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/main.js"></script>
    </>
  );
};
const imageFunction = {
  mainLogo,
  mainAbout,
  mainIcon1,
  mainIcon2,
};
export default Home;
