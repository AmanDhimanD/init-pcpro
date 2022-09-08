import React, { useState } from "react";
import "../pages/Main.css";
import "./img/logo/logo3.png";
import "react-icons";
import mainLogo from "./img/logo/logo3.png";
import mainAbout from "./img/about/profile.png";
import mainIcon1 from "./img/icon/d1.png";
import mainIcon2 from "./img/icon/d2.png";
import mainIcon3 from "./img/icon/d3.png";
import mainIcon4 from "./img/icon/d4.png";
import mainIcon5 from "./img/icon/d5.png";
import mainIcon6 from "./img/icon/d6.png";

import { ethers } from "ethers";

import { TiArrowForward, TiBriefcase } from "react-icons/ti";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import {
  RiNotification2Line,
  RiMoneyDollarCircleFill,
  RiSettings2Line,
  RiLockPasswordLine,
  RiHomeSmileLine,
  RiPhoneFindLine,
  RiAlignLeft,
  RiContactsLine,
  RiWallet3Line,
} from "react-icons/ri";

import { MdAddTask, MdHourglassEmpty, MdOutlineSavings } from "react-icons/md";
/*
Data
*/

/* const price = 23;
const data=() =>{
    return price
}
 */

const Home = () => {
  const [amount, setAmount] = useState(100);
  const [addr, setAddr] = useState();
  const [deposite, setDeposite] = useState(0);
  const [roi, setRoi] = useState(0);
  const [referralReward, setReferralReward] = useState(0);
  const [claimed, setClaimed] = useState(0);
  const [reward, setReward] = useState(0);
  const [referredCount, setReferredCount] = useState(0);

  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const address = "0xaE43cAb9725033cea25a35513EA0e664ad88f44B";

  const abi =
    '[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"address","name":"_treasurer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Invested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Reward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"withdrawer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"referral","type":"bytes32"}],"name":"addReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"},{"internalType":"bool","name":"_blacklist","type":"bool"}],"name":"blacklistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"invet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"list","type":"address[]"},{"internalType":"uint256[]","name":"amount","type":"uint256[]"}],"name":"multiWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"myDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"myRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"report","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setThirtyDayRewardPolicy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_treasurer","type":"address"}],"name":"setTreasurer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"thirtyDayRewardPolicy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"topup","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasurer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"userDetails","outputs":[{"internalType":"uint256","name":"deposited","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"referralReward","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes32","name":"link","type":"bytes32"},{"internalType":"uint256","name":"directCount","type":"uint256"},{"internalType":"uint256","name":"referredCount","type":"uint256"},{"internalType":"bytes32","name":"referred","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]';

  // const abi = [
  //   "function myRewards(address userAddress)"
  // ]

  const tokenAbi = [
    // Send some of your tokens to someone else
    "function approve(address delegate, uint256 numTokens)",
  ];
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

    const reward = await contract.myRewards(addr);
    setReward(reward / 10 ** 18);

    // const decimal = 10;

    let deposite = await contract.myDeposited(addr);
    //const amount = userDetails.deposited/(10**18);
    deposite = deposite / 10 ** 18;
    setDeposite(deposite);
    setRoi(deposite * 0.005);
    // setReferralReward(parseFloat(userDetails.referralReward/(10**18))*0.005);
    // setClaimed(userDetails.claimed/(10**18));
    // // setReward((userDetails.reward/(10**18)));
    setReward((deposite.referralReward / 10 ** 18) * 0.005 + amount * 0.005);
    setReferredCount(deposite.referredCount.toNumber());

    // const signerContract = contract.connect(signer);
    // const ref = signerContract.setTreasurer("0x106aa65493c0096d4a777dCA393A4687eF7E8839");
    // console.log("ref: ", ref);
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  function onPopupButton() {
    /* return alert("Button") */
    var amount = prompt("Please enter the deposite amount here", "100");

    
    /* document.getElementById("").innerHTML =
      "You have entered " + amount + " "; */
    
    if (amount >= 100) {
      setTimeout(addRef, 2000);
      
    }
    else {
      alert("please enter the correct amount")
      
    }
  }
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
    // Each DAI has 18 decimal places

    const tokens = ethers.utils.parseUnits(amount, 18);
    // const tokens = 100*10**18;
    console.log(tokens);
    const tokenContract = new ethers.Contract(
      tokenAddress,
      tokenAbi,
      provider
    ).connect(signer);
    await tokenContract.approve(address, tokens);

    await sleep(15000);

    const userAddress = await signer.getAddress();

    const signerContract = contract.connect(signer);
    await signerContract.invet(userAddress, amount);
  }

  // // const addr = "0xDC09B74bA5618D969979CF3495Ea3Dd14BC94312";
  // let reffAddress = window.location.href.replace(window.location.origin, '');
  // reffAddress = reffAddress.replace("/", '');
  // if (reffAddress == '') {
  //   reffAddress = "0x1d95eAbc614834Bf8Fb64d171D5577432187C436";
  // }
  // const reff = await contract.referralLink(reffAddress);
  // const userAddress = await signer.getAddress();
  // // console.log(reff);
  // const signerContract = contract.connect(signer);
  // await signerContract.addReferral(userAddress, 100, reff);
  

  async function topup() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    // const reff = await contract.owner();
    // console.log("lol: ", reff);

    if (amount < 100) {
      alert("enter amout > 100");
    } else {
      // Each DAI has 18 decimal places
      const tokenAddress = await contract.token();
      // const tokens = ethers.utils.parseUnits("100", 10);
      // Each DAI has 18 decimal places

      const tokens = ethers.utils.parseUnits(amount, 18);
      // const tokens = 100*10**18;
      console.log(tokens);
      const tokenContract = new ethers.Contract(
        tokenAddress,
        tokenAbi,
        provider
      ).connect(signer);
      await tokenContract.approve(address, tokens);

      await sleep(15000);

      const userAddress = await signer.getAddress();

      const signerContract = contract.connect(signer);
      await signerContract.topup(userAddress, amount);
    }
  }

  async function withdraw() {
    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();

    const signerContract = contract.connect(signer);
    await signerContract.withdraw();
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
                  <button
                    className="top-btn coin-btn"
                    onClick={() => connectWallet()}
                  >
                    CONEECT WALLET <RiWallet3Line />
                  </button>
                </div>
                <div className="header_menu f-right">
                  <nav id="mobile-menu">
                    <ul className="main-menu">
                      <li className="menu-item-has-children">
                        <a href="/Home">
                          Home <RiHomeSmileLine />{" "}
                        </a>
                      </li>
                      <li className="resulta">
                        <a href="about.html">
                          About us <RiPhoneFindLine />
                        </a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          Pages <RiAlignLeft />
                        </a>
                      </li>
                      {/*  <ul className="submenu">
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
                     */}
                      {/* <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li> */}
                      <li className="contact">
                        <a href="/Home">
                          Contact Us <RiContactsLine />
                        </a>
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
                          <span className="pro-id">Name: {addr}</span>
                          <span className="pro-number">
                            {/* {window.location.origin.toString()}/{addr} */}
                          </span>
                          {/*  <span className="pro-number">
                            Aman
                          </span> */}
                          <button
                            className="top-btn coin-btn"
                            onClick={() => {
                              const reff =
                                window.location.origin.toString() +
                                "/" +
                                addr.toString();
                              navigator.clipboard.writeText(reff);
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
                          <a href="/Home">
                            <TiArrowForward /> Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="#mystakedBoard">
                            <TiBriefcase /> MY STAKED
                          </a>
                        </li>
                        <li>
                          <a href="/Home">
                            <AiOutlineGlobal /> MY NETWORK
                          </a>
                        </li>
                        <li>
                          <a href="/Home">
                            <AiOutlineDeploymentUnit /> MY BONUSES
                          </a>
                        </li>
                        <li>
                          <a href="/Home">
                            <RiMoneyDollarCircleFill />
                            MY WITHDRAW
                          </a>
                        </li>
                        <li>
                          <a href="/Home">
                            <RiNotification2Line /> NOTIFICATION{" "}
                          </a>
                        </li>
                        <li>
                          <a href="/Home">
                            <RiSettings2Line /> SETTINGS
                          </a>
                        </li>
                        <li>
                          <a href="/Home">
                            <RiLockPasswordLine /> LOG OUT
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
                          REINVEST <MdAddTask />
                        </button>
                        <button
                          className="user-btn coin-btn"
                          /* onClick={() => addRef()} */
                          onClick={() => onPopupButton()}
                        >
                          DEPOSTE <MdHourglassEmpty />
                        </button>

                        <button
                          className="user-btn color-btn"
                          href="#"
                          onClick={() => withdraw()}
                        >
                          WITHDRAW <MdOutlineSavings />
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
                          <span className="pro-name">DAILY RDB</span>
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
                          <span className="pro-name">LEVEL RDB</span>
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
                          <img src={imageFunction.mainIcon3} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Starts */}
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">REWARDS</span>
                          <span className="pro-money">$0</span>
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
                          <span className="pro-name">MY DIRECTS</span>
                          <span className="pro-money">$0</span>
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
                          <span className="pro-name">MY LEVELS</span>
                          <span className="pro-money">$0</span>
                        </div>
                        <div className="invest-tumb">
                          <img src="img/icon/d3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ends */}

                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex flex-wrap align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">WITHDRAW</span>
                          <span className="pro-money">${claimed}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src={imageFunction.mainIcon3} alt="" />
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
                          <img src={imageFunction.mainIcon5} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="single-dash-head">
                      <div className="dashboard-amount d-flex align-items-center">
                        <div className="amount-content">
                          <span className="pro-name">TOTAL REFFERALS</span>
                          <span className="pro-money">${referredCount}</span>
                        </div>
                        <div className="invest-tumb">
                          <img src={imageFunction.mainIcon6} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="send-money-form transection-log">
                      <div className="form-text">
                        <h4 className="form-top" id="mystakedBoard">
                          MY STAKED
                        </h4>
                        <div className="form-inner table-inner">
                          <table>
                            <tr>
                              <th>Date</th>
                              <th>Transaction ID</th>
                              <th>Amount</th>
                              <th>Details</th>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td>$0</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td>$0</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td>$0</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td>$0</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td>$0</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td>$0</td>
                              <td></td>
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
      {/* Add promot */}
      <script src="minfile/quantumalert.js"></script>
    </>
  );
};                                        
const imageFunction = {
  mainLogo,
  mainAbout,
  mainIcon1,
  mainIcon2,
  mainIcon3,
  mainIcon4,
  mainIcon5,
  mainIcon6,
};
export default Home;
