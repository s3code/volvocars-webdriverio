import merge from 'deepmerge'
import wdioConf from './wdio.conf.js'


exports.config = merge(wdioConf.config, {
    services: ["selenium-standalone"]
})