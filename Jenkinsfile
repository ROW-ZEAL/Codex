pipeline {
    agent any
    environment {
        NVM_DIR = "$HOME/.nvm"
        NODE_VERSION = '14.17.4'
    }
    stages {
        stage("build") {
            steps {
                echo 'Building the application'
                sh "curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash"
                sh "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION && nvm use $NODE_VERSION && npm install"
            }
        }
        stage("test") {
            steps {
                echo 'Testing the application'
                sh "source $NVM_DIR/nvm.sh && npm test"
            }
        }
        stage("deploy") {
            steps {
                echo 'Deploying the application'
                sh "source $NVM_DIR/nvm.sh && npm run deploy"
            }
        }
    }
}
