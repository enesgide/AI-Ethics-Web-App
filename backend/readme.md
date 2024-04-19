<h1 align="center">Ethical AI Project</h1>

## Run the backend
- Install "MySQLWorkbenck"
- Create new data base user
user: root
PIN: Mysql123456
  
- Load project from the project folder and IntelliJ IDEA will automatically install related packages and compile the project.

- Creating the default question database
After loading the backend project in IntelliJ IDEA, go to src/test/java/com.sydney.au.ethicalaivalidation and right click on “DatabaseinsertFinal” to run this file to insert the default question database. 

- Running backend:
First run: test/DatabaseInsertFinal

Then run: application/bootrun


## Table of Contents
- [Set Up Development Environment](#set-up-development-environment)
  - [Eclipse with STS](#eclipse-with-sts)
  - [Visual Studio Code with STS](#visual-studio-code-with-sts)

## Set Up Development Environment
The project development supports the following two development environments:
- [Eclipse with STS](#eclipse-with-sts)
- [Visual Studio Code with STS](#visual-studio-code-with-sts)

### **Eclipse with STS**

### Install Spring Tools
1. Open Eclipse
2. Help > Eclipse Marketplace > search 'sts'
3. Install Spring Tools 

### Install Tomcat (Not Required)
1. Open Eclipse
1. Help > Eclipse Marketplace > search 'tomcat'
2. Install Tomcat 9 plugin
3. Download Tomcat 9 'https://tomcat.apache.org/download-90.cgi'
4. Preferences > Tomcat 
Tomcat version: Version 9.x
Tomcat home: 'path_to_tomcat/bin'

### Import Project from File System
1. Open Eclipse
2. File > Import Projects from File System or Archive
3. Select project folder
4. Keep all default settings, click **Finish** button.

### Connect to MySQL Database
1. In the project, open "src/main/resources/application.properties" file. Add your MySQL account in line 3 & 4 (username & password). Save it.
2. Build 'athicalaivalidation' database in your MySQL account.

### Connect to Email Box
1. In your email settings, find smtp settings.
2. Update line 6 to 13 in the file "src/main/resources/application.properties" according to your own email settings.

### Run Project
1. Complete all settings(database & email setting)
2. Start the MySQL service. (Run 'Command Prompt' as administrator, enter the '..../bin' folder of your MySQL, type 'net start mysql')
3. Right click the project in Package Explorer
4. Run As > Spring Boot App

### **Visual Studio Code with STS**

### Install Spring Boot Extension Package
1. Open 'https://marketplace.visualstudio.com/items?itemName=Pivotal.vscode-boot-dev-pack' in browser
2. Install 'Spring Boot Extension Package'

### Install Tomcat for Java (Not Required)
1. Open 'https://marketplace.visualstudio.com/items?itemName=adashen.vscode-tomcat'
2. Install 'Tomcat for Java'
3. Download Tomcat 9 'https://tomcat.apache.org/download-90.cgi';
3. <a href="https://code.visualstudio.com/docs/java/java-tomcat-jetty/tomcat.mp4" target="_blank">Configure Tomcat</a>

### Import Project
Folder > Open > import whole folder 'ethicalaivalidation'


### deploy before aws
1. sudo scp -i "ElensLatest.pem" -r ethicalaivalidation-0.0.1-SNAPSHOT.jar ubuntu@ec2-52-63-168-94.ap-southeast-2.compute.amazonaws.com:


### deploy on aws ec2

1. sudo apt install openjdk-11-jre-headless
2. apt-get update
3. sudo apt-get update
4.  ls
5.  sudo apt install openjdk-11-jre-headless
6.  nohup java -jar ethicalaivalidation-0.0.1-SNAPSHOT.jar > output.log &
7.  tail -f output.log
8.  ps -ef | grep java

9. guide to https://www.youtube.com/watch?v=LtkMf4ML7aU


### kill process
1. sudo lsof -i -P -n | grep LISTEN
2. sudo kill -9 <port id>