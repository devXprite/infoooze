<div id="top"></div>

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/7orp3do/osint_tool">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">osint_tool</h3>

  <p align="center">
    This is a OSINT tool
    <br />
    <a href="https://github.com/7orp3do/osint_tool"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/7orp3do/osint_tool">View Demo</a>
    ·
    <a href="https://github.com/7orp3do/osint_tool/issues">Report Bug</a>
    ·
    <a href="https://github.com/7orp3do/osint_tool/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#Installation on">Installation on</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About osint_tool

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic

<!-- <p align="right">(<a href="#top">back to top</a>)</p> -->

## Features

| No  | Name        | Discription                   |
| --- | ----------- | ----------------------------- |
| 1   | userrecon   | username reconnaissance       |
| 2   | Mailfinder  | find email with specific name |
| 3   | Useragent   | find useragent info           |
| 4   | whoislookup | identify who is on domain     |
| 5   | InstaRecon  | find Instagram users info     |
| 6   | IP Lookup   | find IP info                  |
| 7   | Ports Scan  | find open ports on website    |
| 8   | Header Info | find website headers          |
| 9   | Domain Age  | find website Age              |
| 10  | DNS Lookup  | domain name system lookup     |

## Support

| Linux | Termux | Windows | Mac |
| ----- | ------ | ------- | --- |
| ✔     | ✔      | ✔       | ❔   |

✔ Tested  
❔ - Not tested

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

You need **NodeJs v14.x.x** to run this tool. You can install NodeJs

- On Linux
  ```sh
  sudo apt-get install nodejs python
  ```
- On Termux
  ```sh
  pkg install nodejs-lts python
  ```

### Installation on [Linux](https://wikipedia.org/wiki/Linux) [![alt tag](./images/OS-Linux-icon.png)](https://en.wikipedia.org/wiki/Linux)

- #### Using GIT

  ```sh
  git clone https://github.com/7ORP3DO/osint_tool.git
  cd osint_tool
  npm install
  npm start
  ```

- #### Using NPM

  This package is published on NPM so you can install it directly using [NPM](http://npm.com)

  ```sh
  npm install osint_tool -g
  ```

- #### Using NPX

  run without install it locally.

  ```sh
  npx osint_tool
  ```

### Installation on [Android](https://wikipedia.org/wiki/Android) [![alt tag](./images/android-icon.png)](https://en.wikipedia.org/wiki/Android)

```sh
git clone https://github.com/7ORP3DO/osint_tool.git
cd osint_tool
npm install
npm start
```

### Installation on [Windows ](https://wikipedia.org/wiki/Microsoft_Windows)[![alt tag](./images/Windows-icon.png)](https://en.wikipedia.org/wiki/Microsoft_Windows)

1. Download and install NodeJs from here.
2. Download osint_tool zip file from here.
3. Open osint_tool folder and type following commands :

```bash
npm install
node index.js
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

After installing you can run by just typing osint_tool.

### Options:


| Short Form | Long Form     | Description                        |
| ---------- | ------------- | ---------------------------------- |
| -D         | --DNSLookup   | domain name system lookup          |
| -H         | --HeaderInfo  | find website headers               |
| -I         | --IPLookup    | find IP info                       |
| -M         | --Mailfinder  | find email with specelse ific name |
| -P         | --PortsScan   | find open ports                    |
| -U         | --Userrecon   | username reconnaissance            |
| -W         | --Whoislookup | find doamin's whois info           |
| -d         | --domainAge   | find website Age                   |
| -h         | --help        | Output usage information           |
| -i         | --instaRecon  | find Instagram users info          |
| -u         | --useragent   | find browser info                  |
| -v         | --version     | Output the version number          |

### Examples

* To list all the basic options and switches use -h switch:  
  ```sh
  tool_name -h
  ```
* To Get Instagram User Info:  
  ```sh
  tool_name -i indian_cyber_ops
  ```
* To Get Domain's Whois Information:  
  ```sh
  tool_name -W google.com
  ```
* To Get IP To Information::  
  ```sh
  tool_name -I 8.8.8.8
  ```
_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/7orp3do/osint_tool/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

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

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

_Special thanks to [Biswajeet Ray](https://instagram.com/biswajeetray7) for pushing me to keep working._

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Prateek Singh - [@bhps82](https://twitter.com/bhps82) - bhps82@gmail.com

Project Link: [https://github.com/7orp3do/osint_tool](https://github.com/7orp3do/osint_tool)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/7orp3do/osint_tool.svg?style=for-the-badge
[contributors-url]: https://github.com/7orp3do/osint_tool/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/7orp3do/osint_tool.svg?style=for-the-badge
[forks-url]: https://github.com/7orp3do/osint_tool/network/members
[stars-shield]: https://img.shields.io/github/stars/7orp3do/osint_tool.svg?style=for-the-badge
[stars-url]: https://github.com/7orp3do/osint_tool/stargazers
[issues-shield]: https://img.shields.io/github/issues/7orp3do/osint_tool.svg?style=for-the-badge
[issues-url]: https://github.com/7orp3do/osint_tool/issues
[license-shield]: https://img.shields.io/github/license/7orp3do/osint_tool.svg?style=for-the-badge
[license-url]: https://github.com/7orp3do/osint_tool/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/bhps82
[product-screenshot]: images/screenshot.png
