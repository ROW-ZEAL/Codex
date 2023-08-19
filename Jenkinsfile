pipeline {
    agent any
    environment {
        NODE_VERSION = '14.17.4'
    }
    stages {
        stage("build") {
            steps {
                echo 'Building the application'
                sh "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash"
                sh "source ~/.nvm/nvm.sh && nvm install $NODE_VERSION"
                sh "source ~/.nvm/nvm.sh && nvm use $NODE_VERSION"
                sh "npm install"
            }
        }
        stage("test") {
            steps {
                echo 'Testing the application'
                sh "npm test"
            }
        }
        stage("deploy") {
            steps {
                echo 'Deploying the application'
                sh "npm run deploy"
            }
        }
    }
}
