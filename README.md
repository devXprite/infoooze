<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/devXprite/infoooze">
    <img src="./images/logo-main.png" alt="Logo" height="135px">
  </a>

<h2 align="center">Infoooze</h2>

  <p align="center">
    <a href="https://github.com/devXprite/infoooze/issues/new?assignees=&labels=bug&template=bug_report.md&title=">Report Bug</a>
    ·
    <a href="https://github.com/devXprite/infoooze/issues">Request Feature</a>
  </p>

  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/devXprite/infoooze?style=flat">
  <img alt="npms.io (final)" src="https://img.shields.io/npms-io/quality-score/infoooze">
  <img alt="npm version" src="https://img.shields.io/npm/v/infoooze?color=green&label=version&style=flat"> <br>
  <img alt="npm" src="https://img.shields.io/npm/dm/infoooze?style=flat">
  <img alt="Libraries.io SourceRank" src="https://img.shields.io/librariesio/sourcerank/npm/infoooze">
<br />
<br />

</div>

<!-- TABLE OF CONTENTS -->

## Table of Content

1. [About Infoooze](#about-infoooze)
   - [Features](#features)
   - [Support](#support)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation on Linux](#getting-started)
   - [Installation on Android](#getting-started)
   - [Uninstall](#uninstall)
3. [Usage](#usage)
   - [Options](#options)
   - [Examples](#examples)
4. [Run in Gitpod](#run-with-gitpod)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About Infoooze


Infoooze is a powerful and user-friendly OSINT (Open-Source Intelligence) tool that allows you to quickly and easily gather information about a specific target. With Infoooze, you can easily search for information about websites, IP addresses, usernames, and more, all from the convenience of a simple command-line interface.  
  
One of the key features of Infoooze is its ability to work as a global package, allowing you to use it from any directory on your computer.It also has ability to automatically save the results of your searches to a text file. This means that you can easily access and refer to the information you have gathered at a later time.  
  
Infoooze is easy to install and use, making it an ideal tool for anyone looking to gather information quickly and efficiently. 

### Features

1.  InstaGram Recon
2.  Subdomain Scanner
3.  Ports Scan
4.  User Recon
5.  Mail finder
6.  URL Scanner
7.  Exif metadata
8.  Whois Lookup
9.  IP Lookup
10. Header Info
11. Website Age
12. DNS Lookup
13. UserAgent Lookup
14. Git Recon
15. URL Expander
16. Youtube Lookup
17. Instagram DP Viwer
18. Save Results to file

### Support

| Linux | Termux | Windows |
| :---: | :----: | :-----: |
|   ✔   |   ✔    |    ✔    |

✔ Tested  
❔ - Not tested

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You need **NodeJs** 12 or later to run this tool.  
To install Node.js, follow the instructions for your operating system:

- Linux
  ```bash
  sudo apt-get install nodejs
  ```
  > On many distros NodeJs is installed by default. 

- Termux
  ```bash
  pkg install nodejs-lts 
  ```

- Windows
  - Download the latest LTS version from [NodeJs](https://nodejs.org/en/download/).
  - Run the installer.
  - Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
  - Restart your computer. You won't be able to run Node.js until you restart your computer.

### Installation on [Linux](https://wikipedia.org/wiki/Linux)


```sh
sudo npm install infoooze -g -s
```

### Installation on [Termux](https://github.com/termux/termux-app#f-droid)

```sh
 npm install -g -s infoooze
```

### Uninstall
To uninstall Infoooze from your system, run the following command:

```sh
npm remove infoooze -g
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

After installing the tool, you can run it by typing `infoooze` in your terminal.

```sh
infoooze [options] [value]
```
> You can also use `infoze` or `infoooze` as a command.

### Options:

| Short Form | Long Form       | Description                                                                                            |
| :--------- | :-------------- | :----------------------------------------------------------------------------------------------------- |
| -r         | --userrecon     | Search for a username across multiple social media platforms to gather information on a specific user. |
| -m         | --mailfinder    | Search for an email address associated with a specific username or domain.                             |
| -u         | --useragent     | Quickly and easily identify the browser and device type.                                               |
| -w         | --whoislookup   | Find registration information for a specific domain.                                                   |
| -i         | --instaRecon    | Gather information on an Instagram user, such as their posts, followers, and more.                     |
| -p         | --iplookup      | Find information on a specific IP address, such as its location and hostname.                          |
| -t         | --portscan      | Search for open ports.                                                                                 |
| -d         | --domainage     | Find out how long a website has been registered and active on the internet.                            |
| -e         | --headerinfo    | View and analyze the HTTP headers of a website.                                                        |
| -n         | --dnslookup     | View DNS records for a specific domain and see how it is configured.                                   |
| -g         | --gitrecon      | Gather information on a GitHub user, such as their repositories, contributions, and more.              |
| -s         | --subdomain     | Find and enumerate the subdomains of a given website.                                                  |
| -x         | --exif          | Extract Exif metadata from images, such as camera make and model, date and time, and more.             |
| -a         | --webscan       | Analyze the suspicious URLs.                                                                           |
| -l         | --urlexpand     | Expand shortened URLs and see the full destination of a link.                                          |
| -y         | --youtubelookup | View the metadata of a YouTube video, such as the title, description, and tags.                        |


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
  infoooze -i instagram
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
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GitPod -->

## Run with Gitpod

Click this button to run your project on Gitpod which comes with pre-configured environment you need.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/devXprite/infoooze)


<!-- ScreenShots -->

<h2> Screenshots</h2>
 
<br>

<img src="./images/screenshot1.png" width="40%"> <img src="./images/screenshot2.png" width="40%">
<img src="images/screenshot4.png" width="40%" >
<img src="images/screenshot5.png" width="40%" >

<img src="images/screenshot3.png" width="80%" >

<p align="right">(<a href="#top">back to top</a>)</p>
<hr>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. First, fork the this repository on GitHub. This will create your own copy of the code that you can modify.
2. Next, clone the forked repository to your local machine. This will allow you to make changes to the code and test them.
3. Create a new branch for your changes. This helps to keep your changes separate from the main codebase until they are ready to be merged.
4. Make the necessary changes to the code and test them to ensure that they work as expected.
5. When you're happy with your changes, commit them to your forked repository and push them to GitHub.
6. Finally, submit a pull request to the this repository on GitHub. 
 
<p align="right">(<a href="#top">back to top</a>)</p>

## Contributors
Thank you so much all for spending your time to improve Infoooze.  
  
[![Contributors](https://contrib.rocks/image?repo=devXprite/infoooze)](https://github.com/devXprite/infoooze/graphs/contributors)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/devXprite/infoooze.svg?style=for-the-badge
[contributors-url]: https://github.com/devXprite/infoooze/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/devXprite/infoooze.svg?style=for-the-badge
[forks-url]: https://github.com/devXprite/infoooze/network/members
[stars-shield]: https://img.shields.io/github/stars/devXprite/infoooze.svg?style=for-the-badge
[stars-url]: https://github.com/devXprite/infoooze/stargazers
[issues-shield]: https://img.shields.io/github/issues/devXprite/infoooze.svg?style=for-the-badge
[issues-url]: https://github.com/devXprite/infoooze/issues
[license-shield]: https://img.shields.io/github/license/devXprite/infoooze.svg?style=for-the-badge
[license-url]: https://github.com/devXprite/infoooze/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/devXprite
[stangers-img-url]: https://reporoster.com/stars/dark/devXprite/infoooze
[forker-img-url]: https://reporoster.com/forks/dark/devXprite/infoooze
[product-screenshot]: images/screenshot.png
[downloads]: https://img.shields.io/npm/dw/infoooze?style=for-the-badge
[npm]: https://www.npmjs.com/package/infoooze
[version]: https://img.shields.io/npm/v/infoooze?style=for-the-badge
[quality]: https://img.shields.io/npms-io/quality-score/infoooze?style=for-the-badge
