node {
    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {

        def customImage = docker.build("eanene/My-NodeJS-Web-App")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}