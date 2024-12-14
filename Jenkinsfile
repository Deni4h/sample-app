pipeline {
    agent any
    environment {
        APP_DIR = "/home/devops/sample-app"
        NODE_BIN = "/home/devops/.nvm/versions/node/v18.20.0/bin"
    }
    stages {
        stage('Prepare Environment') {
            steps {
                // Tambahkan Git safe directory
                sh '''
                git config --global --add safe.directory $APP_DIR
                '''
            }
        }
        stage('Pull Latest Code') {
            steps {
                // Pindah ke direktori aplikasi dan pull repository
                sh '''
                cd $APP_DIR
                git reset --hard
                git pull origin main
                '''
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh '''
                cd $APP_DIR
                npm install
                '''
            }
        }
        stage('Restart Application') {
            steps {
                // Restart aplikasi dengan PM2
                sh '''
                cd $APP_DIR
                $NODE_BIN/pm2 restart ecosystem.config.js --env production
                '''
            }
        }
    }
    post {
        success {
            echo 'Deploy berhasil!'
        }
        failure {
            echo 'Deploy gagal. Periksa error log di konsol Jenkins.'
        }
    }
}
