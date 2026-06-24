# decodelabs-tasks
# Task 1 - Portfolio Website Hosting Using AWS S3

## Objective

Develop and host a personal portfolio website using AWS S3 Static Website Hosting.

## Implementation Steps

1. Developed a responsive portfolio website using HTML, CSS, and JavaScript.
2. Created an AWS S3 bucket.
3. Uploaded all website files to the S3 bucket.
4. Enabled Static Website Hosting.
5. Configured bucket permissions and public access.
6. Generated a public website endpoint.
7. Successfully hosted the portfolio website.

## Proof of Implementation

### Screenshots

* Portfolio Home Page
* S3 Bucket Creation
* Static Website Hosting Enabled
* Bucket Policy Configuration
* Live Website Output

## Technologies Used

* HTML
* CSS
* JavaScript
* AWS S3

## Outcome

Successfully deployed and hosted a personal portfolio website using AWS S3 Static Website Hosting.

# Task 2 - The Server Commander Using AWS EC2

## Objective

Provision and configure a virtual server using AWS EC2, securely connect through SSH, install and configure the Apache Web Server, and host a custom webpage.

---

## Implementation Steps

### 1. Created an AWS EC2 Instance

* Logged into AWS Management Console.
* Launched a new EC2 instance.
* Selected Ubuntu Server 22.04 LTS as the operating system.
* Chose the t2.micro instance type.

### 2. Configured Security Settings

* Created and downloaded a key pair (.pem) for secure access.
* Configured Security Group inbound rules:

  * SSH (Port 22)
  * HTTP (Port 80)

### 3. Connected to the Server

* Copied the Public IPv4 Address of the EC2 instance.
* Connected to the server securely using SSH.

### 4. Installed Apache Web Server

* Updated Ubuntu packages.
* Installed Apache2 using Linux commands.
* Verified Apache service status.

### 5. Hosted a Custom Webpage

* Modified the default Apache webpage.
* Created a custom "Welcome to DecodeLabs" webpage.
* Saved the webpage in the Apache web root directory.

### 6. Verified Website Hosting

* Accessed the website using the EC2 Public IP Address.
* Confirmed successful webpage hosting through a web browser.

---

## Proof of Implementation

### Screenshots

* EC2 Instance Running
* Security Group Configuration
* SSH Connection to EC2
* Apache Installation and Status
* Custom Webpage Source Code
* Live Website Output

---

## Technologies Used

* Amazon Web Services (AWS)
* EC2 (Elastic Compute Cloud)
* Ubuntu Server 22.04 LTS
* SSH (Secure Shell)
* Apache Web Server
* Linux Commands

---

## Outcome

Successfully provisioned and managed a cloud-based virtual server using AWS EC2, established secure remote access through SSH, installed and configured the Apache Web Server, and hosted a custom webpage accessible through the internet.


