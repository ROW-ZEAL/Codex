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
                sh "export NVM_DIR=\"$NVM_DIR\" && [ -s \"$NVM_DIR/nvm.sh\" ] && \\. \"$NVM_DIR/nvm.sh\" && nvm install $NODE_VERSION"
                sh "export NVM_DIR=\"$NVM_DIR\" && [ -s \"$NVM_DIR/nvm.sh\" ] && \\. \"$NVM_DIR/nvm.sh\" && nvm use $NODE_VERSION"
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
