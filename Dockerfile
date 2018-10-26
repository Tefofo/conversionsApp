FROM java:8
EXPOSE 8080
ADD /target/ConvertionsApp.jar ConvertionsApp.jar
ENTRYPOINT ["java", "-jar", "ConvertionsApp.jar"]