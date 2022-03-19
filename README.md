<div id="top"></div>

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/7orp3do/infoooze">
    <img src="./images/logo-dark.png#gh-dark-mode-only" alt="Logo" height="120px">
    <!-- <img src="./images/logo-light.png#gh-light-mode-only" alt="Logo" height="120px"> -->
  </a>

<h3 align="center">Infoooze</h3>

  <p align="center">
    <a href="https://github.com/7orp3do/infoooze">View Demo</a>
    ·
    <a href="https://github.com/7orp3do/infoooze/issues">Report Bug</a>
    ·
    <a href="https://github.com/7orp3do/infoooze/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## 📚 Table of Content

1. [About infoooze](#-about-infoooze)
   - [Features](#-features)
   - [Support](#-support)
2. [Getting Started](#-getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation on Linux](#-getting-started)
     - [Using NPM](#using-npm)
     - [Using GIT](#using-git)
     - [Using NPX](#using-npx)
   - [Installation on Android](#-getting-started)
   - [Installation on Windows](#-getting-started)
   - [Uninstall](#uninstall)
3. [Usage](#-usage)
   - [Options](#options)
   - [Examples](#examples)
4. [Contributing](#-contributing)
5. [License](#-license)
6. [Contact](#-contact)

<!-- ABOUT THE PROJECT -->

## ✨ About infoooze

### 💡 Features

1.  Insta Recon
2.  Subdomain Scanner
3.  Ports Scan
4.  User Recon
5.  Mail finder
6.  Exif metadata extract
7.  Whois Lookup
8.  IP Lookup
9.  Header Info
10. Domain Age
11. DNS Lookup
12. UserAgent Lookup
13. Git Recon
14. Expand URL
15. Instagram DP Viwer
16. Save Results to file

### 🔨 Support

| Linux | Termux | Windows | Mac |
| ----- | ------ | ------- | --- |
| ✔     | ✔      | ✔       | ❔   |

✔ Tested  
❔ - Not tested

<!-- GETTING STARTED -->

## 🚀 Getting Started


### Prerequisites

You need **NodeJs** 10 or later to run this tool. You can install NodeJs

- On Linux
  ```sh
  sudo su
  apt-get install nodejs
  ```
  > Although there is no need to install NodeJs on Kali Linux, as its packages are already present in Kali Linux.
- On Termux
  ```sh
  pkg install nodejs-lts python
  ```

### Installation on [Linux](https://wikipedia.org/wiki/Linux)

- #### Using NPM

  ```sh
  sudo su
  npm install -g -s infoooze
  ```

- #### Using GIT

  ```sh
  npm install git+ssh://git@github.com/7ORP3DO/infoooze.git -g
  ```

- #### Using NPX

  Try without install it locally.

  ```sh
  npx infoooze
  ```

### Installation on [Android](https://wikipedia.org/wiki/Android)

Installation Process is same as Linux

```sh
 npm install -g -s infoooze
```

### Installation on [Windows ](https://wikipedia.org/wiki/Microsoft_Windows)

1. Download and install NodeJs from [here](https://nodejs.org/en/download/).
2. Download infoooze zip file from [here](https://github.com/7ORP3DO/infoooze/zipball/master/).
3. Open infoooze folder and type following commands :

```bash
npm install
node index.js
```

### Uninstall

```sh
npm remove infoooze -g
```


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## 🚀 Usage

After installing you can run tool by just typing `infoooze`.

```sh
infoooze [options] [value]
```

### Options:

| Short Form | Long Form     | Description                       |
| :--------- | :------------ | :-------------------------------- |
| -n         | --dnslookup   | domain name system lookup         |
| -e         | --headerinfo  | find website headers              |
| -p         | --iplookup    | find IP info                      |
| -m         | --mailfinder  | find email with specific name     |
| -t         | --portscan    | find open ports                   |
| -x         | --exif        | extracts Exif metadata from image |
| -r         | --userrecon   | username reconnaissance           |
| -w         | --whoislookup | find doamin's whois info          |
| -d         | --domainAge   | find website Age                  |
| -s         | --subdomain   | find subdomains of website        |
| -h         | --help        | Output usage information          |
| -g         | --gitrecon    | find github user info             |
| -i         | --instaRecon  | find Instagram users info         |
| -u         | --useragent   | find browser info                 |
| -l         | --urlexpand   | long url of shorten URL           |
| -v         | --version     | Output the version number         |

### Examples

- To Update Tool:
  ```sh
  npm update -g infoooze
  ```
- To get list of all the basic options use -h :
  ```sh
  infoooze -h
  ```
- To Get Instagram User Info:
  ```sh
  infoooze -i instagam
  ```
- To Get Domain's Whois Information:
  ```sh
  infoooze -w google.com
  ```
- To Get Subdomains of website:
  ```sh
  infoooze -s google.com
  ```
- To Get IP Information:
  ```sh
  infoooze -p 8.8.8.8
  ```
_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ScreenShots -->

<h2>📸 Screenshots</h2>
 
<br>

<img src="./images/screenshot1.png" width="40%"></img>
<img src="./images/screenshot2.png" width="40%"></img>

<img src="images/screenshot4.png" width="40%" ></img>
<img src="images/screenshot5.png" width="40%" ></img>

<img src="images/screenshot3.png" width="80%" ></img> 

<p align="right">(<a href="#top">back to top</a>)</p>
<hr>

<!-- CONTRIBUTING -->

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- ACKNOWLEDGMENTS -->

<!-- ## 👍 Acknowledgments


<!-- CONTACT -->

## 📧 Contact

- Twitter: [@bhps82](https://twitter.com/bhps82)
- Github: [@7ORP3DO](https://twitter.com/bhps82)

<img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/7orp3do/infoooz" width="0%" height="0%"> 

<!-- ## 🎨 Release History

- 🔖 1.0.0
  - 🚧 Work in progress -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/7orp3do/infoooze.svg?style=for-the-badge
[contributors-url]: https://github.com/7orp3do/infoooze/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/7orp3do/infoooze.svg?style=for-the-badge
[forks-url]: https://github.com/7orp3do/infoooze/network/members
[stars-shield]: https://img.shields.io/github/stars/7orp3do/infoooze.svg?style=for-the-badge
[stars-url]: https://github.com/7orp3do/infoooze/stargazers
[issues-shield]: https://img.shields.io/github/issues/7orp3do/infoooze.svg?style=for-the-badge
[issues-url]: https://github.com/7orp3do/infoooze/issues
[license-shield]: https://img.shields.io/github/license/7orp3do/infoooze.svg?style=for-the-badge
[license-url]: https://github.com/7orp3do/infoooze/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/bhps82
[product-screenshot]: images/screenshot.png
