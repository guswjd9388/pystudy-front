const isLocal = process.env.NODE_ENV !== 'production'
export default class Paths {
    static get HOST() {
        return isLocal ? 'http://localhost:3000' : 'http://pystudy.duckdns.org'
    }
    static get REDIRECT_URI() {
        return `${this.HOST}/api/auth/kakao`
    }
    static get PYTHON_SERVER_PATH() {
        return 'http://localhost:8000'
    }
    static get PYTHON_NOTICE_START() {
        return `${this.PYTHON_SERVER_PATH}/api/batch/notice/start`
    }
}